import Head from 'next/head'
import { useSession, signOut } from 'next-auth/client'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [session, loading] = useSession()

  if (session) {
    console.log(session)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>Your logo</p>
          </div>
          <div className={styles.right}>
            {session && session.user ?
              <div className={styles.navlist}>
                <a href="/protected">Protected page</a>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >Logout
                </a>
              </div>
              :
              <div className={styles.navlist}>
                <a href="/protected">Protected page</a>
                <a className={styles.button} href="/login">Login</a>
              </div>
            }
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {session ? <span>Welcome back <p>{session.user.username}</p> to </span> : 'Welcome to'}
          <p>Next.js! + Strapi + NextAuth app</p>
        </h1>

        <p className={styles.description}>
          {session ? <span>Your JWT is {session.jwt}</span> : <span>Get started by click in <a href="/login">login</a>{' '}</span>}
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ixtlan.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Ixtlan.dev
        </a>
      </footer>
    </div>
  )
}
