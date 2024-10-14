'use client';

import { Button } from '../ui/button';
import {
  renderThumb,
  renderTrack,
  renderView
} from '@/components/scrollbar/Scrollbar';
import Links from '@/components/sidebar/components/Links';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { IRoute } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, useContext, useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { HiX } from 'react-icons/hi';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import { UserContext, UserDetailsContext } from '@/contexts/layout';
import { createClient } from '@/utils/supabase/client';
import Link from "next/link";
import { useTheme } from 'next-themes';

const supabase = createClient();

export interface SidebarProps extends PropsWithChildren {
  routes: IRoute[];
  [x: string]: any;
}

function Sidebar(props: SidebarProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;
  const { routes } = props;
  const user = useContext(UserContext);
  const userDetails = useContext(UserDetailsContext);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false); // Track mounted status to prevent mismatch

  useEffect(() => {
    setMounted(true); // Set mounted to true after client-side rendering
  }, []);

  const handleSignOut = async (e) => {
    e.preventDefault();
    supabase.auth.signOut();
    router.push('/dashboard/signin');
  };

  // Don't render the logo until mounted to avoid mismatches
  if (!mounted) return null;

  return (
    <div
      className={`lg:!z-99 fixed !z-[99] min-h-full w-[300px] transition-all md:!z-[99] xl:!z-0 ${
        props.variant === 'auth' ? 'xl:hidden' : 'xl:block'
      } ${props.open ? '' : '-translate-x-[120%] xl:translate-x-[unset]'}`}
    >
      <Card
        className={`m-3 ml-3 h-[96.5vh] w-full overflow-hidden !rounded-lg border-zinc-200 pe-4 dark:border-zinc-800 sm:my-4 sm:mr-4 md:m-5 md:mr-[-50px]`}
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <span
                className="absolute top-4 block cursor-pointer text-zinc-200 dark:text-white/40 xl:hidden"
                onClick={() => props.setOpen(false)}
              >
                <HiX />
              </span>
              <div className={`mt-8 flex items-center justify-center`}>
                <Link href="/" className="flex items-center space-x-2">
                  {/* Conditionally render logo based on theme */}
                  <img
                    width="120px"
                    src={theme === 'dark' ? '/img/logo.png' : '/img/logo-dark.png'}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="mb-8 mt-8 h-px bg-zinc-200 dark:bg-white/10" />
              <ul>
                <Links routes={routes} />
              </ul>
            </div>
            <div className="mb-9 mt-7">
              <div className="mt-5 flex w-full items-center rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <Link href="/dashboard/settings">
                  <Avatar className="min-h-10 min-w-10">
                    <AvatarImage src={user?.user_metadata.avatar_url} />
                    <AvatarFallback className="font-bold dark:text-zinc-950" />
                  </Avatar>
                </Link>
                <Link href="/dashboard/settings">
                  <p className="ml-2 mr-3 flex items-center text-sm font-semibold leading-none text-zinc-950 dark:text-white">
                    {userDetails?.full_name ||
                      user?.user_metadata?.full_name ||
                      'User'}
                  </p>
                </Link>
                <Button
                  onClick={(e) => handleSignOut(e)}
                  variant="outline"
                  className="ml-auto flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full p-0 text-center text-sm font-medium hover:dark:text-white"
                  type="submit"
                >
                  <HiOutlineArrowRightOnRectangle
                    className="h-4 w-4 stroke-2 text-zinc-950 dark:text-white"
                    width="16px"
                    height="16px"
                    color="inherit"
                  />
                </Button>
              </div>
            </div>
          </div>
        </Scrollbars>
      </Card>
    </div>
  );
}

export default Sidebar;
