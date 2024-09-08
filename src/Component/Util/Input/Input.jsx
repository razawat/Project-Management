/* eslint-disable react/prop-types */
import { forwardRef } from "react";

 
 
const Input = forwardRef(function Input(
  { InputType, labelName, id, width, ...props },
  ref,
) {
  // const inputRef = useRef();
  const InputName = InputType || "input";
  const inputWidth = width || ""
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-zinc-500">
        {labelName}
      </label>
      <InputName
        {...props}
        id={id}
        className={`shadow-lg bg-slate-200 p-2 ${inputWidth}`}
        ref={ref}
      />
    </div>
  );
});

export default Input;
