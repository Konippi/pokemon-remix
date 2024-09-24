import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPropsPrimitive,
} from "@/components/shadcn-ui";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("shadow-md", {
  variants: {
    size: {
      sm: "w-16 h-8 text-xs",
      md: "w-20 h-10 text-sm",
      lg: "w-24 h-12 text-base",
      icon: "w-10 h-10",
    },
    rounded: {
      default: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "default",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonVariants &
  Omit<ButtonPropsPrimitive, "size"> & {
    icon?: React.ReactNode;
    iconLocation?: "left" | "right";
  };

export function Button({
  className,
  value,
  icon: Icon,
  iconLocation = "left",
  size,
  rounded,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive className={cn(buttonVariants({ size, rounded }), className)} {...props}>
      {Icon && iconLocation === "left" && Icon}
      {value}
      {Icon && iconLocation === "right" && Icon}
    </ButtonPrimitive>
  );
}
