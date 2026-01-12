import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300",
        hoverEffect && "hover:shadow-md hover:border-gray-200",
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
