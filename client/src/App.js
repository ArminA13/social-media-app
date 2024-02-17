import { Route, Routes } from "react-router-dom";
import { Login, Register, ResetPassword } from "./pages";
import { useSelector } from "react-redux";
import HomePage from './components/HomePage/HomePage/HomePage'

function App() {
  return (
    <div className="w-full min-h-[100vh] ">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>  
      </Routes>
    </div>
  );
}

export default App;
