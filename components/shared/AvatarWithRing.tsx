import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarWithRingProps {
  src?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  borderColor?: string;
}

export function AvatarWithRing({
  src,
  fallback = "TR",
  size = "md",
  className,
  borderColor = "from-sky-blue to-coral", // Gradient class
}: AvatarWithRingProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  return (
    <div
      className={cn(
        "rounded-full p-[2px] bg-gradient-to-r",
        borderColor,
        className
      )}
    >
      <Avatar
        className={cn(
          "border-2 border-white dark:border-background",
          sizeClasses[size]
        )}
      >
        <AvatarImage src={src} className="object-cover" />
        <AvatarFallback className="bg-sky-100 text-sky-700 font-bold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
