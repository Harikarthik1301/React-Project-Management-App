import { useState } from "react";
import NewProject from "./components/NewProject";
import NewProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

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
  function handleAddProject(projectData){
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects , newProject]
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NewProjectSelected OnStartAddProject={handleStartAddProject} />;
  }
  /*************/

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar OnStartAddProject={handleStartAddProject}  projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
