import CardNav from "./CardNav/CardNav";
import logo from "../assets/logo.png";

const MobileNav = () => {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [{ label: "About", href: "#hero" }],
    },
    {
      label: "Works",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [{ label: "Works", href: "#works" }],
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
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
      ease="circ.out"
      theme="color"
      className="fixed top-4 left-1/2 z-50"
    />
  );
};

export default MobileNav;