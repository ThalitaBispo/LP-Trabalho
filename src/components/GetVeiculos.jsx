import styles from './Post.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function Veiculos() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/veiculos');
        setVeiculos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    Veiculos();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <article className={styles.post}>
      <div className={styles.content}>
        <h3>Lista de Veículos</h3>
      </div>
      <div className={styles.veiculos}>
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Ações </th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo) => (
              <tr key={veiculo.id}>
                <td >{veiculo.modelo}</td>
                <td >{veiculo.marca}</td>
                <td>
                  <button className={styles.btn} onClick={() => { window.location.href = `veiculo/edit/${veiculo.id}`; }}>
                    Editar
                  </button>
                </td>
                <td>
                  <button className={styles.btnDelet} onClick={() => { window.location.href = `veiculo/delete/${veiculo.id}`; }}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
