//Aca renderiza un aso9la vez  y no se acytualiza el valor de la variable
const RenderizadoPagina = (props) => {
    const { counter } = props
    return (
        <div>
            <h1>Renderizado de pagina no se actualiza el renderizado</h1>
            {counter}
        </div>
    )

}

export default RenderizadoPagina