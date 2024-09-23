import { useState, useEffect } from 'react';
import style from './users.module.css';

export function Users() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
                const datos = await respuesta.json();
                setDatos(datos);
            } catch (error) {
                console.error("Error al hacer fetch: ", error);
            }
        };
        obtenerDatos();
    }, []);

    console.log(datos);

    return (
        <div>
            {datos.map((user) => (
                <li key={user.id} className={style.listItem}>
                    <span className={style.userSpan}><strong>Nombre:</strong> {user.name}</span>
                    <span className={style.userSpan}><strong>Email:</strong> {user.email}</span>
                </li>
            ))}
        </div>
    )
}