'use client';

import { Button } from '@/components/ui/button';
import { OpenContext, UserContext } from '@/contexts/layout';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

export default function HeaderLinks() {
  const { open, setOpen } = useContext(OpenContext);
  const user = useContext(UserContext);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  
  // Track if the component has mounted to avoid SSR/client mismatch
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null during SSR or initial hydration to avoid mismatches
  if (!mounted) return null;

  return (
    <div className="relative flex min-w-max max-w-max flex-grow items-center justify-around gap-1 rounded-lg md:px-2 md:py-2 md:pl-3 xl:gap-2">
      <Button
        variant="outline"
        className="flex h-9 min-w-9 cursor-pointer rounded-full border-zinc-200 p-0 text-xl text-zinc-950 dark:border-zinc-800 dark:text-white md:min-h-10 md:min-w-10 xl:hidden"
        onClick={() => setOpen(false)}
      >
        <FiAlignJustify className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="flex h-9 min-w-9 cursor-pointer rounded-full border-zinc-200 p-0 text-xl text-zinc-950 dark:border-zinc-800 dark:text-white md:min-h-10 md:min-w-10"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? (
          <HiOutlineMoon className="h-4 w-4 stroke-2" />
        ) : (
          <HiOutlineSun className="h-5 w-5 stroke-2" />
        )}
      </Button>
    </div>
  );
}
