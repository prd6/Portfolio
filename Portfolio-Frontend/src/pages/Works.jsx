import { useEffect, useState } from "react";
import Card from "../Components/Cards";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import API_URL from "../api/api";
import LogoLoopController from "../Components/LogoLoop/LogoLoopController";
import StarBorder from '../Components/StarBorder/StarBorder'

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      id="works"
      className="min-h-screen bg-(--bg-color) text-(--text-color) md:py-40 px-6"
    >

      <div className="max-w-7xl mx-auto">
        <LogoLoopController />

        {/* Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="lg:w-1/3 w-full lg:sticky lg:top-28">

            <h2 className="text-5xl md:text-6xl font-bold mt-3 overflow-hidden">
              Selected
              <br />
              Works
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              A collection of projects I've built while learning
              backend development, machine learning and modern web
              technologies.
            </p>

            <StarBorder
              as="a"
              href="https://github.com/prd6?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
              speed="5s"
              className="px-4 py-2 text-sm mt-4"
            >
              <div className="flex gap-2 items-center">
                <FaGithub />
                <span>View All Projects</span>
                <FaArrowRight />
              </div>
            </StarBorder>
          </div>

          {/* Right */}
          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-8">

            {projects.map((project) => (
              <Card
                key={project._id}
                project={project}
                API_URL={API_URL}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Works;