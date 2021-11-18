import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/Main' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
