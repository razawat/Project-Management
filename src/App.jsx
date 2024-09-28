import "./App.css";
import { useState } from "react";
import Sidebar from "./Component/Sidebar/Sidebar";
import NoProjectSelected from "./Component/NoProjectSelected/NoProjectSelected";
import CreateNewProject from "./Component/CreateNewProject/CreateNewProject";
import { state } from "./const";
import { HandleCommunication } from "./Context Api/useContext";
import ProjectDetail from "./Component/ProjectDetail/ProjectDetail";


function App() {
  //const projectState = useContext(HandleCommunication);
  const [currentState, updateCurrentState] = useState({
    state: state.notSelected,
    selecedIndex: null,
    projectsList: [],
  });
  console.log("Check State", currentState);
  function handleNewProject(action) {
    console.log("Clicked ", action);
    updateCurrentState((prev) => {
      return { ...prev, state: action };
    });
  }

  function handleSaveProject(inputValues) {
    console.log(inputValues);
    updateCurrentState((prev) => {
      const updateList = [...prev.projectsList];
      updateList.push(inputValues);
      return { ...prev, state: state.notSelected, projectsList: updateList };
    });
  }

  function handleSelectedProject(index) {
    //console.log('Selected',index);
    updateCurrentState((prev) => {
      return { ...prev, state: state.projectSelected, selecedIndex: index };
    });
  }

  function handleProjectDelete(index) {
    updateCurrentState((prev) => {
      const updatedProjectList = currentState.projectsList.filter(
        (val, i) => i !== index
      );
      return {
        ...prev,
        projectsList: updatedProjectList,
        state: state.notSelected,
        selecedIndex: null,
      };
    });
  }

  function handleNewTask(index, val) {
    console.log("In handleNewTask");
    return updateCurrentState((prev) => {
      let updateList = [...prev.projectsList];
      const updateSelectedProject = { ...updateList[index] };
      updateSelectedProject.tasks = [...updateSelectedProject.tasks, val];
      updateList[index] = updateSelectedProject;
      console.log("Update Task", updateList);
      return { ...prev, projectsList: updateList };
    });
  }

  function handleClearTask(index) {
    updateCurrentState((prev) => {
      let updateList = [...prev.projectsList];
      const updateTask = updateList[currentState.selecedIndex].tasks.filter((_,i) => i !== index);
      const updatedSelectedProject = {...updateList[currentState.selecedIndex],tasks:updateTask};
      //updateList[currentState.selecedIndex].tasks = updateTask;
      updateList[currentState.selecedIndex] = updatedSelectedProject;
      return { ...prev, projectsList:updateList };
    });
  }

  const updateHandler = {
    addNewProject: handleNewProject,
    addNewTask: handleNewTask,
    clearTask: handleClearTask,
    //backToNoSelected: handleNoSelected,
  };

  return (
    <HandleCommunication.Provider value={updateHandler}>
      <div className="flex flex-row bg-slate-50">
        <aside>
          <Sidebar
            project={currentState.projectsList}
            selectedProject={handleSelectedProject}
          />
        </aside>
        <main className="w-full sm:w-4/5 pt-12">
          {state.notSelected === currentState?.state && <NoProjectSelected />}
          {state.createNewProject === currentState?.state && (
            <CreateNewProject saveNewProject={handleSaveProject} />
          )}
          {state.projectSelected === currentState?.state && (
            <ProjectDetail
              projectDetail={
                currentState.projectsList[currentState.selecedIndex]
              }
              index={currentState.selecedIndex}
              onDelete={handleProjectDelete}
            />
          )}
        </main>
      </div>
    </HandleCommunication.Provider>
  );
}

export default App;
