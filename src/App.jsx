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
          href="https://wa.me/5581996680762"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          Atendimento Atacado
        </a>
      </main>
    </div>
  )
}