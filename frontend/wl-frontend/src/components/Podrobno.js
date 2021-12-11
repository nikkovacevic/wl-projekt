import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import nujnostColors from '../assets/nujnost';

export default function Podrobno() {

    const id = useParams();

    const [naslov, setNaslov] = useState("");
    const [opis, setOpis] = useState("");
    const [nujnost, setNujnost] = useState(1);
    const [nujnoststring, setNujnoststring] = useState("");

    const getTodo = async () => {
        try {
            const response = await fetch(`http://localhost:8080/todos/${id.id}`);
            const jsondata = await response.json();

            setNaslov(jsondata.naslov);
            setOpis(jsondata.opis);
            setNujnost(jsondata.nujnost);

            if (nujnost === 1) {
                setNujnoststring("Low priority");
            } else if (nujnost === 2) {
                setNujnoststring("Medium priority");
            } else if (nujnost === 3) {
                setNujnoststring("High priority");
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodo();
    })

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:8080/todos/${id}`, {
                method: "DELETE"
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <Navbar />
            <div className="bggradient">
                <div className="itemwrapper">
                    <div className="podrobnonaslov">{naslov}</div>
                    <div className="podrobnoopis">{opis}</div>
                    <div className="podrobnonujnost" style={{ backgroundColor: `${nujnostColors[nujnost]}` }}>{nujnoststring}</div>
                    <button className="btnopravi2" onClick={() => deleteTodo(id.id)}>Opravi</button>
                </div>
            </div>
        </>
    )
}
