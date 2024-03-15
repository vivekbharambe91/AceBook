import "../src/Assets/common.css"
import Navbar from "./Components/Navbar";
import Layout from "./Layout";
import Home from "./Pages/Home";
import routes from "./routes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        {routes?.map(e=>
        e.route==="common"? <Route
         exact 
         path={e.path}
         element={<Layout component={<e.component/>}/>}
        />:
        <Route
         exact 
         path={e.path}
         element={<e.component/>}
        />
        )}
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
