import './App.css';
import CrudApp from './Componentes/CrudApp';
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
    <CrudApp/>
    </div>
    </>
  );
}

export default App;
