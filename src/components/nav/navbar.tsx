import Link from "next/link";

import MaxWidthWrapper from "../max-width-wrapper";
import NavItems from "./nav-items";
import NavDivider from "./nav-divider";
import ProfileMenuLink from "./profile-menu-link";
import { Icons } from "../icons";
import Cart from "../cart";

const Navbar = () => {
  const user = null;

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {!user && (
                    <>
                      <ProfileMenuLink href="/sign-in">Sign In</ProfileMenuLink>
                      <NavDivider />
                      <ProfileMenuLink href="/sign-up">
                        Create Account
                      </ProfileMenuLink>
                    </>
                  )}

                  {user && <p>PIC</p>}

                  <NavDivider />
                  <div className="ml-4 flow-root">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
