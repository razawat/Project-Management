export default function DarkButton({ name }) {
  return (
    <button className="font-serif rounded-lg bg-zinc-700 text-zinc-400 max-w-fit py-2 px-2 md:px-4 mt-7 hover:bg-zinc-600 hover:text-zinc-300 text-sm md:text-lg" >
      {name}
    </button>
  );
}
