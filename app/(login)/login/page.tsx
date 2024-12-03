"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import UserLogout from "../../lib/logout";
import styles from "./page.module.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailNewAccount, setEmailNewAccount] = useState("");
    const [error, setError] = useState("");
    const [newAccountButtonClick, setNewAccountButtonClick] = useState<boolean>(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            router.push("/");

            if (!res.ok) {
                setError("Erro ao fazer login");
            }
        } catch (error) {
            setError("Erro de conexão. Tente novamente mais tarde.");
        }
    };

    const handleLogout = async () => {
        await UserLogout();
        router.push("/");
    };

    return (
        <main className={styles.main}>
            <div className={styles.loginWrapper}>
                <section>
                    <form onSubmit={handleLogin} className={styles.form}>
                        <h2>
                            Já sou cliente
                        </h2>
                        <label htmlFor='email'>
                            Email:
                        </label>
                        <input
                            id='email'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ marginBottom: "10px", padding: "8px" }}
                        />
                        <label htmlFor='password'>
                            Password:
                        </label>
                        <input
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ marginBottom: "10px", padding: "8px" }}
                        />
                        {error &&
                            <p style={{ color: "red" }}>{error}</p>
                        }
                        <button type="submit" className={styles.button}>
                            Login
                        </button>
                    </form>
                    <button style={{ padding: "10px", cursor: "pointer" }} onClick={handleLogout}>
                        Logout
                    </button>
                </section>
                <div className={styles.divBetweenSection}></div>
                <section>
                    <form onSubmit={(e)=>e.preventDefault()} className={styles.form}>
                        <h2>
                            Criar conta
                        </h2>
                        <label htmlFor='emailNewAccount'>
                            Informe seu e-mail:
                        </label>
                        <input
                            id='emailNewAccount'
                            type='email'
                            value={emailNewAccount}
                            onChange={(e) => setEmailNewAccount(e.target.value)}
                            // required
                            style={{ marginBottom: "10px", padding: "8px" }}
                        />
                        <button type='submit' onClick={()=>setNewAccountButtonClick(true)} className={styles.button}>
                            Criar conta
                        </button>
                        {newAccountButtonClick &&
                            <p style={{ color: "red", textAlign: "center" }}>Recurso sendo implementado</p>
                        }
                    </form>
                </section>
            </div>
        </main>
    );
}