  
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Index from './screens/Index';
import Cart from './screens/Cart';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AuthModal from "./components/Authentication/AuthModal";
import Nav from './components/Nav';
import Shopnow from './screens/Shopnow';
import Checkout from './screens/Checkout';
import Contact from './screens/Contact';
function App() {
 
  

  return (
   <>
   
   <Router>
    <Routes>
      
    
       <Route path='/'  element={<Index/>}/>
      <Route path='/Nav'  element={<Nav />}/>
      <Route path='/Auth'  element={<AuthModal />}/>
      <Route path='/Cart' element={<Cart />} />
      <Route exact path='/Shopnow/:id' element={<Shopnow />} />
      <Route exact path='/Checkout' element={<Checkout/>} />
      <Route exact path='/Contact' element={<Contact/>} />
      

      
     

      
    </Routes>
   </Router> 
   
   </>
  );
  
}

export default App;
