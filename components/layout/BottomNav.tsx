"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, PlusSquare, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BottomNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/create", label: "Create", icon: PlusSquare },
    { href: "/messages", label: "Messages", icon: MessageCircle },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 pb-safe">
      <div className="flex justify-around items-center h-16">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative flex flex-col items-center justify-center w-full h-full"
            >
              <div
                className={cn(
                  "transition-all duration-200",
                  isActive ? "-translate-y-1" : ""
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6 transition-colors duration-200",
                    isActive ? "text-primary fill-primary/10" : "text-gray-400"
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium mt-1 transition-opacity",
                  isActive
                    ? "text-primary opacity-100"
                    : "text-gray-400 opacity-0"
                )}
              >
                {link.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute bottom-1 w-1 h-1 bg-primary rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
