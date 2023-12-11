import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';

import Link from 'next/link';
function Users({ users }) {
    return (
        <div>
            <Head>
                <title> Meu app - Sobre </title>
            </Head>
            <Navbar />
            <br></br>
            <div className={styles.sobre}>
                <main>
                    <h2> Conheça um pouco sobre os nossos animais de estimação!</h2>
                </main>
                <br></br>
                <div id={styles.main}>
                    {users.map((user, index) => (
                        <div className={styles.links} key={user.index}>
                            <Link href='/noticia/[id]' as={`/noticia/${index}`}>
                                <p> {user.nome} </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;