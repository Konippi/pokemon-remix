import {
  Input as InputPrimitive,
  type InputProps as InputPropsPrimitive,
} from "@/components/shadcn-ui";
import { cn } from "@/lib/utils";
import type { SvgIconComponent } from "@mui/icons-material";
import { type VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
  "bg-transparent shadow-sm focus:border-2 focus-visible:ring-0 focus-visible:ring-offset-0",
  {
    variants: {
      size: {
        sm: "h-8 w-48 text-xs",
        md: "h-9 w-56 text-sm",
        lg: "h-10 w-64 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type InputVariants = VariantProps<typeof inputVariants>;

type InputProps = InputVariants &
  Omit<InputPropsPrimitive, "size"> & {
    className?: string;
    startIcon?: SvgIconComponent;
    iconStyle?: string;
  };

export function Input({ className, startIcon: StartIcon, size, iconStyle, ...props }: InputProps) {
  const iconSize = size === "lg" || size === "md" ? "medium" : "small";
  const paddingLeftBySize = size === "lg" ? "pl-10" : size === "md" ? "pl-9" : "pl-8";

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
