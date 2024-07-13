import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:px-8 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout;