import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from './Pages/Login'
import Signin from "./Pages/Register";
import Support from "./Pages/Support";
import Admin from "./Pages/Admin";
import { Navigate } from "react-router-dom";
import Landingpage from "./Pages/landingpage"
import Error404 from "./Pages/Error404"

function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          {user  && <Route path="/Home" exact element={<Home/>} />}
          <Route path="/Support" element={<Support />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/" element={<Landingpage />} />
          <Route path={"*" || "/*"} element={<Error404 />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="/Home" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
