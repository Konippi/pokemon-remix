import {
  Avatar as AvatarPrimitive,
  AvatarFallback as AvatarPrimitiveFallback,
  AvatarImage as AvatarPrimitiveImage,
} from "@/components/shadcn-ui";
import { cn } from "@/lib/utils";

type AvatarProps = {
  className?: string;
  imgUrl?: string;
  imgAlt?: string;
  fallbackTxt: string;
};

export function Avatar({ className, imgUrl, imgAlt, fallbackTxt }: AvatarProps) {
  return (
    <AvatarPrimitive className={cn(className)}>
      {imgUrl ? (
        <AvatarPrimitiveImage src={imgUrl} alt={imgAlt} />
      ) : (
        <AvatarPrimitiveFallback>{fallbackTxt}</AvatarPrimitiveFallback>
      )}
    </AvatarPrimitive>
  );
}
