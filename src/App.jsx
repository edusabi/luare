import styles from './App.module.css'

export default function App() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: "url('./background.jpeg')",
      }}
    >
      <div className={styles.overlay}></div>

      <main className={styles.content}>
          <img className={styles.logo} src="./logo.jpeg" alt="Logo" />

        <h1 className={styles.title}>Revenda Premium</h1>
        <p className={styles.subtitle}>Atendimento rápido e exclusivo</p>

        <a
          href="https://wa.me/5581995789922"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          Atendimento Atacado
        </a>

        <a
          href="https://chat.whatsapp.com/L1OGHfuWsNp6nZkuBkm8cn?mode=gi_t"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
          style={{marginTop: "1rem"}}
        >
          Grupo vip com vaga
        </a>
      </main>
    </div>
  )
}