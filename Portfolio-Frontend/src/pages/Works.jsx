import Card from "../Components/Cards";
import FloatingIcons from "../Components/FloatingIcons";
import projects from "../data/projects";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const Works = () => {
  return (
    <div
      id="works"
      className="
      relative
      min-h-screen
      bg-(--bg-color)
      text-(--text-color)
      px-6
      py-20
      overflow-hidden
      "
    >
      <FloatingIcons />

      <div className="max-w-full mx-auto pt-10 relative z-10">

        <h2 className="text-6xl font-bold text-center">
          Selected Works
        </h2>

        <p className="text-(--text-color) text-lg mt-4 mb-16 text-center">
          Some projects I've built while learning and solving
          real-world problems.
        </p>

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          "
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/prd6?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8
              py-3
              border-2
              border-(--border-color)
              flex
              gap-3
              items-center
              bg-[#1b1b1b]
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:bg-[#0e0e0e]
              hover:text-(--text-color)
              hover:-translate-y-1
            "
          >
            <FaGithub />
            See All Works
            <FaArrowRight />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Works;