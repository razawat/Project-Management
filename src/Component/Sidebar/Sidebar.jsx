 
import DarkButton from "../Util/Button/DarkButton";
import { state } from "../../const";

export default function Sidebar() {
  return (
    <div className=" h-screen flex flex-col">
      <h1 className="text-white font-serif text-sm md:text-2xl font-bold">
        {" "}
        YOUR PROJECT
      </h1>
      <DarkButton
        name="+ Add Project"
        extraClass="bg-zinc-700 hover:bg-zinc-600 hover:text-white"
        action={state.createNewProject}
      />
      <ul></ul>
    </div>
  );
}
