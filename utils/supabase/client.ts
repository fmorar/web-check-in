import { createBrowserClient } from '@supabase/ssr';

let supabase: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (!supabase) {
    supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return supabase;
}

export async function getSession() {
  const supabase = createClient();
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error('Error retrieving session:', error);
    return null;
  }
  
  return session;
}
