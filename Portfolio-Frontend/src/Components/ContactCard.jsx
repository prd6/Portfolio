import GlareHover from "../Components/GlareHover/GlareHover";

const ContactCard = () => {
  return (
    <div className="w-full max-w-full relative">
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.7}
        glareAngle={-45}
        glareSize={200}
        transitionDuration={800}
        playOnce={false}
        borderColor="#000"
      >
        <div className="rounded-xl border border-(--border-color) bg-(--bg-color) p-8 w-2/3 h-2/3">

          <h3 className="text-3xl font-semibold mb-6">
            Let's Connect
          </h3>
          <h6 className="text-2xl font-semibold mb-6">
            It can be any project, constribution or even a Hello
          </h6>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p>prd6.itex.neo@gmail.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Github</p>
              <p>http://github.com/prd6</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Role</p>
              <p className="text-green-400">
                AI • Web Development • Open Source
              </p>
            </div>

          </div>

        </div>
      </GlareHover>
    </div>
  );
};

export default ContactCard;