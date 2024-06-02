// components/ProjectsPage.js
import React, { useState } from "react";
import ProjectCard from "./Card";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const info = [
    { id: 1, name: "CatBlog365", description: "Blog about cats with Dashbaord, Authentication and own API", techs: ["React", "Node", "Express", "MySQL"], image: "https://i.postimg.cc/8khSdXmT/image.png", link: "https://github.com/Gxrco/BlogReact" },
    { id: 2, name: "TheCozyWhiskers", description: "Website with database and own API to manage orders and control", techs: ["React", "PostgreSQL", "Node", "Express"], image: "https://i.postimg.cc/mrwBQ9gw/image.png", link: "https://the-cozy-whiskers.vercel.app"},
    { id: 3, name: "UVSHop", description: "Android Kotlin app for online shop using Firebase tools", techs: ["Jetpack Compose", "Kotlin", "Firebase"], image: "https://github.com/Gxrco/UVSHop/blob/master/ShowGit1.png?raw=true", link: "https://github.com/Gxrco/UVSHop"},
    { id: 4, name: "Feedback Finder App", description: "Mobile app prototype, recommendations and give feedback to places", techs: ["Figma", "Photoshop", "Usability Testing"], image: "https://i.postimg.cc/gcw5qhMK/image.png", link: "https://www.figma.com/proto/IIyUx9dNht15iah4wFfwoj/Proyecto-final%3A-Feedback-Finder?page-id=0%3A1&node-id=17-1119&viewport=338%2C275%2C0.36&t=x3GGr2mkYzrHAsav-1&scaling=min-zoom"},
  ];
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="projects-content">
      <div className="projects-container">
        {info.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
