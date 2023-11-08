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
    tasks: [],
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

  //function to add task for projects
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text : text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevState,      
        tasks: [...prevState.tasks ,newTask]
      };
    });
  }

  //function to delete task of projects
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject project={selectedProject} OnDelete={handleDeleteProject}
    OnAddTask={handleAddTask} OnDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>
  );
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
        selectedProjectId={projectState.selectedProjectId
        }
      />
      {content}
    </main>
  );
}

export default App;
