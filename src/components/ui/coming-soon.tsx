"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComingSoonProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

export function ComingSoon({ title, icon: Icon, className }: ComingSoonProps) {
  return (
    <div className={cn("flex min-h-[60vh] items-center justify-center", className)}>
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            }}
          >
            <Icon
              className="text-muted-foreground/40 h-32 w-32 sm:h-36 sm:w-36"
              strokeWidth={1}
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}