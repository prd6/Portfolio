import { useEffect, useRef } from "react";

export default function Spotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector(".landing");

    if (!container) return;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;

    const move = (e) => {
      const rect = container.getBoundingClientRect();

      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    container.addEventListener("mousemove", move);

    function animate() {
      x += (mouseX - x) * 0.1;
      y += (mouseY - y) * 0.1;

      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${x}px`;
        spotlightRef.current.style.top = `${y}px`;
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      container.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={spotlightRef} className="spotlight"></div>;
}