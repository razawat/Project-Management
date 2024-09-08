/* eslint-disable react/prop-types */
import DarkButton from "../Util/Button/DarkButton";
import Input from "../Util/Input/Input";
import { state } from "../../const";
import { useRef } from "react";

export default function CreateNewProject({saveNewProject}) {

    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

    function handleSave() {
        //console.log('In save',titleRef.current?.value,descRef.current?.value,dateRef.current?.value);
        const inputValues = {
            title:titleRef.current?.value,
            desc:descRef.current?.value,
            date:dateRef.current?.value,
        }
        saveNewProject(inputValues);
    }

  return (
    <div className="w-2/4 pl-5">
      <div className="flex flex-row justify-end gap-3">
        <DarkButton
          name="Cancel"
          extraClass="border-gray-300 hover:text-black"
          action={state.notSelected}
        />
        <DarkButton
          name="Save"
          extraClass="bg-zinc-700 hover:bg-zinc-600 hover:text-white"
          handleSave={handleSave}
        />
      </div>
      <div className="flex flex-col gap-8">
        <Input type="text" labelName="Title" id="title" ref={titleRef}/>
        <Input InputType="textarea" labelName="Description" id="desc" ref={descRef}/>
        <Input type="date" labelName="Date" id="date" ref={dateRef}/>
      </div>
    </div>
  );
}
