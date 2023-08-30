import React from "react";
import Link from "next/link";
import Image from "next/image";

import { dark } from "@clerk/themes";
import { OrganizationSwitcher, SignedIn, SignInButton } from "@clerk/nextjs";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className=" text-heading3-bold text-light-1 max-xs:hidden">
          Threads
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className=" md:hidden">
          <SignedIn>
            <SignInButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignInButton>
          </SignedIn>
        </div>
      </div>

      <OrganizationSwitcher
        appearance={{
          baseTheme: dark,
          elements: {
            organizationSwitcherTrigger: "py-2 px-4",
          },
        }}
      />
    </nav>
  );
};

export default Topbar;
