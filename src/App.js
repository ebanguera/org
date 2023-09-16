import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Colaborador from './components/Colaborador/Colaborador';
import Footer from './components/Footer/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "DevOps",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondon",
    puesto: "Desarrolladora de software e instructora"
    
  },
  {
    equipo: "Programación",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jean Marie",
    puesto: "Instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278" ,
      colorSecundario:"#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario:"#82CFFA" ,
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157" ,
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"DevOps",
      colorPrimario:"#E06B69" ,
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"Ux y Diseño",
      colorPrimario:"#DB6EBF" ,
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Movil",
      colorPrimario:"#FFBA05" ,
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29" ,
      colorSecundario:"#FFEEDF"
    }
  ]

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador: ", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }
  const eliminarColaborador = () =>{
    console.log("Eliminar")
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario ? <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
      />: <></>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {equipos.map((equipo) =>  <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaboradores => colaboradores.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
