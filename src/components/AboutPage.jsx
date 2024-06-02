import React from "react";
import "./AboutPage.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const title = "Fullstack Developer";
  const favorite = ["React", "Vite", "Node.js", "Express.js", "SQL"];
  const description = "My passion for technology began since I know computers, I have gone through countless hobbies related to creativity, being able to code has given me the possibility to give way to my personal projects and the opportunity to implement solutions that add value to other projects. I am currently a student of Computer Science at the Universidad del Valle de Guatemala.";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [-10, 10]);
  const rotateY = useTransform(x, [-50, 50], [10, -10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = event.clientX - rect.left - centerX;
    const mouseY = event.clientY - rect.top - centerY;

    x.set(mouseX / centerX * 50);
    y.set(mouseY / centerY * 50);
  };

  return (
    <div className="content">
      <motion.div 
        className="page"
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h1>{title}</h1>
        <div className="tech__stack">
          <h2>Favorite technologies: </h2>
          <p>{favorite.join(", ")}</p>
        </div>
        <p className="description">{description}</p>
      </motion.div>

      <Link to="/Projects">
          <div className="message">
            <p className="message__text">Check my projects by yourself →</p>
          </div>
      </Link>
    </div>
  );
};

export default AboutPage;