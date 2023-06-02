import style from './Post.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export function PostList() {

    const [quantidadeVeiculos, setQuantidadeVeiculos] = useState([]);

    useEffect(() => {
        async function Veiculos() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/qtd-veiculos');
                setQuantidadeVeiculos(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        Veiculos();
    }, []);

    return (
        <div className={style.card}>
            <h2 >Veículos Cadastrados</h2>
            <p>{quantidadeVeiculos}</p>
        </div>
    )
}