import { useState, useEffect, useRef } from "react";
import Card from "../Components/Cards";
import FloatingIcons from "../Components/FloatingIcons";
import API_URL from "../api/api";
import {
  FaGithub,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Works = () => {

  const scrollRef = useRef(null);

const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -500,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({
    left: 500,
    behavior: "smooth",
  });
};

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

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

        <div className="relative">

  <button
    onClick={scrollLeft}
    className="leftscroll
      absolute
      left-0
      top-1/2
      -translate-y-1/2
      z-20
      w-12
      h-12
      rounded-full
      border
      border-(--border-color)
      bg-(--bg-color)
      flex
      items-center
      justify-center
      hover:scale-110
      transition
    "
  >
    <FaChevronLeft />
  </button>

  <div
    ref={scrollRef}
    className="
      flex
      w-460
      gap-8
      overflow-x-auto
      scroll-smooth
      scrollbar-none
      px-16
      py-2
    "
  >
    {projects.map((project) => (
      <div
        key={project._id}
        className="max-w-142 max-h-full shrink-0"
      >
        <Card project={project} />
      </div>
    ))}
  </div>

  <button
    onClick={scrollRight}
    className="rightscroll
      absolute
      right-0
      top-1/2
      -translate-y-1/2
      z-20
      w-12
      h-12
      rounded-full
      border
      border-(--border-color)
      bg-(--bg-color)
      flex
      items-center
      justify-center
      hover:scale-110
      transition
    "
  >
    <FaChevronRight />
  </button>

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