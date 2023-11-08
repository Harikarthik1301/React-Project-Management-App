import Button from "./Button";
import Task from "./Task";

export default function SelectedProject({ project, OnDelete, OnAddTask, OnDeleteTask, tasks }) {
    const formattedDate = new Date(project.DueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: "short",
        day:'numeric'
    });
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button onClick={OnDelete}>Delete</Button> 
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.Description}</p>
            </header>
            <Task OnAdd={OnAddTask} onDelete={OnDeleteTask} tasks={tasks} />
        </div>
    );
}