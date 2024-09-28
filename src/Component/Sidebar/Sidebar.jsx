/* eslint-disable react/prop-types */

import DarkButton from "../Util/Button/DarkButton";
import { state } from "../../const";
import hambergerImage from "/Hamburger.png";
import { useState } from "react";

export default function Sidebar({ project, selectedProject }) {
  // console.log("Project: ", project);
  const [sideBar, updateSideBar] = useState(false);

  function handleProjectList(index) {
    selectedProject(index);
  }

  function handleHamberger() {
    console.log("Hamberger click");
    updateSideBar(preValue => !preValue);
  }

  return (
    <>
     {/* Bug - position remain absolute when sideBar value is true & screen reside  */}
      <div className={`flex flex-col bg-slate-900 absolute sm:relative`}>
        <div className="block sm:hidden">
          <button onClick={handleHamberger}>
            <img
              src={hambergerImage}
              alt="hamberger"
              className="w-8 bg-slate-50"
            />
          </button>
        </div>
          <div className={`h-screen pt-12 pl-6 pr-6 ${sideBar?'block':'hidden sm:block'}`}>
            <h1 className="text-white font-serif text-sm md:text-2xl font-bold">
              {" "}
              YOUR PROJECT
            </h1>
            <DarkButton
              name="+ Add Project"
              extraClass="bg-zinc-700 hover:bg-zinc-600 hover:text-white mt-7"
              action={state.createNewProject}
            />
            <ul className="mt-10">
              {project.map((val, i) => (
                <li key={i} className="text-zinc-400 text-lg mb-1">
                  <button
                    className="w-2/3 hover:bg-stone-600 hover:text-white text-left px-1 truncate"
                    onClick={() => handleProjectList(i)}
                  >
                    {val?.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </>
  );
}
