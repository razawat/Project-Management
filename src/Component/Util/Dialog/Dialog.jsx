/* eslint-disable react/prop-types */
import { forwardRef,useImperativeHandle, useRef } from "react";
// import DarkButton from "../Button/DarkButton";

const Dialog = forwardRef(function Dialog({label},ref) {
    const dialogRef = useRef();
    useImperativeHandle(ref,() => {
        return {
            show() {
                dialogRef.current.showModal();
            }
        }
    },[]);
    return (
      <dialog ref={dialogRef} className="p-2 w-50 border-fuchsia-600 my-10 rounded-lg">
        <h1 className="font-bold font-mono">
            Alert
        </h1>
        <hr className=" border-1 border-gray-500" />
        <p className="text-center mt-1">Please provide {label}.</p>
        <form method="dialog" className="text-center mt-2">
          <button className="bg-sky-500/50 px-3 py-1 text-zinc rounded-lg hover:bg-sky-800/50">OK</button>
        </form>
      </dialog>
    );
  })

export default Dialog;
