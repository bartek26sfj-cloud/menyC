import styles from "./Dish.module.css";

const kategoriKlasse = {
  Forrett: styles.kategoriForrett,
  Hovedrett: styles.kategoriHovedrett,
  Dessert: styles.kategoriDessert,
};

function Dish({ dish }) {
  const { tittel, pris, ingredienser, kategori } = dish;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.tittel}>{tittel}</h2>
        <p className={styles.pris}>{pris}</p>
      </div>
      <hr className={styles.divider} />
      <p className={styles.ingredienser}>{ingredienser}</p>
      <span className={`${styles.kategori} ${kategoriKlasse[kategori] ?? ""}`}>
        {kategori}
      </span>
    </article>
  );
}

export default Dish;
