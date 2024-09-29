/* eslint-disable react/prop-types */
import DarkButton from "../Util/Button/DarkButton";
import Input from "../Util/Input/Input";
import { state } from "../../const";
import { useRef, useState } from "react";
import Dialog from "../Util/Dialog/Dialog";

const fieldLabel = { title: "Title", desc: "Description", date: "Date" };

export default function CreateNewProject({ saveNewProject }) {
  const [dialogLabel, setDialogLabel] = useState();
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const dialogRef = useRef();

  function handleSave() {
    //console.log('In save',titleRef.current?.value,descRef.current?.value,dateRef.current?.value);

    const inputValues = {
      title: titleRef.current?.value,
      desc: descRef.current?.value,
      date: dateRef.current?.value,
      tasks: [],
    };

    // eslint-disable-next-line no-unused-vars
    let formValidCheck = Object.entries(inputValues).every(([key, value]) => {
      if (typeof value === "string" && value.trim() === "") {
        //window.alert(`${fieldLabel[key]} is required`);
        setDialogLabel(fieldLabel[key]);
        dialogRef.current.show();
        return false;
      }
      return true;
    });

    if (formValidCheck) {
      saveNewProject(inputValues);
    }
  }

  return (
    <>
      <Dialog ref={dialogRef} label={dialogLabel} />
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
          <Input
            type="text"
            labelName={fieldLabel.title}
            id="title"
            ref={titleRef}
          />
          <Input
            InputType="textarea"
            labelName={fieldLabel.desc}
            id="desc"
            ref={descRef}
          />
          <Input
            type="date"
            labelName={fieldLabel.date}
            id="date"
            ref={dateRef}
          />
        </div>
      </div>
    </>
  );
}
