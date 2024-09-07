import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import NoProjectSelected from "./Component/NoProjectSelected/NoProjectSelected";

function App() {
  return (
    <div className="flex flex-row bg-slate-50">
    <aside className="w-2/5 sm:w-1/5 bg-slate-900 rounded-r-3xl pt-12 pl-2 md:pl-5">
    <Sidebar/>
    </aside>
    <main className="w-3/5 sm:w-4/5 pt-12">
    <NoProjectSelected/>
    </main>
     
    </div>
  );
}

export default App;
