import { type ReactNode } from "react";
import Link from "next/link";

import { buttonVariants } from "../ui/button";

interface ProfileMenuLinkProps {
  href: "/sign-up" | "/sign-in";
  children: ReactNode;
}

const ProfileMenuLink = (props: ProfileMenuLinkProps) => (
  <Link href={props.href} className={buttonVariants({ variant: "ghost" })}>
    {props.children}
  </Link>
);

export default ProfileMenuLink;
