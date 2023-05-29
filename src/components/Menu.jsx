import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export function Menu() {
    return (
        <header className={styles.header}>
            <div>
                <Link className={styles.menuText} to="/"> Home </Link>
                <Link className={styles.menuText} to="/veiculo/create"> Cadastro </Link>
            </div>
        </header>
    )
}