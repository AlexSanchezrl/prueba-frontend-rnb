import React from 'react'
import { AiFillStar } from "react-icons/ai";

export default function Etiquetas({etiquetas, popular}) {
  return (
    <div className='tag-container'>
        {popular ? <h2 className='tag-style tag-style-popular'><span className='gold-star'><AiFillStar /></span> Popular</h2> : <></>}
        {etiquetas.map((tag)=>{
        return <h2 className='tag-style'>{tag}</h2>}
        )}
    </div>
  )
}
