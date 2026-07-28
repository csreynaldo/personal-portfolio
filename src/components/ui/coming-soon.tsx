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
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
        >
          <span className="text-primary">~</span>
          <span>$</span>
          <span>./{title.toLowerCase().replace(/\s+/g, "-")}.sh --status</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            }}
          >
            <Icon
              className="text-muted-foreground/30 h-24 w-24 sm:h-28 sm:w-28"
              strokeWidth={1}
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
