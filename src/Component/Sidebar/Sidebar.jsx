import DarkButton from "../Util/Button/DarkButton";

export default function Sidebar() {
  return (
    <div className=" h-screen flex flex-col">
      <h1 className="text-white font-serif text-sm md:text-2xl font-bold"> YOUR PROJECT</h1>
      <DarkButton name="+ Add Project" />
      <ul></ul>
    </div>
  );
}
