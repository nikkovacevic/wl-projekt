import React, { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todolist() {

    const [vsiTodoji, setVsiTodoji] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:8080/todos")
            const jsondata = await response.json();

            setVsiTodoji(jsondata);

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <div className="todolist">
                {vsiTodoji.map((todo, index) => {
                    return <Todo key={index} td={todo} />
                })}
            </div>
        </>
    )
}
