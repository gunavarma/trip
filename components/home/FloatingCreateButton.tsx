"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function FloatingCreateButton() {
  return (
    <Link href="/create">
      <motion.button
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-blue to-soft-purple rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse-glow" />
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-sky-blue to-soft-purple rounded-full shadow-lg border-2 border-white/20">
          <Plus className="w-8 h-8 text-white" />
        </div>
      </motion.button>
    </Link>
  );
}
