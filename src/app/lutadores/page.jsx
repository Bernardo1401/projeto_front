"use client";

import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"
import Header from "../../components/Header";
import { useEffect, useState } from "react";

export default function FightersPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [lutadores, setLutadores] = useState([]);

    useEffect(() => {
        const fetchLutadores = async () => {
            const response = await fetch(`${apiUrl}/lutadores`);
            const data = await response.json();
            setLutadores(data);
        };
        fetchLutadores();
    }, [apiUrl]);
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>Lista do maiores lutadores</h1>
                <div className={styles.fightersGrid}>
                    {lutadores.map((lutador) => (
                        <div key={lutador.id} className={styles.fighterCard}>
                            <Image
                                src={lutador.foto_url}
                                alt={lutador.nome}
                                width={200}
                                height={200}
                            />
                            <h2 className={styles.fighterName}>{lutador.nome}</h2>
                            <p className={styles.fighterInfo}>Genero: {lutador.genero}</p>
                            <p className={styles.fighterInfo}>Alcance: {lutador.alcance_cm}</p>
                            <p className={styles.fighterInfo}>Categoria: {lutador.categoria_peso}</p>
                            <Link href={`/lutadores/${lutador.id}`}>
                                <Button icon={<UserOutlined />}>Ver Perfil</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}