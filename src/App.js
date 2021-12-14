import logo from './assets/logo-llave.jpg'
import frente from './assets/frente.jpg'
import './App.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = "Fabiana Berdiñas"
 }, []);
 
  return (
    
    <div className="App">
        <link rel = "preconnect" href = "https://fonts.googleapis.com"/>
        <link rel = "preconnect" href = "https://fonts.gstatic.com" crossorigin/>
        <link href = "https: //fonts.googleapis.com/css2? family = Special + Elite & display = swap "rel =" stylesheet "/>
        <title>Fabiana Berdiñas</title>   

      <header className="App-header">     
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">
          Gestoria Fabiana Berdiñas
        </p>
        
      </header>
      <div className="container">
        <img src={frente} className="imgFrente" alt="frente"/>
        <div className="">
          <p className='title line anim-typewriter'>Automotores, Motovehiculos, Maquinarias Agricolas,</p>
          <p className='title line anim-typewriter'>Viales, Industriales y Viales, Créditos Prendarios</p>
        </div>
        <div>
          <ul>
            <li className="">Alta y baja de dominios</li>
            <li>Informes de deuda</li>
            <li>Tramites de moratoria</li>
            <li>Transferencias de Automotor</li>
            <li>Inscripción Inicial</li>
            <li>Asesoramiento de documentacón</li>
          </ul>          
        </div>
      </div>
    </div>
  );
}

export default App;
