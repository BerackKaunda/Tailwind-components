//External imports
import { Routes, Route } from "react-router-dom";

//local imports
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/layouts/Home";
import Buttons from "./components/pages/componentList/singleSnippets/Buttons";
import { Components } from "./components/pages/Components";
import { Alerts } from "./components/pages/componentList/singleSnippets/Alerts/Alerts";
import { Templates } from "./components/pages/componentList/templates/Templates";
import { SingleTemplate } from "./components/pages/componentList/templates/SingleTemplate";

function App() {
  return (
    
    <div className='  bg-myBg w-full h-auto '>
      <Navbar />
      <div className=''>
        <Routes>
            <Route path = '/' element={ <Home /> } />
            <Route path = '/sidebar' element={ <Sidebar /> } />
            <Route path = '/components/' element={ <Components /> } />
            <Route path = '/components/alerts' element={ <Alerts /> } />
            <Route path = '/components/snippets/buttons' element={ <Buttons /> } />
            <Route path = '/templates' element={ <Templates /> } />
            <Route path = '/templates/template' element={ <SingleTemplate /> } />
          </Routes>

      </div>
      <Footer />
    </div>


  );
}

export default App;
