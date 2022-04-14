import './App.css';
import  DoctorsName  from './appointment/DoctorsName';
import  TimeSlots  from './appointment/TimeSlots';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
     <Routes>
        <Route path={"/"} element={<DoctorsName />}></Route>
        <Route path={"/TimeSlots"} element={<TimeSlots />}></Route>
       
      </Routes>
    </div>
  );
}

export default App;

