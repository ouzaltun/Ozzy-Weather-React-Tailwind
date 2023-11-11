import { Routes, Route } from "react-router-dom"; // react-router-dom ile route işlemleri
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* react-router-dom ile sayfa yönlendirmelerini sağlar */}
      <Routes>
        {/* Anasayfa yolunu belirtir ve Home bileşenini render eder */}
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
