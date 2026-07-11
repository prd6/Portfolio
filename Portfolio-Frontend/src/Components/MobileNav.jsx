import CardNav from "./CardNav/CardNav";
import logo from "../assets/logo.png";

const MobileNav = () => {
  const items = [
    {
      label: "About",
      bgColor: "#000000b3",
      textColor: "#fff",
      links: [{ label: "About", href: "#hero" }],
    },
    {
      label: "Works",
      bgColor: "#000000b3",
      textColor: "#fff",
      links: [{ label: "Works", href: "#works" }],
    },
    {
      label: "Constributions",
      bgColor: "#000000b3",
      textColor: "#fff",
      links: [{ label: "Constributions", href: "#Constributions" }],
    },
    {
      label: "Achivements",
      bgColor: "#000000b3",
      textColor: "#fff",
      links: [{ label: "Achivements", href: "#Achivements" }],
    },
    {
      label: "Contact",
      bgColor: "#000000b3",
      textColor: "#fff",
      links: [{ label: "Contact", href: "#contact" }],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Portfolio"
      items={items}
      baseColor="#070707bf"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
      theme="color"
      className="fixed top-4 left-1/2 z-50"
    />
  );
};

export default MobileNav;