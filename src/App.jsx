import "../src/Assets/common.css"
import Navbar from "./Components/Navbar";
import Layout from "./Layout";
import Home from "./Pages/Home";
import routes from "./routes"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {routes?.map(e=>
        <Route
         exact 
         path={e.path}
         element={<Layout component={<e.component/>}/>}
        />)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
