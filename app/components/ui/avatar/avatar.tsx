import {
  Avatar as ShadcnAvatar,
  AvatarFallback as ShadcnAvatarFallback,
  AvatarImage as ShadcnAvatarImage,
} from "@shadcn-ui/avatar";

type AvatarProps = {
  imgUrl: string;
  imgAlt: string;
};

export default function Avatar(props: AvatarProps) {
  return (
    <ShadcnAvatar>
      <ShadcnAvatarImage src={props.imgUrl} alt={props.imgAlt} />
      <ShadcnAvatarFallback>No-Image</ShadcnAvatarFallback>
    </ShadcnAvatar>
  );
}
