'use client';

import { Button } from '@/components/ui/button';
import { signInWithPassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useSearchParams
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { ImSpinner8 } from "react-icons/im";
import Link from 'next/link'

// Define prop type with allowEmail boolean
interface PasswordSignInProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function PasswordSignIn({
  allowEmail,
  redirectMethod
}: PasswordSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams(); // Access search params
  const error = searchParams.get('error'); // Get the error query param
  const errorDescription = searchParams.get('error_description'); // Get the error_description query param

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithPassword, router);
    setIsSubmitting(false);
  };

  return (
    <div>
      <form
        noValidate={true}
        className="mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="text-zinc-950 dark:text-white" htmlFor="email">
              Email
            </label>
            <Input
              className="mr-2.5 mb-2 h-full min-h-[44px] w-full px-4 py-3 focus:outline-0 dark:placeholder:text-zinc-400"
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            <label
              className="text-zinc-950 mt-2 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              className="mr-2.5 mb-2 h-full min-h-[44px] w-full px-4 py-3 focus:outline-0 dark:placeholder:text-zinc-400"
            />
          </div>
          <Button
            type="submit"
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
          >
            {isSubmitting ? (
              <ImSpinner8/>
            ) : (
              'Sign in'
            )}
          </Button>
        </div>
      </form>

      {/* Display error message */}
      {error && errorDescription && (
        <div className="mt-4 p-2 bg-red-100 border border-red-300 text-red-700 rounded-md">
          <p><strong>{error}:</strong> {errorDescription}</p>
        </div>
      )}

      <p>
        <Link
          href="/dashboard/signin/forgot_password"
          className="font-medium text-zinc-950 dark:text-white text-sm"
        >
          Forgot your password?
        </Link>
      </p>
      {allowEmail && (
        <p>
          <Link
            href="/dashboard/signin/email_signin"
            className="font-medium text-zinc-950 dark:text-white text-sm"
          >
            Sign in via magic link
          </Link>
        </p>
      )}
      <p>
        <Link
          href="/dashboard/signin/signup"
          className="font-medium text-zinc-950 dark:text-white text-sm"
        >
          Don't have an account? Sign up
        </Link>
      </p>
    </div>
  );
}
