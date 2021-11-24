import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter className="App">
      <UserContextProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/SignUp" element={<SignUp/>} />
          </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
