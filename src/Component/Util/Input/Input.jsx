// eslint-disable-next-line react/prop-types
export default function Input({ InputType, labelName, id,...props }) {
  const InputName = InputType || "input";
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-zinc-500">{labelName}</label>
      <InputName {...props} id={id} className="shadow-lg bg-slate-200 p-2"/>
    </div>
  );
}
