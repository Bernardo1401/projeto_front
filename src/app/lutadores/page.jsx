"use client";

import { Button, Input, Select } from "antd";
import { UserOutlined, SearchOutlined, ClearOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./lutador.module.css"
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const { Option } = Select;

export default function FightersPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [lutadores, setLutadores] = useState([]);
    const [filteredLutadores, setFilteredLutadores] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchLutadores = async () => {
            const response = await fetch(`${apiUrl}/lutadores`);
            const data = await response.json();
            setLutadores(data);
            setFilteredLutadores(data);
            
            // Extrair categorias únicas
            const uniqueCategories = [...new Set(data.map(lutador => lutador.categoria_peso))];
            setCategories(uniqueCategories);
        };
        fetchLutadores();
    }, [apiUrl]);

    // Função para filtrar lutadores
    useEffect(() => {
        let filtered = lutadores;

        // Filtrar por nome
        if (searchTerm) {
            filtered = filtered.filter(lutador =>
                lutador.nome.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filtrar por categoria
        if (selectedCategory !== "all") {
            filtered = filtered.filter(lutador =>
                lutador.categoria_peso === selectedCategory
            );
        }

        setFilteredLutadores(filtered);
    }, [searchTerm, selectedCategory, lutadores]);

    const handleClearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("all");
    };

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>Lista do maiores lutadores</h1>
                
                <div className={styles.searchContainer}>
                    <div className={styles.searchWrapper}>
                        <div className={styles.searchInputWrapper}>
                            <Input
                                className={styles.searchInput}
                                placeholder="Buscar lutador por nome..."
                                prefix={<SearchOutlined className={styles.searchIcon} />}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                allowClear
                            />
                        </div>
                        
                        <div className={styles.selectWrapper}>
                            <Select
                                className={styles.categorySelect}
                                value={selectedCategory}
                                onChange={setSelectedCategory}
                                placeholder="Categoria"
                            >
                                <Option value="all">Todas as Categorias</Option>
                                {categories.map(category => (
                                    <Option key={category} value={category}>
                                        {category}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                        
                        <Button 
                            className={styles.clearButton}
                            onClick={handleClearFilters}
                            type="primary"
                        >
                            <ClearOutlined />
                            Limpar
                        </Button>
                    </div>
                    
                    <div className={styles.resultsCounter}>
                        {filteredLutadores.length} lutador(es) encontrado(s)
                    </div>
                </div>

                <div className={styles.fightersGrid}>
                    {filteredLutadores.map((lutador) => (
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
                                <Button icon={<UserOutlined />} href={`/lutadores/${lutador.id}`}>Ver Perfil</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}