import { useState ,useRef } from "react";
import Modal from "./Modal";

export default function NewTask({OnAdd}) {
    
 const [enteredTask , setEnteredTask]   = useState('');
 const modal = useRef();

 function handleChange(event){
    setEnteredTask(event.target.value);
 }

 function handleClick(){
    if (enteredTask.trim() === '') {
        modal.current.open();
        return;
    }
    OnAdd(enteredTask);
    setEnteredTask("");
 }

    return (
        <>
        <Modal ref={modal} buttoncaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input!</h2>
        <p className="text-stone-600 mb-4">Please Enter Valid Task.</p>
    </Modal>
        <div className="flex items-center gap-4">
            <input  type="text" className="w-64 px-2 py-1 rounded-sm "
            onChange={handleChange} value={enteredTask}/>
            <button className="text-stone-700 hover:text-stone-950 px-2 py-2rounded-sm bg-stone-300" onClick={handleClick}>Add Task</button>
        </div>
        </>
    );
}