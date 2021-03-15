import { csrfToken } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../../styles/Login.module.css'

export default function Login({ csrfToken }) {
    const [loginError, setError] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (router.query.error) {
            setError(router.query.error) 
        }
    }, [router])

    return (
        <div className={styles.login}>
            <div className={styles.wrapper}>
                <form method='post' action='/api/auth/callback/credentials'>
                    <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                    <div className={styles.var}>
                        <label htmlFor="username">Email</label>
                        <input name='username' type='email' />
                    </div>
                    <div className={styles.var}>
                        <label htmlFor="password">Password</label>
                        <input name='password' type='password' />
                    </div>
                    <span className={styles.error}>{loginError}</span>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}

Login.getInitialProps = async (context) => {
    const req = context.req
    return {
        csrfToken: await csrfToken(context),
    }
}

