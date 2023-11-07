import { useState } from "react";
import NewProject from "./components/NewProject";
import NewProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  //For displaying NewProject component or NewProjectSelected component
  /*************/
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  //function for starting add process
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  //function that finishes add process
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  //function for CANCEL button
  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  //function for opening project details while clicking projecys title in projectsidebar
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  //function for delete project
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject} OnDelete={handleDeleteProject}/>;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NewProjectSelected OnStartAddProject={handleStartAddProject} />;
  }
  /*************/

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        OnStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        OnSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
