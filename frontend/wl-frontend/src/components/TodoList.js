import React from "react";
import Todo from "./Todo"

let primer = [{

    "naslov": "Testni naslov",
    "opis": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    "nujnost": 1
},
{

    "naslov": "testni naslov",
    "opis": "testni opis",
    "nujnost": 2
},
{

    "naslov": "testni naslov",
    "opis": "testni opis",
    "nujnost": 1
},
{

    "naslov": "testni naslov",
    "opis": "testni opis",
    "nujnost": 3
}]

export default function Todolist() {
    

    return (
        <>
           <div className="todolist">
               {primer.map((todo, index) => {
                   return <Todo key={index} td={todo} id={index+1} />
               })}
            </div> 
        </>
    )
}
