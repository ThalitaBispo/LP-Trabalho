import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Post } from '../crud/Post';
import { PostList } from '../crud/PostList';
import { PostEdit } from '../crud/PostEdit';
import { PostDelet } from '../crud/PostDelet';
import { Menu } from './Menu';
import { Veiculos } from '../crud/GetVeiculos';

import { Sidebar } from '../sidebar/Sidebar.jsx';
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