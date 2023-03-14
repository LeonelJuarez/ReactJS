import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Items from './components/NavBar/ItemListContainer';


function App() {
  return (
    <div className="App">     
    
      <NavBar img= "/imgs/logo.jpg" />    
      
     
    <div className="cards">

    <Items
    titulo= "Celular A50"
    precio= "$85000"
    img= "/imgs/a50.jpg"
    />

    <Items
    titulo= "Celular A50"
    precio= "$85000"
    img= "/imgs/Iphone12.jpg"
    />

    <Items
    titulo= "Celular A50"
    precio= "$85000"
    img= "/imgs/moduloA50.jpg"
    />

    <Items
    titulo= "Celular A50"
    precio= "$85000"
    img= "/imgs/moduloA70.jpg"
    />

    <Items
    titulo= "Celular A50"
    precio= "$85000"
    img= "/imgs/moduloA70.jpg"
    />

    
    </div>

    </div>



  );
}

export default App;
