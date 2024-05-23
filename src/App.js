import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import Home from './screens/Home';
import Taskboard from './screens/Taskboard';
import PageNotFound from './screens/Notfound'
import TaskDetails from './screens/TaskDetails';
import { TaskContextProvider } from './context/TaskContext';
function App() {
  return (
    <TaskContextProvider>
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/taskboard" element={<Taskboard/>}/>
        <Route path='/taskdetails/:id' element={<TaskDetails/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    
    </div>
    </TaskContextProvider>
  );
}

export default App;
