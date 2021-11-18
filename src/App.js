import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
