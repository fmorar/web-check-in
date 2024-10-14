import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClient = () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const allCookies = cookieStore.getAll();
          //console.log('Cookies retrieved:', allCookies); // Debugging cookies
          return allCookies;
        },
        setAll(cookiesToSet) {
          try {
            //console.log('Setting cookies:', cookiesToSet); // Debugging cookies
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            console.error('Failed to set cookies:', error);
          }
        }
      }
    }
  );
};
