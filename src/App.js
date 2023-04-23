
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemCount/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { CartProvider } from './context/cartContext';



function App() {


  return (

    <CartProvider>
    <BrowserRouter>
    
    <div className="App">     
      <NavBar img= "/imgs/logo.jpg" />  

    <div className="cards">
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoriaid' element={<ItemListContainer/>} />
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </div>

    </div>
    
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
