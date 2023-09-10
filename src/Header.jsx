import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.image}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.png"
        alt="korean flag"
      />

      <h1 className={styles.font}>SOUTH KOREA</h1>
      <h1 className={styles.font}>NEPAL</h1>
      <img
        className={styles.nepalFlag}
        src="https://www.colonialflag.com/cdn/shop/products/nepal-flag__24265.1639690372.1280.1280.jpg?v=1673390878"
        alt="nepal flag"
      />
      <nav className={styles.navComponent}>
        <a href="home.html" style={{ background: "yellow" }}>
          Home
        </a>
        <a href="#" style={{ background: "pink" }}>
          {" "}
          About
        </a>
        <a href="#" style={{ background: "skyblue" }}>
          Contact
        </a>
        <a href="#" style={{ background: "yellowgreen" }}>
          {" "}
          Gallery
        </a>
      </nav>
    </header>
  );
};

export default Header;
