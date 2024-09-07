export default function Sidebar() {
  return (
    <div className="bg-slate-900 flex flex-col w-1/6 h-screen rounded-r-3xl pt-12 pl-5">
      <h1 className="text-white font-serif text-xl font-bold"> YOUR PROJECT</h1>
      <button className="font-serif rounded-lg bg-zinc-700 text-zinc-400 w-1/2 py-2 mt-7 hover:bg-zinc-600 hover:text-zinc-300">
        + Add Project
      </button>
      <ul></ul>
    </div>
  );
}
