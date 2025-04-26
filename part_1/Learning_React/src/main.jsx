import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
// import MultipleComponentes from './_01_MultipleComponentes'
// import UsandoProps from './_02_UsandoProps'
// import UsandoMultiplesProps from './_03_UsandoMultiplesProps'
// import FuncionesAuxiliares from './_04_FuncionesAuxiliares'
// import DesestructuracionProps from './_05_DesestructuracionProps'
// import RenderizadoPagina from './_06_RenderizadoPagina'
// import ComponentesConEstados from './_07_ComponentesConEstados'
// import ControlDeEventos from './_08_ControlDeEventos'
// import ControladorEventosFuncion from './_09_ControladorEventosFuncion'
// import PasandoEstadoComponenteHijo from './_10_PasandoEstadoComponenteHijo'
// import EstadoRenderizado from './_11_EstadoRenderizado'
// import RefactorizarComponentes from './_12_RefactorizarComponentes'
// import EstadoComplejo from './_13_EstadoComplejo'
// import ManejoDeArrays from './_14_ManejoDeArrays'
// import ActualizacionDeEstadoAsincrona from './_15_ActualizacionDeEstadoAsincrona'
import RenderizadoCondicional from './_16_RenderizadoCondicional'

// Variables counter esto es del componente de renderizado de pagina
// let counter = 1

//El Stricmode nos permite renderizar varios componentes

// si no se usa el  StricMode solo se podra renderizar uno solo en el Render del DOM
//rendering components
ReactDOM.createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //     <MultipleComponentes />
    //     <UsandoProps />
    //     <UsandoMultiplesProps />
    //     <FuncionesAuxiliares />
    //     < DesestructuracionProps /> */}
    //     <RenderizadoPagina counter={counter} />
    // </StrictMode>

    // <ComponentesConEstados />
    // <ControlDeEventos />
    // <ControladorEventosFuncion/>
    // <PasandoEstadoComponenteHijo />
    // <EstadoRenderizado />
    // <RefactorizarComponentes />
    // <EstadoComplejo />
    // <ManejoDeArrays />
    // <ActualizacionDeEstadoAsincrona />
    <RenderizadoCondicional />
)