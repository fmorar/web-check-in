/** 
 * USERS
 * Note: This table contains user data. Users should only be able to view and update their own data.
 */
create table users (
  -- UUID from auth.users
  id uuid references auth.users not null primary key,
  full_name text,
  avatar_url text,
  trial_active boolean DEFAULT true, -- Flag que indica si el periodo de prueba está activo
  trial_end_date timestamp with time zone, -- Fecha en que termina el periodo de prueba
  -- Otros campos relevantes...
  created_at timestamp with time zone default timezone('utc'::text, now()) not null -- Fecha de creación del usuario
);
alter table users enable row level security;
create policy "Can view own user data." on users for select using (auth.uid() = id);
create policy "Can update own user data." on users for update using (auth.uid() = id);

/**
 * Este trigger automáticamente crea una entrada de usuario cuando un nuevo usuario se registra vía Supabase Auth.
 * Ahora también inicializa el periodo de prueba de 30 días.
 */ 
create function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.users (id, full_name, avatar_url, trial_end_date)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'avatar_url',
    timezone('utc', now()) + interval '30 days' -- Establece la fecha de fin de prueba a 30 días
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

/**
 * Esta función verifica si el periodo de prueba ha terminado y actualiza el flag `trial_active` a false.
 * Debes ejecutar esta función periódicamente o cuando el usuario acceda para verificar su estado de prueba.
 */
create function public.check_trial_period() 
returns trigger as $$
begin
  if (new.trial_end_date < now()) then
    update public.users
    set trial_active = false
    where id = new.id;
  end if;
  return new;
end;
$$ language plpgsql;

-- Puedes crear un trigger para que verifique el estado del periodo de prueba cuando un usuario actualiza sus datos.
create trigger check_trial_period_trigger
  before update on users
  for each row execute procedure public.check_trial_period();
