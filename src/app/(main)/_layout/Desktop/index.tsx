'use client';
import { PropsWithChildren } from 'react';
import Header from '@/app/(main)/_layout/Desktop/Header';

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="grid min-h-screen grid-rows-[auto,1fr,auto] md:grid-cols-[300px,1fr] md:grid-rows-[auto,1fr,auto]">
      <div className="col-span-full row-span-1 md:col-span-2">
        <Header />
      </div>
      <aside className="hidden bg-gray-200 p-4 md:block">
        <nav>
          <ul>
            <li>
              <a href="#" className="block py-2">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="col-span-full row-span-1 bg-white p-4 md:col-span-1">{children}</main>
      <footer className="col-span-full row-span-1 bg-gray-800 p-4 text-white md:col-span-2">
        <p>Footer</p>
      </footer>
    </section>
  );
};
export default DesktopLayout;
