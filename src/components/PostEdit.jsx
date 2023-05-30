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
                    value={editveiculos.modelo || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, modelo: e.target.value })}
                />
                <input
                    type="text"
                    name="marca"
                    placeholder="Marca"
                    value={editveiculos.marca || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, marca: e.target.value })}
                />
                <input
                    type="text"
                    name="ano"
                    placeholder="Ano"
                    value={editveiculos.ano || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, ano: e.target.value })}
                />
                <input
                    type="text"
                    name="placa"
                    placeholder="Placa"
                    value={editveiculos.placa || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, placa: e.target.value })}
                />
                <input
                    type="text"
                    name="cor"
                    placeholder="Cor"
                    value={editveiculos.cor || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, cor: e.target.value })}
                />
                <input
                    type="text"
                    name="km"
                    placeholder="Km"
                    value={editveiculos.km || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, km: e.target.value })}
                />
                <input
                    type="text"
                    name="renavam"
                    placeholder="Renavam"
                    value={editveiculos.renavam || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, renavam: e.target.value })}
                />
                <input
                    type="text"
                    name="tipo"
                    placeholder="Tipo"
                    value={editveiculos.tipo || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, tipo: e.target.value })}
                />
                <input
                    type="text"
                    name="combustivel"
                    placeholder="Combustível"
                    value={editveiculos.combustivel || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, combustivel: e.target.value })}
                />
                <input
                    type="text"
                    name="chassis"
                    placeholder="Chassis"
                    value={editveiculos.chassis || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, chassis: e.target.value })}
                />
                <input
                    type="text"
                    name="valor"
                    placeholder="Valor"
                    value={editveiculos.valor || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, valor: e.target.value })}
                />
                <textarea
                    name="comentario"
                    placeholder="Deixe seu comentário"
                    value={editveiculos.comentario || ''}
                    onChange={(e) => setEditVeiculos({ ...editveiculos, comentario: e.target.value })}
                />
                <button type="submit">Salvar</button>
            </form>
        </article >
    );
}