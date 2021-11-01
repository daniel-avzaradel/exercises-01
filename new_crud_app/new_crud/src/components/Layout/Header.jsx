import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header__page}>
      <h2>CRUD (Create, Read, Update, Delete)</h2>
      <p>BY: DANIEL AVZARADEL</p>
    </div>
  );
}

export default Header;
