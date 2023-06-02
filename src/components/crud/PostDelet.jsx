import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

export function PostDelet() {
    const { id } = useParams();
    const [veiculo, setVeiculo] = useState({});
    const [status, setStatus] = useState('');
    const [botaoStatus, setBotaoStatus] = useState(true);

    useEffect(() => {
        async function consultar() {
            const response = await axios.get(`http://127.0.0.1:8000/api/veiculo/${id}`);
            setVeiculo(response.data);
            setBotaoStatus(false);
        }
        consultar();
    }, []);

    async function confirmar(e) {
        try {
            const response = await axios.delete(`http://localhost:8000/api/veiculos/${id}`);
            setStatus("Véiculo Excluído");
            setVeiculo({});
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <div>
            <h3>{veiculo.modelo}</h3>
            {status != 'Veículo Excluído' ? <button onClick={confirmar} disabled={botaoStatus}>Confirmar Exclusão</button> : ''}
            <Link to='/veiculos'>Voltar</Link>
            <h3>{status}</h3>
        </div>
    )
}