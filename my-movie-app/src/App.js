import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
