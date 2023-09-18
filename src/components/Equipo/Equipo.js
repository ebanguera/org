import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    const {colorPrimario,  titulo, id} = props.datos
    
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.4)
    }
    const estiloTitulo = {borderColor: colorPrimario}
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    return <>
    { colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input 
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(e)=>{
                    actualizarColor(e.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}> {titulo} </h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index)=><Colaborador 
                        datos={colaborador} 
                        key={colaborador.nombre} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                }
            </div>
        </section>
    }
    </>
}

export default Equipo