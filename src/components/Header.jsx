import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Menu } from './Menu';
import { Post } from './Post';
import { PostList } from './PostList';
import { PostEdit } from './PostEdit';
import { PostDelet } from './PostDelet';
import { Menu } from './Menu';
import { Veiculos } from './GetVeiculos';

import { Sidebar } from './Sidebar.jsx';
import styles from './Menu.module.css'

export function Header() {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <div>
                    <div className={styles.wrapper}>
                        <Sidebar />

                        <main>
                            <Routes>
                                <Route path="/" element={<PostList />} />
                                <Route path="/veiculo/create" element={<Post />} />
                                <Route path="/veiculo/edit/:id" element={<PostEdit />} />
                                <Route path="/veiculo/delete/:id" element={<PostDelet />} />
                                <Route path="/veiculos/" element={<Veiculos />} />
                            </Routes>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}