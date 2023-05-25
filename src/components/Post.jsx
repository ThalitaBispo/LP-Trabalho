import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>

            <div className={styles.content}>
                <p>Formulário de Veículos</p>
            </div>

            <form className={styles.commentForm}>
                <input type='text' placeholder='Modelo' />
                
                <input type='text' placeholder='Marca' />

                <input type='text' placeholder='Ano' />

                <input type='text' placeholder='Placa' />

                <input type='text' placeholder='Cor' />

                <input type='text' placeholder='Km' />

                <input type='text' placeholder='Renavam' />

                <input type='text' placeholder='Tipo' />

                <input type='text' placeholder='Combustível' />

                <input type='text' placeholder='Chassis' />

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Salvar</button>
                </footer>
            </form>

        </article>
    )
}