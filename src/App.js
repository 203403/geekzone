import './App.css';
import CrudApi from './Componentes/CrudApi';
import banner from './banner.png';
import gif from './gidCod.gif';

function App() {
  return (
    <>
    <div id="container">
    <img src={gif} class="gif"/>
    <header id="encabezado">
      
      <img src={banner} class="banner"/>
    </header>
    <CrudApi/>
    </div>
    </>
  );
}

export default App;
