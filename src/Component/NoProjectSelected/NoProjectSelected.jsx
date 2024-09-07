import Image from "/public/no-projects.png";
import DarkButton from "../Util/Button/DarkButton";
export default function NoProjectSelected() {
  return (
    <ul className="flex flex-col items-center gap-y-3">
      <li>
        <img src={Image} alt="no image" className="w-12 sm:w-16" />
      </li>

      <li>
        <h1 className="font-serif text-xl font-bold text-stone-500">
          No Project Selected
        </h1>
      </li>

      <li>
        <p className="text-neutral-500">
          {" "}
          Select a project or get started with a new one
        </p>
      </li>

      <li>
        <DarkButton name="Create New Project" />
      </li>
    </ul>
  );
}
