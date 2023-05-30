import styles from './Post.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'

export function PostEdit() {
    const { id } = useParams();
    const [editveiculos, setEditVeiculos] = useState([]);
    const [status, setStatus] = useState('');
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function Veiculos() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/veiculo/${id}`);
                setEditVeiculos(response.data);
                //setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        Veiculos();
    }, []);

    async function gravar(e) {
        e.preventDefault(); // cancela o submit
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/veiculos/${id}`, editveiculos);
            setStatus("Produto Atualizado");
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <article className={styles.post}>

            <div className={styles.content}>
                <p>Formulário de Veículos</p>
            </div>

            <form onSubmit={gravar} className={styles.commentForm}>
                <input
                    type="text"
                    name="modelo"
                    placeholder="Modelo"
                    value={editveiculos.modelo}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, modelo: e.target.value })}
                />
                <button type="submit">Salvar</button>
            </form>
        </article >
    );
}