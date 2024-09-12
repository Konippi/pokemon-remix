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
      wsize: {
        sm: "w-36 text-xs",
        md: "w-48 text-sm",
        lg: "w-64 text-base",
        full: "w-full text-sm",
      },
    },
    defaultVariants: {
      wsize: "md",
    },
  }
);

type Props = VariantProps<typeof inputVariants> &
  InputProps &
  InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, startIcon: StartIcon, wsize, iconStyle, ...props }: Props) {
  const iconSize = wsize === "lg" ? "large" : wsize === "md" ? "medium" : "small";

  return (
    <div className="relative flex items-center">
      {StartIcon && (
        <div className="pointer-events-none absolute left-2 flex items-center">
          <StartIcon fontSize={iconSize} className={iconStyle} />
        </div>
      )}
      <InputPrimitive
        {...props}
        className={cn(
          inputVariants({ wsize }),
          StartIcon && wsize === "lg" ? "pl-11" : wsize === "md" ? "pl-9" : "pl-7",
          !StartIcon && "pl-3",
          className
        )}
      />
    </div>
  );
}
