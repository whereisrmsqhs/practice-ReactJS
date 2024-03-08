import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
