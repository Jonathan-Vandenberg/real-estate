import Link from "next/link";
import { Logo } from "../svgs/Logo";
import { Github, Slack, Twitter } from "../svgs/SocialIcons";
import { Container } from "./Container";

const footerLinks = [
  {
    title: "Properties",
    links: [{ title: "Listings", href: "/active-listings" }],
  },
  {
    title: "Company",
    links: [
      { title: "About HomeProp", href: "/about" },
      { title: "News", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Bond Calculator", href: "/buyers" },
      { title: "Price/m² Calculator", href: "/sellers" },
    ],
  },
  {
    title: "Information",
    links: [
      { title: "General Process", href: "#" },
      { title: "Buyers Laws", href: "#" },
      { title: "Sellers Laws", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="py-[5.6rem] mt-12 text-sm">
      <Container className="flex flex-col lg:flex-row justify-between">
        <div>
          <div className="flex flex-row justify-between lg:flex-col md:flex-row h-full">
            <div className="flex items-center">
              <Logo className="w-6 h-6" />{" "}
              <p className="text-gray ml-4">HomeProp</p>
            </div>
            <div className="mt-auto flex space-x-4 text-gray">
              <Twitter />
              <Github />
              <Slack />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="lg:min-w-[18rem] min-w-[50%] mt-10 lg:mt-0"
            >
              <h3 className="font-medium mb-3">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link
                      className="text-gray mb-3 block hover:text-off-white transition-colors"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
