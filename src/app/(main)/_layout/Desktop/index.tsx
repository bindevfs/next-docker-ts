'use client';
import {PropsWithChildren} from "react";
import Header from "@/app/(main)/_layout/Desktop/Header";

const DesktopLayout = ({ children }: PropsWithChildren) => {
    return (
        <section className="grid grid-rows-[auto,1fr,auto] md:grid-cols-[300px,1fr] md:grid-rows-[auto,1fr,auto] min-h-screen">
            <div className="row-span-1 col-span-full md:col-span-2">
                <Header />
            </div>
            <aside className="hidden md:block bg-gray-200 p-4">
                <nav>
                    <ul>
                        <li><a href="#" className="block py-2">Link 1</a></li>
                        <li><a href="#" className="block py-2">Link 2</a></li>
                        <li><a href="#" className="block py-2">Link 3</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="bg-white p-4 row-span-1 col-span-full md:col-span-1">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 row-span-1 col-span-full md:col-span-2">
                <p>Footer</p>
            </footer>
        </section>
    )
};
export default DesktopLayout;