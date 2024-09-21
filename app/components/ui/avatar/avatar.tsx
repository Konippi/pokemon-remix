import {
  Avatar as AvatarPrimitive,
  AvatarFallback as AvatarPrimitiveFallback,
  AvatarImage as AvatarPrimitiveImage,
} from "@/components/shadcn-ui";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const avatarVariants = cva("shadow-md", {
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    },
    shape: {
      circle: "",
      square: "rounded-md",
    },
  },
  compoundVariants: [
    { size: ["sm", "md"], shape: "square", className: "rounded-md" },
    { size: "lg", shape: "square", className: "rounded-lg" },
  ],
  defaultVariants: {
    size: "md",
    shape: "circle",
  },
});

type AvatarVariants = VariantProps<typeof avatarVariants>;

type AvatarProps = AvatarVariants & {
  className?: string;
  imgUrl?: string;
  imgAlt?: string;
  fallbackTxt: string;
};

export function Avatar({ className, fallbackTxt, imgUrl, imgAlt, size, shape }: AvatarProps) {
  return (
    <AvatarPrimitive className={cn(avatarVariants({ size, shape }), className)}>
      {imgUrl ? (
        <AvatarPrimitiveImage src={imgUrl} alt={imgAlt} />
      ) : (
        <AvatarPrimitiveFallback>{fallbackTxt}</AvatarPrimitiveFallback>
      )}
    </AvatarPrimitive>
  );
}
