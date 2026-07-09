import GooeyNav from "./GooeyNav/GooeyNav";

const DesktopNav = () => {
  const items = [
    { label: "About", href: "#hero" },
    { label: "Works", href: "#works" },
    { label: "Contributions", href: "#contributions" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 rounded-full border border-(--border-color) bg-(--nav-bg-color) px-6 py-3 backdrop-blur-md shadow-lg">
        <div className="text-2xl font-bold">Portfolio</div>

        <GooeyNav
          items={items}
          particleCount={24}
          particleDistances={[90, 10]}
          particleR={700}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={1400}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </nav>
  );
};

export default DesktopNav;