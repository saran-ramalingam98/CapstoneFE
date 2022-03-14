import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homepage/Homepage";
import Signin from "./Pages/Login/Signin";
import SignUp from "./Pages/Signup/SignUp";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin></Signin>}></Route>
        <Route path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route path="/Home" element={<HomePage></HomePage>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/SinglePost" element={<SinglePost></SinglePost>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
