/* eslint-disable react/prop-types */
import { forwardRef } from "react";

 
 
const Input = forwardRef(function Input(
  { InputType, labelName, id, ...props },
  ref
) {
  // const inputRef = useRef();
  const InputName = InputType || "input";
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-zinc-500">
        {labelName}
      </label>
      <InputName
        {...props}
        id={id}
        className="shadow-lg bg-slate-200 p-2"
        ref={ref}
      />
    </div>
  );
});

export default Input;
