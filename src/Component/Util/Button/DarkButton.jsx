import { useContext } from "react";
import { HandleCommunication } from "../../../Context Api/useContext";
//import { state } from "../../../const";

/* eslint-disable react/prop-types */
export default function DarkButton({
  name,
  extraClass,
  action,
  handleSave,
  handleDelete,
  handleAddTask,
  handleClearTask,
}) {
  const {addNewProject} = useContext(HandleCommunication);
  const buttonClass =
    "font-serif rounded-lg text-zinc-400 max-w-fit py-2 px-2 md:px-4  text-sm md:text-md " +
    extraClass;

  function handleButtonClick() {
    if (name === "Save") {
      handleSave();
    } else if (name === "Delete") {
      handleDelete();
    }
    else if(name == 'Add Task') {
        console.log('In add task');
        handleAddTask();
    } 
    else if(name == "Clear") {
        handleClearTask();
    }
    else {
      addNewProject(action);
    }
  }

  return (
    <button className={buttonClass} onClick={handleButtonClick}>
      {name}
    </button>
  );
}
