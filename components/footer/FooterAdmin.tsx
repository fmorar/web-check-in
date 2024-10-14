'use client';
import Link from 'next/link'
/*eslint-disable*/

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 xl:flex-row">
      <p className="mb-4 text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:!mb-0 md:text-lg">
        <span className="mb-4 text-center text-sm text-zinc-500 dark:text-zinc-400 sm:!mb-0 md:text-sm">
          ©{new Date().getFullYear()} Airchk. All rights reserved. Made with ❤️ in Costa Rica.
        </span>
      </p>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <Link
              target="blank"
              href="mailto:hello@simmmple.com"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href="https://horizon-ui.com/"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href="https://horizon-ui.com/boilerplate"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href="https://blog.horizon-ui.com/"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400"
            >
              Refund Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
