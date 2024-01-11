import { useEffect, useState } from "react";
import ProdCards from "./cardsProductos/ProdCards"
import objDatos from "../productos.json";
import { GoX } from "react-icons/go";
import { VscSearch } from "react-icons/vsc";
import SkeletonCard from "./SkeletonCard";
function ContenedorCards() {


    const [datos, setDatos] = useState(objDatos);
    const [datosUpdate, setDatosUpdate] = useState(objDatos);
    const [busqueda, setBusqueda] = useState("");
    // const [loadingS, setLoadingS] = useState(false);
    
    const handleChange = (e) =>{

        e.preventDefault();
        // setLoadingS(true)
        setBusqueda(e.target.value);
        busquedaProductos(e.target.value);
    }

    const busquedaProductos = (busqueda) => {
        const resultadoBusqueda = datosUpdate.filter((dato)=>{
            if(dato.marca.toString().toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
            return dato
        });
        setDatos(resultadoBusqueda)
    }

    const handleClear = ()=> {

        setDatos(datosUpdate)
        setBusqueda("")
    }

    const renderDatos = datos.map((objDato) =>{

        return <ProdCards key={objDato.id} objProducto={objDato}/>
    });

    // useEffect(()=>{
    //     setTimeout(()=>{
    //       setLoadingS(false);
    //     },1000);
    //   }, []);
    
    //   const loadingSkeleton = () => { 
    
    //     return (
    //       <SkeletonCard />
    //     )
    //   }


return (
    <>  
    <div>
        {/* Aqui tengo nav secundario el cual sirve para hacer el filtrado de los productos por el nombre de la marca*/}

        <div className='second-nav'>
            <div className='section-1-second-nav'>
                <h1>Tiendas con las que trabajamos</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eos, 
                    corporis commodi iure quia temporibus distinctio, cupiditate officiis tenetur, autem blanditiis?
                </p>
            </div>   


            <div className='section-2-second-nav'>

                <form method="GET">
                    <span><VscSearch/></span>
                    <input type='text' placeholder='Escriba aqui...' onChange={handleChange} />
                    <button className='button-reset' type='reset' onClick={handleClear}><GoX/></button>
                </form>
            </div>

        </div>

        {/* Es el contenedor de los card que se van renderizando*/}
     
        <div className='container-products'>

            {renderDatos}

        </div>
  
    </div>

    </>

  )
    
}

export default ContenedorCards