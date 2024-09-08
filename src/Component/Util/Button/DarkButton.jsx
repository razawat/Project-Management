import { useContext } from "react";
import { HandleCommunication } from "../../../Context Api/useContext";
//import { state } from "../../../const";

/* eslint-disable react/prop-types */
export default function DarkButton({ name, extraClass, action,handleSave }) {
  const handleClick = useContext(HandleCommunication);
  const buttonClass =
    "font-serif rounded-lg text-zinc-400 max-w-fit py-2 px-2 md:px-4 mt-7  text-sm md:text-md " +
    extraClass;

    function handleButtonClick() {
        if(name === 'Save') {
            handleSave();
        }
        else {
            handleClick(action);
        }

    }

  return (
    <button className={buttonClass} onClick={handleButtonClick}>
      {name}
    </button>
  );
}
