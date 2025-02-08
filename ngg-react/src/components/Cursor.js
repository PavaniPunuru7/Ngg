import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setPosX((prevX) => prevX + (mouseX - prevX) / 9);
      setPosY((prevY) => prevY + (mouseY - prevY) / 9);
    }, 16);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    gsap.to(".cursor-follower", { left: posX - 12, top: posY - 12 });
    gsap.to(".cursor", { left: mouseX, top: mouseY });
  }, [mouseX, mouseY, posX, posY]);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
};

export default Cursor;
