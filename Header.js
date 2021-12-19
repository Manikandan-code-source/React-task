import React from "react"
import Carosal from "./Carosal";
export default function Header()
{
    const images=[
        {img : "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg", name :"Hello World 1"},
        {img : "https://thumbs.dreamstime.com/z/purple-flower-2212075.jpg", name :"Hello World 2"},
        {img : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=980:*",name :"Hello World 3"}
    ]

    return(
        <>
           {images.map((items)=>
           (
               <Carosal
                 img={items.img}
                 name={items.name}

               />
           ))}


        </>
    );
}