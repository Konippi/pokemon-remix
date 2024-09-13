import { Button as ButtonPrimitive } from "@/components/shadcn-ui";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-10 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    value?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    icon?: React.ReactNode;
    iconLocation?: "left" | "right";
  };

export function Button({
  className,
  value,
  variant,
  icon,
  iconLocation = "left",
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      {...props}
      className={cn(buttonVariants({ size }), className)}
      variant={variant}
    >
      {icon && iconLocation === "left" && <span className={value && "mr-1"}>{icon}</span>}
      {value}
      {icon && iconLocation === "right" && <span className={value && "ml-1"}>{icon}</span>}
    </ButtonPrimitive>
  );
}
