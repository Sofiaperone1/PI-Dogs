import './App.css';
import { Route,Routes, useLocation} from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage.js';
import Home from './views/Home/Home.js';
import DetailCard from './views/Detail/DetailCard.js';
import Form from './views/Form/Form.js';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  const location = useLocation();
  return (
<div>
    {location.pathname !== "/" && <Navbar/>}
      <Routes>

       <Route exact path="/" element={<LandingPage/>} />
       <Route exact path="/home" element={<Home />} />
       <Route exact path="/home/:id" element={<DetailCard/>}/>
       <Route exact path="/form" element={<Form/>}/>

      </Routes>
      <Footer/>
</div>
       
    
  
  );
}

export default App;
 //        <Route exact path={`/home/:id`} component={Detail}/>
 //<Route exact path={`/createrecipe`} component={RecipeCreate}/>