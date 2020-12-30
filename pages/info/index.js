import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Info({ username }) {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    This is just a test for routes
                </h1>
                <h2>Developed by {username}</h2>

                <nav className={styles.nav}>
                    <Link href="/">
                        <a>
                            Go back
                        </a>
                    </Link>
                </nav>
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    /*return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(response => {
            const {username} = response;
            return {
                props: {
                    username
                }
            };
        });*/
    return {
        props: {
            username: 'Alex'
        }
    }
}