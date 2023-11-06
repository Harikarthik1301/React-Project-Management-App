import NewProjectSelectedImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NewProjectSelected({OnStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NewProjectSelectedImg}
        alt="An Empty Project List"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project Or Get started with a New Project
      </p>
      <p className="mt-8">
        <Button onClick={OnStartAddProject} >Create New Project</Button>
      </p>
    </div>
  );
}
