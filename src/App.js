import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products';
import Navigation from './components/Navigatation';
import Cart from './pages/Cart'



const App = ()=>{
    return(
    <>
         <Router>
          
          <Navigation/>

          
          <Routes>
            

            <Route path='/'element={<Home/>} />  
            <Route path='/products' element={<Products/>}/>  
            <Route path='/cart' element={<Cart/>}/>  


            
            </Routes>

          


          



         </Router>



    </>
    ) 
}

export default App;