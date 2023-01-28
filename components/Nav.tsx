import Link from "next/link";
import { Logo } from "./svgs/Logo";
import { Container } from "./Container";
import { HamburgerIcon } from "./svgs/HamburgerIcon";
import { useEffect, useState } from "react";
import classNames from "classnames";
import LoginBtn from "./LoginBtn";
import { useSession } from "next-auth/react";

function Nav() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  const { data: session, status } = useSession();

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className="fixed left-0 top-0 w-full border-b-2 border-off-white z-30 bg-white">
      <Container className="flex h-navigation-height">
        <Link href="/">
          <div className="flex items-center text-md space-x-2 hover:cursor-pointer">
            <p className="md:hidden text-lg tracking-tighter font-light">HP</p>
            <p className="hidden md:block text-lg tracking-widest font-light">
              Highway Properties
            </p>
          </div>
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "h-full md:transition-none md:translate-x-0 md:h-auto md-w-auto overflow-hidden w-full md:block fixed md:relative",
              "top-navigation-height md:top-0 left-0 bg-off-white md:bg-transparent transition-opacity duration-500 md:opacity-100",
              hamburgerMenuIsOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-120vw]"
            )}
          >
            <ul
              className={classNames(
                "flex flex-col md:flex-row md:items-center  [&_a]:duration-300 md:[&_a]:translate-y-0",
                "ease-in [&_a]:text-md md:[&_a]:text-sm [&_li]:mx-6 [&_a:hover]:text-gray [&_a]:w-full [&_a]:transition-[color,transform] md:[&_a]:transition-colors",
                "[&_a]:h-navigation-height [&_a]:flex [&_a]:items-center md:[&_a]:border-none [&_a]:border-b [&_a]:border-gray-dark",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li
                className="tracking-wider font-light"
                onClick={() => setHamburgerMenuIsOpen(false)}
              >
                <Link href="/active-listings">Listings</Link>
              </li>
              <li
                className="tracking-wider font-light"
                onClick={() => setHamburgerMenuIsOpen(false)}
              >
                <Link href="/buyers">Buyers</Link>
              </li>
              <li
                onClick={() => setHamburgerMenuIsOpen(false)}
                className="md:hidden lg:block tracking-wider font-light"
              >
                <Link href="/sellers">Sellers</Link>
              </li>
              <li
                onClick={() => setHamburgerMenuIsOpen(false)}
                className="md:hidden lg:block tracking-wider font-light"
              >
                <Link href="#">Luxury</Link>
              </li>
              <li
                className="tracking-wider font-light"
                onClick={() => setHamburgerMenuIsOpen(false)}
              >
                <Link href="/blogs">News</Link>
              </li>
              <li
                className="tracking-wider font-light"
                onClick={() => setHamburgerMenuIsOpen(false)}
              >
                <Link href="/contact">Contact</Link>
              </li>
              {status === "authenticated" && (
                <li
                  className="tracking-wider font-light"
                  onClick={() => setHamburgerMenuIsOpen(false)}
                >
                  <Link href="/admin">Admin</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="ml-auto h-full flex items-center">
          <LoginBtn />
        </div>
        {/* <div className="ml-auto h-full flex items-center">
          <Link href="/auth/signin">
            <p className="text-md">Signin</p>
          </Link>
        </div> */}

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
}

export default Nav;
