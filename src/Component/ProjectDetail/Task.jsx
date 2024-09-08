/* eslint-disable react/prop-types */
import Input from "../Util/Input/Input";
import DarkButton from "../Util/Button/DarkButton";
import { useRef, useContext } from "react";
import { HandleCommunication } from "../../Context Api/useContext";

export default function Task({ list, index }) {
  // console.log('Prop list',list);
  const taskList = list;
  // const [taskList,updateTaskList] = useState(list);
  const { addNewTask,clearTask } = useContext(HandleCommunication);
  const taskRef = useRef();

  function handleAddTask() {
    //  console.log("Task Value",taskRef?.current.value,taskList);
    addNewTask(index, taskRef?.current?.value);
  }

  function handleClearTask(index) {
    clearTask(index);
  }

  return (
    <>
      <h1 className="font-mono font-extrabold text-2xl mt-5">Tasks</h1>
      <div className="flex flex-row justify-between mt-5 mb-8">
        <div className="w-2/3">
          <Input ref={taskRef} />
        </div>
        <div className="1/3">
          <DarkButton
            name="Add Task"
            extraClass="bg-zinc-700 hover:bg-zinc-600 hover:text-white"
            handleAddTask={handleAddTask}
          />
        </div>
      </div>
      {taskList.length == 0 && <p>This project does not have any tasks yet.</p>}
      {taskList.length > 0 && (
        <ul className="bg-zinc-100 pl-4 pt-2 pb-2">
          {taskList.map((val, i) => (
            <li key={i} className="m-1 flex flex-row justify-between">
              <p>{val}</p>
              <DarkButton name="Clear" extraClass="border-gray-300 hover:text-black" handleClearTask={() => handleClearTask(i)}/>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
