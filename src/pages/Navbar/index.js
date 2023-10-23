import styles from "@/pages/Navbar/style.module.css"

export default function Navbar() {
    return(
        <navbar className={styles.navbar}>
            <p>Sol</p>
            <p>Mercúrio</p>
            <p>Vênus</p>
            <p>Terra</p>
            <p>Marte</p>
            <p>Júpiter</p>
            <p>Saturno</p>
            <p>Urano</p>
            <p>Netuno</p>
        </navbar>
    )
}