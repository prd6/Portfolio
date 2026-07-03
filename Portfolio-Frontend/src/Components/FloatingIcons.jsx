import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiHtml5,
  SiCss,
  SiCplusplus,
  SiFigma,
  SiVite,
} from "react-icons/si";

const icons = [
  SiPython,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiHtml5,
  SiCss,
  SiCplusplus,
  SiFigma,
  SiVite,
];

const FloatingIcons = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => {
      const Icon = icons[Math.floor(Math.random() * icons.length)];

      return {
        id: i,
        Icon,
        size: 25 + Math.random() * 35,
        opacity: 0.5 + Math.random() * 0.15,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * 900,
        moveX: (Math.random() - 0.5) * 500,
        moveY: (Math.random() - 0.5) * 300,
        duration: 18 + Math.random() * 12,
      };
    });
  }, []);

  return (
    <>
      {particles.map((item) => {
        const Icon = item.Icon;

        return (
          <motion.div
            key={item.id}
            className="absolute pointer-events-none"
            style={{
              left: item.initialX,
              top: item.initialY,
              opacity: item.opacity,
            }}
            animate={{
              x: [0, item.moveX, 0],
              y: [0, item.moveY, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon
              size={item.size}
              className="text-(--text-color)"
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default FloatingIcons;