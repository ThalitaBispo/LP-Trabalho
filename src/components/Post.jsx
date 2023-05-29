import styles from './Post.module.css';
import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export function Post() {

    const [veiculo, setVeiculo] = useState({});
    const [status,setStatus] = useState('');

    async function gravar(e) {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/veiculo', {
            modelo: veiculo.modelo,
            marca: veiculo.marca,
            ano: veiculo.ano,
            placa: veiculo.placa,
            cor: veiculo.cor,
            km: veiculo.km,
            renavam: veiculo.renavam,
            tipo: veiculo.tipo,
            combustivel: veiculo.combustivel,
            chassis: veiculo.chassis,
            valor: veiculo.valor,
            comentario: veiculo.comentario
          });
      
          setStatus('Veículo cadastrado com sucesso!');
        } catch (error) {
          setStatus(`Falha: ${error}`);
        }
      }
      

    return (
        <article className={styles.post}>

            <div className={styles.content}>
                <p>Formulário de Veículos</p>
            </div>
            
            <form onSubmit={gravar} className={styles.commentForm}>
                <input type="text" name="modelo" placeholder="Modelo" onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value })} />
                <input type="text" name="marca" placeholder="Marca" onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value })} />
                <input type="text" name="ano" placeholder="Ano" onChange={(e) => setVeiculo({ ...veiculo, ano: e.target.value })} />
                <input type="text" name="placa" placeholder="Placa" onChange={(e) => setVeiculo({ ...veiculo, placa: e.target.value })} />
                <input type="text" name="cor" placeholder="Cor" onChange={(e) => setVeiculo({ ...veiculo, cor: e.target.value })} />
                <input type="text" name="km" placeholder="Km" onChange={(e) => setVeiculo({ ...veiculo, km: e.target.value })} />
                <input type="text" name="renavam" placeholder="Renavam" onChange={(e) => setVeiculo({ ...veiculo, renavam: e.target.value })} />
                <input type="text" name="tipo" placeholder="Tipo" onChange={(e) => setVeiculo({ ...veiculo, tipo: e.target.value })} />
                <input type="text" name="combustivel" placeholder="Combustível" onChange={(e) => setVeiculo({ ...veiculo, combustivel: e.target.value })} />
                <input type="text" name="chassis" placeholder="Chassis" onChange={(e) => setVeiculo({ ...veiculo, chassis: e.target.value })} />
                <input type="text" name="valor" placeholder="Valor" onChange={(e) => setVeiculo({ ...veiculo, valor: e.target.value })} />
                <textarea name="comentario" placeholder="Deixe seu comentário" onChange={(e) => setVeiculo({ ...veiculo, comentario: e.target.value })} />
                <button type="submit">Salvar</button>
            </form>

        </article>
    )
}