const Card = ({ project, API_URL }) => {
  return (
    <div className="rounded-3xl overflow-hidden border border-(--border-color) bg-[#181818] hover:-translate-y-2 transition-all duration-300">
      <img
        src={
          project.image.startsWith("http")
            ? project.image
            : `${API_URL}${project.image}`
        }
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className="text-gray-400 mt-3 line-clamp-3">
          {project.description}
        </p>

        <div className="flex gap-3 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white text-black hover:opacity-90 transition"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;