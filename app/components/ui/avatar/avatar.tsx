import {
  Avatar as ShadcnAvatar,
  AvatarFallback as ShadcnAvatarFallback,
  AvatarImage as ShadcnAvatarImage,
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
    <ShadcnAvatar className={cn(className)}>
      {imgUrl ? (
        <ShadcnAvatarImage src={imgUrl} alt={imgAlt} />
      ) : (
        <ShadcnAvatarFallback>{fallbackTxt}</ShadcnAvatarFallback>
      )}
    </ShadcnAvatar>
  );
}
