import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#007bff] font-bold">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="To-Do List App"
            bachgroundImg={"/assets/projects/todolist.jpg"}
            projectUrl="https://nayan1129.github.io/todo-app-redux/"
            technology="React Js"
          />
          <ProjectItem
            title="Keep Notes App"
            bachgroundImg={"/assets/projects/keepnotes.jpg"}
            projectUrl="https://nayan1129.github.io/keep-notes-react/"
            technology="React Js"
          />
          <ProjectItem
            title="Temperature Converter App"
            bachgroundImg={
              "/assets/projects/temperature converter.jpg"
            }
            projectUrl="https://idyllic-kataifi-09d4ce.netlify.app/"
            technology="React Js"
          />
          <ProjectItem
            title="Calculator App"
            bachgroundImg={"/assets/projects/calculator.jpg"}
            projectUrl="https://nayan1129.github.io/calculator-app-react/"
            technology="React Js"
          />
          <ProjectItem
            title="Ecommerce Landing Page"
            bachgroundImg={
              "/assets/projects/ecommerce landing page.jpg"
            }
            projectUrl="https://nayan1129.github.io/ecommerce-landing-page/"
            technology="React Js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
