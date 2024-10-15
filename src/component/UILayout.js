'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import { Button } from "antd";

export default function UILayout({ children }) {
    return (

        <div className={styles.page}>
            <header>
                <h1>NextJS antd markdown reader demo</h1>
                {/* different written styles for nevigation. */}
                <Button type="link" href='/'>Home</Button>
                <Link href='/clientmdx'>
                    <Button type="link" >Client Compoent</Button>
                </Link>
                <Button type="link" href='/servermdx'>Server Component </Button>
            </header>
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    );
}