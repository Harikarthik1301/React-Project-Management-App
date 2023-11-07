import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import NewProjectSelectedImg from "../assets/no-projects.png";

export default function NewProject({onAdd , onCancel}) {

    const modal = useRef();
    const title = useRef();
    const Description = useRef();
    const DueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = Description.current.value;
        const enteredDueDate = DueDate.current.value;

        //validation
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '' ){

            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            Description: enteredDescription,
            DueDate: enteredDueDate
        });

    }

  return (
    <>
    <Modal ref={modal} buttoncaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input!</h2>
        <p className="text-stone-600 mb-4">Oop...Looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please Enter Valid Input Field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
      <img
        src={NewProjectSelectedImg}
        alt="An Empty Project List"
        className="w-16 h-16 object-contain mx-auto ml-[-1rem]"
      />
      <h1 className="text-3xl font-bold text-stone-600 mx-auto mb-2">Create Your Project</h1>
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
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
    </>
  );
}
