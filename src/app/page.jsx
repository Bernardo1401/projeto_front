"use client";

import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Home() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [lutadores, setLutadores] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const fetchLutadores = async () => {
            const response = await fetch(`${apiUrl}/lutadores`);
            const data = await response.json();
            setLutadores(data);
        };

        fetchLutadores();
    }, [apiUrl]);

    const lutadoresDestaque = lutadores.filter(lutador => lutador.destaque_home);
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(lutadoresDestaque.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <section className={styles.heroSection}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src="/images/silva_noc.jpg" 
                            alt="Hero Image" 
                            width={650} 
                            height={750} 
                            className={styles.heroImage}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Bem-vindo ao Mundo do UFC Brasileiro</h1>
                        <p className={styles.description}>Seu portal para o mundo do UFC.</p>
                        <p className={styles.subtitle}>
                            O UFC Brasil reúne notícias, análises, perfis de atletas e cobertura dos principais eventos do MMA nacional. Acompanhe curiosidades e conteúdos especiais sobre os ícones brasileiros do octógono. Seja bem-vindo!
                            <br />
                            Descubra histórias inspiradoras dos maiores campeões do Brasil.
                            <br />
                            Junte-se à comunidade de fãs e compartilhe sua paixão pelo esporte!
                        </p>
                    </div>
                </section>
            </main>
            {/* Carrossel de lutadores */}
            <section className={styles.fighterSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Lutadores Brasileiros em Destaque</h2>
                    <div className={styles.carouselContainer}>
                        <button 
                            className={`${styles.carouselBtn} ${styles.prevBtn}`}
                            onClick={prevSlide}
                            disabled={totalSlides <= 1}
                        >
                            &#8249;
                        </button>
                        
                        <div className={styles.carousel}>
                            <div 
                                className={styles.carouselTrack}
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`
                                }}
                            >
                                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className={styles.slide}>
                                        {lutadoresDestaque
                                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                            .map((lutador) => (
                                                <div key={lutador.id} className={styles.fighterCard}>
                                                    <div className={styles.cardImageContainer}>
                                                        <Image
                                                            src={lutador.foto_url}
                                                            alt={lutador.nome}
                                                            width={300}
                                                            height={320}
                                                            className={styles.fighterImage}
                                                        />
                                                        <div className={styles.cardOverlay}>
                                                            <span className={styles.viewMore}>Ver Mais</span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cardContent}>
                                                        <h3 className={styles.fighterName}>{lutador.nome}</h3>
                                                        <p className={styles.fighterCategory}>{lutador.categoria || 'UFC'}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <button 
                            className={`${styles.carouselBtn} ${styles.nextBtn}`}
                            onClick={nextSlide}
                            disabled={totalSlides <= 1}
                        >
                            &#8250;
                        </button>
                    </div>
                    
                    {/* Indicadores */}
                    {totalSlides > 1 && (
                        <div className={styles.indicators}>
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}