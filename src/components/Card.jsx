import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { scale: 0.9 },
  animate: { scale: 1 },
  expanded: { scale: 1.1 },
};

const ProjectCard = ({ project, selectedId, setSelectedId }) => (
  <motion.div
    key={project.id}
    className="project-card"
    variants={cardVariants}
    initial="initial"
    animate={selectedId === project.id ? "expanded" : "animate"}
    transition={{ duration: 0.5 }}
    onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
    style={{
      boxShadow: selectedId === project.id ? '10px 10px 300px 52px rgba(200,78,252,0.4)' : 'none'
    }}
  >
    <div className="card__full">
      <div className="card__content">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p className="techs">{project.techs.join(', ')}</p>
      </div>
      <div className="card__image">
        <a href={project.link} target="_blank" rel="noopener noreferrer"> {/* Add this line */}
          <img
            src={project.image || `https://via.placeholder.com/300x200?text=${project.name}`}
            alt={project.name}
          />
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
