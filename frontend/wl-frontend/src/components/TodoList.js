import react from "react";
import Todo from "./Todo"

let primer = [{

    "naslov": "testni naslov",
    "opis": "testni opis",
    "nujnost": 1
},
{

    "naslov": "testni naslov",
    "opis": "testni opis",
    "nujnost": 1
}]

export default function Todolist() {
    

    return (
        <>
           <div className="todolist">
               {primer.map((todo, index) => {
                   return <Todo key={index} td={todo} />
               })}
            </div> 
            alo alo
        </>
    )
}
