'use client';

import { Button } from '@/components/ui/button';
import { updatePassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { ImSpinner8 } from "react-icons/im";


interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({
  redirectMethod
}: UpdatePasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, updatePassword, router);
    setIsSubmitting(false);
  };

  return (
    <div className="my-8">
      <form
        noValidate={true}
        className="mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="text-zinc-950 dark:text-white" htmlFor="password">
              New Password
            </label>
            <Input
              className="mr-2.5 mb-2 h-full min-h-[44px] w-full px-4 py-3 focus:outline-0 dark:placeholder:text-zinc-400"
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <label
              className="text-zinc-950 dark:text-white"
              htmlFor="passwordConfirm"
            >
              Confirm New Password
            </label>
            <Input
              className="mr-2.5 mb-2 h-full min-h-[44px] w-full px-4 py-3 focus:outline-0 dark:placeholder:text-zinc-400"
              id="passwordConfirm"
              placeholder="Password"
              type="password"
              name="passwordConfirm"
              autoComplete="current-password"
            />
          </div>
          <Button
            type="submit"
            className="mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
          >
            {isSubmitting ? (
              <ImSpinner8 />
            ) : (
              'Update Password'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
