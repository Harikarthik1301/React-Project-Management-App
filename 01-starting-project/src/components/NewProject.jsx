import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAdd}) {

    const title = useRef();
    const Description = useRef();
    const DueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = Description.current.value;
        const enteredDueDate = DueDate.current.value;

        //validation
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '' ){

        }
        onAdd({
            title: enteredTitle,
            Description: enteredDescription,
            DueDate: enteredDueDate
        });

    }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={Description} label="Description" textarea={true} />
        <Input type="date" ref={DueDate} label="Due Date" />
      </div>
    </div>
  );
}
