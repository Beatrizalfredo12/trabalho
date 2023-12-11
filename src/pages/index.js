import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Components.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Explore a API BocaWeb</title>
        <meta name="description" content="Explore a API BocaWeb para encontrar informações sobre animais de estimação." />
      </Head>
      <Navbar />
      <br />
      <section>
        <h1>Animais de Estimação</h1>
        <br />
        <p>
          Seja bem-vindo à seleção de animais de estimação!<br />
          Aqui, você pode descobrir várias informações sobre vários animais e diferente espécies,
          desde seus nomes até descrições incríveis.<br />
          Clique no link abaixo para começar sua jornada.
        </p>
        <br />
        <a
          href="/Users"
          rel="noopener noreferrer"
        >
          Explore a API de Animais de Estimação
        </a>
      </section>
      <br />
      <Footer />
    </div>
  );
};

export default index;