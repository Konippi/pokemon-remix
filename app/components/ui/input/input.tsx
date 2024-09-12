import { Input as InputPrimitive } from "@/components/shadcn-ui";
import { cn } from "@/lib/utils";
import type { SvgIconComponent } from "@mui/icons-material";
import { type VariantProps, cva } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

type InputSize = "sm" | "md" | "lg" | "full";

type InputProps = {
  className?: string;
  startIcon?: SvgIconComponent;
  size?: InputSize;
  iconStyle?: string;
};

const inputVariants = cva(
  "bg-transparent shadow-sm focus:border-2 focus-visible:ring-0 focus-visible:ring-offset-0",
  {
    variants: {
      size: {
        sm: "h-8 w-48 text-xs",
        md: "h-10 w-64 text-sm",
        lg: "h-12 w-96 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type Props = VariantProps<typeof inputVariants> &
  InputProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export function Input({ className, startIcon: StartIcon, size, iconStyle, ...props }: Props) {
  const iconSize = size === "lg" ? "large" : size === "md" ? "medium" : "small";
  const paddingLeftBySize = size === "lg" ? "pl-11" : size === "md" ? "pl-9" : "pl-7";

  return (
    <div className="relative flex items-center">
      {StartIcon && (
        <div className="pointer-events-none absolute left-2 flex items-center">
          <StartIcon fontSize={iconSize} className={iconStyle} />
        </div>
      )}
      <InputPrimitive
        {...props}
        className={cn(inputVariants({ size }), StartIcon && paddingLeftBySize, className)}
      />
    </div>
  );
}
