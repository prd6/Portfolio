import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import PixelBlast from "../Components/PixelBlast/PixelBlast";
import ShinyText from "../Components/ShinyText/ShinyText";

const Hero = () => {
  const [animationOn, setAnimationOn] = useState(true);

  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [
        "Focused on Machine Learning, backend development",
        "I enjoy turning ideas into clean, efficient, and user-friendly software",
      ],
      autoStart: true,
      loop: true,
      delay: 20,
      pauseFor: 5000,
      deleteSpeed: 1,
    });

    return () => typewriter.stop();
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {animationOn && (
          <PixelBlast
            variant="square"
            pixelSize={5}
            color="#5e34f9"
            patternScale={2}
            patternDensity={0.7}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.3}
            edgeFade={0.25}
            transparent
          />
        )}
      </div>

      {/* Animation Toggle Button */}
      <button
        onClick={() => setAnimationOn(!animationOn)}
        className="stop-ani-button
          absolute
          top-6
          right-6
          px-4
          py-2
          rounded-xl
          border
          border-(--border-color)
          bg-(--nav-bg-color)
          text-(--text-color)
          backdrop-blur-md
          cursor-pointer
        "
      >
        {animationOn ? "Stop Animation" : "Start Animation"}
      </button>

      {/* Foreground */}
      <div className="text-container relative z-10 text-center w-4/9 h-55 rounded-2xl">
        <h1 className="text-6xl font-bold text-(--text-color) overflow-hidden">
          <ShinyText
            text="I'm Priyangshu"
            speed={3}
            delay={1}
            color="#ffffff"
            shineColor="#5e34f9"
            spread={90}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <br />
          yeah such a big name
        </h1>

        <p
          id="typewriter"
          className="mt-6 text-2xl text-(--text-color)"
        ></p>
      </div>
    </div>
  );
};

export default Hero;