import DarkButton from "../Util/Button/DarkButton";
import Input from "../Util/Input/Input";
import { state } from "../../const";

export default function CreateNewProject() {
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
          action={state.notSelected}
        />
      </div>
      <div className="flex flex-col gap-8">
        <Input type="text" labelName="Title" id="title" />
        <Input InputType="textarea" labelName="Description" id="desc" />
        <Input type="date" labelName="Date" id="date" />
      </div>
    </div>
  );
}
