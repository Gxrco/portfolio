// components/ProjectsPage.js
import React, { useState } from "react";
import ProjectCard from "./Card";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const info = [
    { id: 1, name: "CatBlog365", description: "Blog about cats with Dashbaord, Authentication and own API", techs: ["React", "Node", "Express", "MySQL"], image: "https://private-user-images.githubusercontent.com/93165594/328708806-8a40a924-6568-4709-900f-4edc9823ddad.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTczNDU5NjcsIm5iZiI6MTcxNzM0NTY2NywicGF0aCI6Ii85MzE2NTU5NC8zMjg3MDg4MDYtOGE0MGE5MjQtNjU2OC00NzA5LTkwMGYtNGVkYzk4MjNkZGFkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjAyVDE2Mjc0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJjZDNiMDYxZTNlMWRhODdiZjQ4MmNlN2I2NmYzYmI1NDNkZDI5ZTVmMGI2ZTQ1MTMxMzY2OWZhNzdjODYzNDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9GfCDFer7fbjapjeeA6pR08irBf_6GQt8_4Bj6yDnb0", link: "https://github.com/Gxrco/BlogReact" },
    { id: 2, name: "TheCozyWhiskers", description: "Website with database and own API to manage orders and control", techs: ["React", "PostgreSQL", "Node", "Express"], image: "https://i.postimg.cc/mrwBQ9gw/image.png", link: "https://the-cozy-whiskers.vercel.app"},
    { id: 3, name: "UVSHop", description: "Android Kotlin app for online shop using Firebase tools", techs: ["Jetpack Compose", "Kotlin", "Firebase"], image: "https://github.com/Gxrco/UVSHop/blob/master/ShowGit1.png?raw=true", link: "https://github.com/Gxrco/UVSHop"},
    { id: 4, name: "Feedback Finder App", description: "Mobile app prototype, App could help people to receive recommendations and give feedback to places", techs: ["Figma", "Photoshop", "Usability Testing"], image: "https://i.postimg.cc/gcw5qhMK/image.png", link: "https://www.figma.com/proto/IIyUx9dNht15iah4wFfwoj/Proyecto-final%3A-Feedback-Finder?page-id=0%3A1&node-id=17-1119&viewport=338%2C275%2C0.36&t=x3GGr2mkYzrHAsav-1&scaling=min-zoom"},
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
