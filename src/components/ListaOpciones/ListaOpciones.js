import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "DevOps",
    //     "Ux y Diseño",
    //     "Movil",
    //     "Innovación y Gestión"
    // ]

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>{props.titulo}</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map((equipo, index)=>{
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones