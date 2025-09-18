"use client";

import { Button } from "antd";
import { ArrowLeftOutlined, TrophyOutlined, StarOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./id.module.css"
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function FighterDetailPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [lutador, setLutador] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchLutador = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${apiUrl}/lutadores/${id}`);
                if (!response.ok) {
                    throw new Error('Lutador não encontrado');
                }
                const data = await response.json();
                setLutador(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        if (id) {
            fetchLutador();
        }
    }, [apiUrl, id]);

    if (loading) return <div className={styles.loading}>Carregando...</div>;
    if (error) return <div className={styles.error}>Erro: {error}</div>;
    if (!lutador) return <div className={styles.error}>Lutador não encontrado</div>;

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Botão Voltar */}
                    <Link href="/lutadores" className={styles.backButton}>
                        <Button 
                            icon={<ArrowLeftOutlined />} 
                            size="large"
                            className={styles.backBtn}
                        >
                            Voltar
                        </Button>
                    </Link>

                    {/* Perfil Principal */}
                    <div className={styles.fighterProfile}>
                        {/* Imagem do Lutador */}
                        <div className={styles.fighterImageContainer}>
                            <Image 
                                src={lutador.foto_url} 
                                alt={lutador.nome}
                                width={500}
                                height={600}
                                className={styles.fighterImage}
                                priority
                            />
                            {lutador.hall_da_fama && (
                                <div className={styles.hallOfFameBadge}>
                                    <StarOutlined />
                                    Hall da Fama
                                </div>
                            )}
                        </div>

                        {/* Informações do Lutador */}
                        <div className={styles.fighterInfo}>
                            <h1 className={styles.fighterName}>{lutador.nome}</h1>
                            <div className={styles.fighterDetails}>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Gênero:</span>
                                    <span className={styles.value}>{lutador.genero}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Categoria de Peso:</span>
                                    <span className={styles.value}>{lutador.categoria_peso}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Alcance:</span>
                                    <span className={styles.value}>{lutador.alcance_cm} cm</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.label}>Estilo Principal:</span>
                                    <span className={styles.value}>{lutador.estilo_principal}</span>
                                </div>
                            </div>

                            {/* Estatísticas do Cartel */}
                            <div className={styles.record}>
                                <h3 className={styles.recordTitle}>
                                    <TrophyOutlined /> Cartel Profissional
                                </h3>
                                <div className={styles.recordStats}>
                                    <div className={styles.recordItem}>
                                        <span className={styles.recordNumber}>{lutador.cartel_vitorias}</span>
                                        <span className={styles.recordLabel}>Vitórias</span>
                                    </div>
                                    <div className={styles.recordItem}>
                                        <span className={styles.recordNumber}>{lutador.cartel_derrotas}</span>
                                        <span className={styles.recordLabel}>Derrotas</span>
                                    </div>
                                    <div className={styles.recordItem}>
                                        <span className={styles.recordNumber}>{lutador.cartel_empate}</span>
                                        <span className={styles.recordLabel}>Empates</span>
                                    </div>
                                </div>
                            </div>

                            {/* Principais Conquistas */}
                            {lutador.principais_conquistas && (
                                <div className={styles.achievements}>
                                    <h3 className={styles.achievementsTitle}>Principais Conquistas</h3>
                                    <p className={styles.achievementsText}>{lutador.principais_conquistas}</p>
                                </div>
                            )}

                            {/* Biografia */}
                            {lutador.biografia && (
                                <div className={styles.biography}>
                                    <h3 className={styles.biographyTitle}>Biografia</h3>
                                    <p className={styles.biographyText}>{lutador.biografia}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
