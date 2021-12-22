//External imports
import { Routes, Route } from "react-router-dom";

//local imports
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/layouts/Home";
import Buttons from "./components/pages/componentList/singleSnippets/Buttons";
import { SingleComponent } from "./components/pages/SingleComponent";
import { Alerts } from "./components/pages/componentList/singleSnippets/Alerts/Alerts";

function App() {
  return (
    
    <div className='  bg-myBg w-full h-auto '>
      <Navbar />
      <div className=''>
        <Routes>
            <Route path = '/' element={ <Home /> } />
            <Route path = '/sidebar' element={ <Sidebar /> } />
            <Route path = '/components/' element={ <SingleComponent /> } />
            <Route path = '/components/alerts' element={ <Alerts /> } />
            <Route path = '/components/snippets/buttons' element={ <Buttons /> } />
          </Routes>

      </div>
      <Footer />
    </div>


  );
}

export default App;
