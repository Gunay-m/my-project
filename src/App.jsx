import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// ! COMPONENTS IMPORT
import Navbar from "./components/Navbar";

// ! MARSHRUT(REACT ROUTER DOM)
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./containers/Home"
import Shop from "./containers/Shop"
import Blog from "./containers/Blog"
import Pages from "./containers/Pages"
import Contact from "./containers/Contact"
import Heart from "./containers/Heart"
import Basket from "./containers/Basket"
import Person from "./containers/Person"
import Search from "./containers/Search"
import NotFound from "./containers/404NotFound";
import Cards from "./containers/Cards";




function App() {
  return (
    <div className="">
      <BrowserRouter> 
       <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/heart" element={<Heart/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/person" element={<Person/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/cards"element={<Cards/>}/>


      </Routes>




    
      </BrowserRouter>
    </div>
  );
}

export default App;
