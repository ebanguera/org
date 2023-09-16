import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos

    const obj = {
        backgroundColor: colorSecundario
    }
    const estiloTitulo = {borderColor: colorPrimario}
    const {colaboradores, eliminarColaborador} = props

    return <>
    { colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <h3 style={estiloTitulo}> {titulo} </h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index)=><Colaborador 
                        datos={colaborador} 
                        key={colaborador.nombre} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                    />)
                }
            </div>
        </section>
    }
    </>
}

export default Equipo