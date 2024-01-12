import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/assets/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              {/* <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
            <NavLink href="/community">Foodies community</NavLink>
              {/* <Link href="/community" className={path === '/community' ? classes.active : undefined}>Foodies Community</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
