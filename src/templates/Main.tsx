import React, { ReactNode } from 'react';

import Link from 'next/link';

import { ThemeToggle } from '../layout/ThemeToggle';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full bg-gray-50 text-gray-700 px-3 md:px-0 dark:bg-gray-900 dark:text-gray-50 transition-colors ease-linear">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300 dark:border-gray-800 pb-4">
        <div className="flex flex-row justify-between items-center">
          <div className="pt-16 pb-8">
            <div className="font-semibold text-3xl text-gray-900 dark:text-gray-50">
              {AppConfig.title}
            </div>
            <div className="text-xl">{AppConfig.description}</div>
          </div>
          <ThemeToggle />
        </div>
        <div>
          <ul className="flex text-xl space-x-6">
            <li>
              <Link href="/" passHref>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about/">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 dark:border-gray-800 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
      </div>
    </div>
  </div>
);

export { Main };
