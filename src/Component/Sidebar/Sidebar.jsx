/* eslint-disable react/prop-types */

import DarkButton from "../Util/Button/DarkButton";
import { state } from "../../const";

export default function Sidebar({ project }) {
  console.log("Project: ", project);
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
      <ul className="mt-10">
        {project.map((val, i) => (
          <li key={i} className="text-zinc-400 text-lg">
            <button className="w-2/3 hover:bg-stone-600 hover:text-white text-left px-1 truncate">
              {val?.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
