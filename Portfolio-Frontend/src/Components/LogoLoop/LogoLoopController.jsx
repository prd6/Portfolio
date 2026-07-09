import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiDjango,
  SiFlask,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiVite,
  SiFigma,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "",
  },
  {
    node: <SiCss />,
    title: "CSS3",
    href: "",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "",
  },
  {
    node: <SiVite />,
    title: "Vite",
    href: "",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "",
  },
  {
    node: <SiExpress />,
    title: "Express",
    href: "",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "",
  },
  {
    node: <SiDjango />,
    title: "Django",
    href: "",
  },
  {
    node: <SiFlask />,
    title: "Flask",
    href: "",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "",
  },
  {
    node: <SiFirebase />,
    title: "Firebase",
    href: "",
  },
  {
    node: <SiGit />,
    title: "Git",
    href: "",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "",
  },
];

const LogoLoopController = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height: "200px",
        position: "relative",
      }}
    >
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={40}
        gap={50}
        hoverSpeed={50}
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology Stack"
        useCustomRender={false}
      />
    </div>
  );
};

export default LogoLoopController;