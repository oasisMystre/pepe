import { IconType } from "react-icons";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa6";

type Social = {
  name: string;
  href: string;
  icon: IconType;
};

export const socials: Social[] = [
  { name: "Telegram", href: "", icon: FaTelegram },
  { name: "Twitter", href: "", icon: FaTwitter },
  { name: "Discord", href: "", icon: FaDiscord },
];
