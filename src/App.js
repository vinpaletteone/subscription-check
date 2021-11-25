import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from "./pages/Main";
import { UserContextProvider } from "./context/UserContext";
import { Main, Login, SignUp, Notice, Test, Chat, Mypage} from './js/routes'

function App() {
  return (
    <BrowserRouter className="App">
      <UserContextProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Notice' element={<Notice />} />
            <Route path='/Chat' element={<Chat />} />
            <Route path='/Mypage' element={<Mypage />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path='/Test' element={<Test />} />
          </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
