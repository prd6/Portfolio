const Card = ({ project }) => {
  return (
    <div
      className="card-container
      rounded-2xl
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      <div className="h-52 border-b border-(--border-color) overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-(--text-color) mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
              px-3
              py-1
              text-sm
              bg-(--bg-color)
              border
              border-(--border-color)
              rounded-full
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3">

          <a
            href={project.github}
            className="
            flex-1
            text-center
            py-2
            border
            border-black
            rounded-lg
            bg-(--bg-color)
            hover:opacity-50
            transition
            "
          >
            GitHub
          </a>

          <a
            href={project.live}
            className="
            flex-1
            text-center
            py-2
            bg-(--bg-color)
            text-(--text-color)
            rounded-lg
            hover:opacity-50
            transition
            "
          >
            Live
          </a>

        </div>

      </div>
    </div>
  );
};

export default Card;