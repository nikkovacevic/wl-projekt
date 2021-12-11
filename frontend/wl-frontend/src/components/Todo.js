import React, { useState, useEffect } from "react";
import nujnostColors from "../assets/nujnost";
import { Link } from "react-router-dom";


export default function Todo(props) {
    
    const [nujnost, setNujnost] = useState(props.td.nujnost);
    const [nujnoststring, setNujnoststring] = useState("");

    useEffect(() => {
       
        setNujnost(props.td.nujnost);

        if (nujnost===1) {
            setNujnoststring("Low priority");
        } else if (nujnost===2) {
            setNujnoststring("Medium priority");
        } else if (nujnost===3) {
            setNujnoststring("High priority");
        }

    }, [nujnost, props.td.nujnost])

    const deleteTodo = async (id) => {
        try {
            
            const deleteTodo = await fetch(`http://localhost:8080/todos/${id}`, {
                method: "DELETE"
            });

            window.location.reload(false);

        } catch (err) {
            console.error(err.message)
        }
    }
    

    return (
        <>
        
        <div className="todowrapper">
            
            <div className="naslovtaska"><Link to={`/podrobno/${props.td.id}` } className="podrobnilink">{props.td.naslov}</Link></div>

            <div className="opistaska">{props.td.opis}</div>

            <div className="nujnosttaska">
                
                <div className="nujnost" style={{backgroundColor: `${nujnostColors[nujnost]}`}}>{nujnoststring}</div>
         
                <button className="btnopravi"  onClick={() => deleteTodo(props.td.id)}>Opravi</button>

            </div>
            

        </div>
        
        </>
    )
}
