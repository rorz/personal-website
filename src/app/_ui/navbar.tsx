"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

type NavLinkProps = {
  label: string;
  path: string;
  isActive: boolean;
};
const NavLink: FunctionComponent<NavLinkProps> = ({
  isActive,
  label,
  path,
}) => (
  <li>
    <Link
      className={cx(
        isActive ? "text-gray-900" : "text-gray-400",
        "font-display font-semibold"
      )}
      href={path}
    >
      {label}
    </Link>
  </li>
);

export const NavBar = () => {
  const pathname = usePathname();

  const links: [label: string, path: string][] = [
    ["about", "/"],
    ["posts", "/posts"],
    ["work", "/work"],
  ];

  return (
    <nav className="flex lg:flex-col items-end gap-y-8">
      <Link href="/">
        <div className="flex items-center justify-center">
          <h2 className="text-xl tracking-widest font-light text-gray-800">
            rorz.
          </h2>
        </div>
      </Link>
      <ul className="lg:mt-auto ml-auto items-end flex lg:flex-col gap-2 lg:w-full">
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            label={label}
            path={path}
            isActive={path === pathname}
          />
        ))}
      </ul>
    </nav>
  );
};
