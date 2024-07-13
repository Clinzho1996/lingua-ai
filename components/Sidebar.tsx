"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { SignOutButton } from "@clerk/nextjs";
import { IconLogout, IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  dark:bg-neutral-900 dark:border-transparentp-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6 mx-4">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-4 items-center p-4 justify-start rounded-xl",
                {
                  "bg-[#B02DD4]": isActive,
                }
              )}
            >
              <Image
                src={item.imgUrl}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row justify-center py-4 gap-3">
        <IconLogout />
        <SignOutButton />
      </div>
    </section>
  );
};

export default Sidebar;
