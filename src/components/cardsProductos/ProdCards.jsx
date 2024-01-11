import Etiquetas from './Etiquetas'
import { BsChevronCompactRight, BsChevronCompactDown  } from "react-icons/bs";
import {useState } from 'react';
function ProdCards({objProducto}) {

  const [isOpen, setIsOpen] = useState(false);

  const handlerOpen = () => {
    setIsOpen(!isOpen);
  }

  return (


    <div className='card  producto-card-animacion'>
        <div className='card-bg'>
          {/**Aqui agrege un componente para que haga render de todas las etiquetas de los productos y asi este mas personalizado */}
          <Etiquetas popular={objProducto.popular} etiquetas={objProducto.etiquetas}/>
          <div className='div-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="81" viewBox="0 0 120 81" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9105 52.1765L34.0352 44.0352L29.918 37.1792L12.4222 47.7081L15.0944 52.1765H38.9105ZM79.391 52.1765H103.207L71.9886 0.110107L54.5101 10.639L79.391 52.1765ZM71.068 60.3359C69.3882 59.251 67.4198 58.6174 65.2891 58.6174H65.235C59.3495 58.6533 54.5648 63.4657 54.5648 69.3634C54.5648 75.2619 59.3495 80.0735 65.235 80.1101H65.2891C67.4198 80.1101 69.3882 79.4771 71.068 78.3916V79.5131H75.9967V52.1772H71.068V60.3359ZM71.068 70.4855C70.5446 73.1995 68.1427 75.2791 65.2891 75.2791H65.235C62.003 75.2431 59.3854 72.6018 59.3854 69.3634C59.3854 66.1256 62.003 63.4842 65.235 63.4656H65.2891C68.1427 63.4656 70.544 65.5286 71.068 68.2419V70.4855ZM94.2155 60.3359C92.4973 59.2124 90.4892 58.6152 88.4375 58.6174H88.3825C82.4969 58.6533 77.7126 63.4657 77.7126 69.3634C77.7126 75.2619 82.4969 80.0735 88.3825 80.1101H88.4375C90.5683 80.1101 92.5542 79.4771 94.2155 78.3916V79.5131H99.1452V59.1598H94.2155V60.3359ZM94.2155 70.4855C93.6921 73.1995 91.2898 75.2791 88.4375 75.2791H88.3825C85.1517 75.2431 82.5332 72.6018 82.5332 69.3634C82.5332 66.1256 85.1517 63.4842 88.3825 63.4656H88.4375C91.2898 63.4656 93.6915 65.5286 94.2155 68.2419V70.4855ZM116.677 68.0247C116.497 67.9335 116.243 67.8435 115.954 67.7349C114.853 67.355 113.065 66.8846 110.573 66.3422C108.389 65.8531 107.287 65.2207 107.287 64.4245C107.287 63.8634 107.486 63.411 107.865 63.0859C108.371 62.6514 109.272 62.4342 110.573 62.4342C111.891 62.4342 112.848 62.724 113.408 63.2844C113.751 63.6283 114.003 64.2426 114.166 65.1115H119.403C119.403 62.5427 118.355 60.6977 116.297 59.5763C116.189 59.5053 116.074 59.4448 115.954 59.3956C114.527 58.7259 112.631 58.3821 110.267 58.3821C107.395 58.3821 105.229 59.1424 103.785 60.6797C102.63 61.9098 102.07 63.411 102.07 65.1842C102.07 67.3924 103.153 68.9836 105.356 70.0151C106.187 70.4129 108.208 70.974 111.423 71.6616C113.572 72.1321 114.654 72.8017 114.654 73.6519C114.654 74.159 114.438 74.5928 113.969 74.9906C113.372 75.4971 112.469 75.7509 111.26 75.7509C109.653 75.7509 108.516 75.4797 107.848 74.9552C107.179 74.4488 106.836 73.7072 106.836 72.7664H101.347C101.347 75.2631 102.395 77.1262 104.507 78.3556C106.187 79.3145 108.389 79.8036 111.117 79.8036C112.939 79.8036 114.564 79.4957 115.955 78.8993C116.244 78.7727 116.497 78.6455 116.768 78.5009C118.917 77.3075 120 75.4077 120 72.803C119.999 70.6661 118.897 69.0736 116.677 68.0247ZM16.5029 60.3359C14.777 59.2146 12.764 58.6177 10.707 58.6174H10.6527C4.78506 58.6533 0 63.4657 0 69.3634C0 75.2619 4.78506 80.0735 10.6527 80.1101H10.707C12.8378 80.1101 14.8237 79.4771 16.5029 78.3916V79.5131H21.432V59.1598H16.5029V60.3359ZM16.5029 70.4855C15.9795 73.1995 13.5773 75.2791 10.707 75.2791H10.6527C7.43921 75.2431 4.82096 72.6018 4.82096 69.3634C4.82096 66.1256 7.43921 63.4842 10.6527 63.4656H10.707C13.578 63.4656 15.9795 65.5286 16.5029 68.2419V70.4855ZM47.2699 57.0074H52.6328V52.2851H47.2699V57.0074ZM47.2699 79.5125H52.6328V58.6174H47.2699V79.5125ZM39.8854 60.3359C38.1593 59.2145 36.146 58.6177 34.0889 58.6174H34.0352C28.1489 58.6533 23.3639 63.4657 23.3639 69.3634C23.3639 75.2619 28.1483 80.0735 34.0352 80.1101H34.0889C36.1461 80.11 38.1594 79.5132 39.8854 78.3916V79.5131H44.8148V52.1772H39.8854V60.3359ZM39.8854 70.4855C39.362 73.1995 36.9598 75.2791 34.0889 75.2791H34.0352C30.8031 75.2431 28.1849 72.6018 28.1849 69.3634C28.1849 66.1256 30.8031 63.4842 34.0352 63.4656H34.0889C36.9598 63.4656 39.3614 65.5286 39.8854 68.2419V70.4855ZM71.0488 52.1765L65.235 42.444L50.9535 18.6357L34.0352 28.8393L33.4574 29.1825L34.0352 30.1414L47.2513 52.1765H71.0488Z" fill="white"/>
              </svg>
          </div>

          {!isOpen ? <></> : <p>{objProducto.descripcion}</p>}
        </div>
        <div className='bottom-style'>
          <div className='section-1'>
            <h2>{objProducto.marca}</h2>
            <a>{objProducto.link}</a>
          </div>
          <div className='section-2'>
            {/**Aqui estan los botones, dependiendo si esta abierto o cerrado se cambiara el icono */}
            <button className='button-card' onClick={handlerOpen}>{!isOpen ? 
            (<>Ver info <BsChevronCompactRight /></>) :
            (<>Cerrar info <BsChevronCompactDown /></>)}
            </button>
            <button className='button-card'>Ver ofertas <BsChevronCompactRight /></button>
          </div>
        </div>
    </div>
  )

}

export default ProdCards