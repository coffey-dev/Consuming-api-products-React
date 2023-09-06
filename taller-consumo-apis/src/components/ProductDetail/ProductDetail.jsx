import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";




export const ProductDetail = ()=>{

  let {id} = useParams()

    return (
        <div>
          <h1>Información del producto con identificador {id}</h1>
        </div>
    )
}