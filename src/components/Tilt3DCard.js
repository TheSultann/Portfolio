import React, { useRef, useState } from "react";
import "./Tilt3DCard.css";

export const Tilt3DCard = ({ children, className = "", maxTilt = 12, depth = 20 }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    transition: "transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
  });
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${depth}px)`,
      transition: "transform 100ms ease-out",
    });

    setSpotlightPos({
      x: ((x / rect.width) * 100).toFixed(2),
      y: ((y / rect.height) * 100).toFixed(2),
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 500ms ease-out",
    });
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-3d-wrapper ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="tilt-spotlight"
        style={{
          background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(56, 189, 248, 0.15), transparent 40%)`,
          opacity: spotlightPos.opacity,
        }}
      />
      {children}
    </div>
  );
};
