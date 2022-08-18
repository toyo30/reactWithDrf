import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import Container from "./Container";
import styles from "./Nav.module.css";
import UserMenu from "./UserMenu";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to="/courses">카탈로그</Link>
          </li>
          <li>
            <Link>커뮤니티</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
