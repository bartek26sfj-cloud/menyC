import styles from "./Menu.module.css";
import Dish from "./Dish";

function Menu({ dishes }) {
  return (
    <ul className={styles.grid}>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyle: "none" }}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
