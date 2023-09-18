import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
// import { act } from "react-dom/test-utils";

const Formulario = (props) => {

    const {registrarColaborador, crearEquipo} = props
    
    const manejarEnvio = (evento) =>{
        evento.preventDefault()
        console.log("Enviado", evento)
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarFoto} 
            />
            <ListaOpciones 
                titulo="Equipos" 
                valor={equipo} 
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton text="Crear" />
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />
            <Campo
                titulo="Color" 
                placeholder="Ingresar color en HEX" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton text="Registrar equipo"/>
            
        </form>

    </section>
}

export default Formulario