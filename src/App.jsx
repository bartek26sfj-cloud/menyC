import meny from "./data/meny";
import Menu from "./components/Menu";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Restaurantmenyen</h1>
        <p>Velg blant våre deilige retter</p>
      </header>
      <main>
        <Menu dishes={meny} />
      </main>
    </div>
  );
}

export default App;
