import { createContext } from "react";
//import { state } from "../const";

export const HandleCommunication = createContext({
    addNewProject:() => {},
    addNewTask:() => {},
    clearTask:() => {},
   // backToNoSelected:() => {}
});
