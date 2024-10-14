'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signInWithEmail } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '../ui/input';
import { ImSpinner8 } from "react-icons/im";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

interface EmailSignInProps {
  allowPassword: boolean;
  redirectMethod: string;
  disableButton?: boolean;
}

export default function EmailSignIn({
  allowPassword,
  redirectMethod,
}: EmailSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithEmail, router);
    setIsSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-8">
      <form
        noValidate={true}
        className="mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="grid gap-2">
          {/* Email Field */}
          <div className="grid gap-1">
            <label className="text-zinc-950 dark:text-white" htmlFor="email">
              Email
            </label>
            <Input
              className="mr-2.5 mb-2 h-full min-h-[44px] w-full px-4 py-3 text-sm font-medium focus:outline-0 dark:placeholder:text-zinc-400"
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>

          {/* Password Field */}
          {allowPassword && (
            <div className="relative grid gap-1">
              <label className="text-zinc-950 dark:text-white" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Input
                  className="mr-2.5 mb-2 h-full min-h-[44px] w-full px-4 py-3 text-sm font-medium focus:outline-0 dark:placeholder:text-zinc-400"
                  id="password"
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                  name="password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-4 flex items-center text-zinc-600 dark:text-zinc-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye icon toggles */}
                </button>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
          >
            {isSubmitting ? (
              <ImSpinner8 />
            ) : (
              'Sign in'
            )}
          </Button>
        </div>
      </form>

      {/* Links for password signin and signup */}
      {allowPassword && (
        <>
          <p>
            <Link
              href="/dashboard/signin/password_signin"
              className="font-medium text-sm dark:text-white"
            >
              Sign in with email and password
            </Link>
          </p>
          <p>
            <Link
              href="/dashboard/signin/signup"
              className="font-medium text-sm dark:text-white"
            >
              Don't have an account? Sign up
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
