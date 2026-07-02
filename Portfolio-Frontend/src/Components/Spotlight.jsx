import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const spotlight = document.querySelector(".spotlight");

    let mouseX = 0,
      mouseY = 0;
    let x = 0,
      y = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    function animate() {
      x += (mouseX - x) * 0.1;
      y += (mouseY - y) * 0.1;

      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="spotlight" />;
}