import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

export function GradientButton({
  children,
  className,
  isLoading,
  variant = "primary",
  size = "default",
  ...props
}: GradientButtonProps) {
  // Professional Solid Styles
  const baseStyles =
    "relative transition-all duration-200 font-semibold rounded-full";

  const sizeStyles = {
    default: "px-6 py-2.5 text-sm",
    sm: "px-4 py-2 text-xs",
    lg: "px-8 py-3 text-base",
    icon: "h-10 w-10 p-2",
  };

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow active:scale-[0.98]",
    secondary:
      "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900",
  };

  return (
    <Button
      className={cn(baseStyles, variants[variant], sizeStyles[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
