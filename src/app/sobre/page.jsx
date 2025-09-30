"use client";

import { Button } from "antd";
import { 
    GithubOutlined, 
    LinkedinOutlined, 
    MailOutlined,
    TrophyOutlined,
    RocketOutlined,
    DownloadOutlined
} from "@ant-design/icons";
import { 
    SiJavascript, 
    SiTypescript, 
    SiReact, 
    SiNextdotjs, 
    SiNodedotjs, 
    SiPostgresql 
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "./sobre.module.css";
import Header from "../../components/Header";

export default function AboutPage() {

    const projects = [
        {
            title: "Website UFC Fighters",
            description: "Aplicação completa com listagem e detalhes de lutadores do UFC, desenvolvida com Next.js e integração com PostgreSQL.",
            tech: ["Next.js", "React", "PostgreSQL", "CSS Modules"],
            link: "/"
        },
        {
            title: "Sistema ArqIdea",
            description: "Plataforma web para escritório de arquitetura com galeria de projetos, portfólio interativo e sistema de orçamentos online.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://github.com/Bernardo1401/Site-ArqIdea"
        },
        {
            title: "OffCode Network",
            description: "Rede social exclusiva para desenvolvedores com sistema de posts, conexões, compartilhamento de código e fórum de discussões técnicas.",
            tech: ["React", "TypeScript", "Node.js", "Socket.io"],
            link: "https://github.com/anajudemattei/OffCode-Frontend"
        }
    ];

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Hero Section */}
                    <section className={styles.heroSection}>
                        <div className={styles.heroContent}>
                            <div className={styles.profileImageContainer}>
                                <div className={styles.profileImage}>
                                    <Image
                                        src="/images/image0 (2).jpeg"
                                        alt="Bernardo Marques"
                                        width={250}
                                        height={250}
                                        className={styles.profilePicture}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className={styles.heroText}>
                                <h1 className={styles.name}>Bernardo Marques</h1>
                                <h2 className={styles.title}>Desenvolvedor Full Stack</h2>
                                <p className={styles.subtitle}>
                                    Especialista em desenvolvimento web com foco em tecnologias modernas 
                                    como React, Next.js e Node.js. Apaixonado por criar soluções inovadoras 
                                    e experiências digitais excepcionais.
                                </p>
                                <div className={styles.socialLinks}>
                                    <Button 
                                        icon={<GithubOutlined />} 
                                        size="large" 
                                        className={styles.socialBtn}
                                        href="https://github.com/Bernardo1401"
                                        target="_blank"
                                    >
                                        GitHub
                                    </Button>
                                    <Button 
                                        icon={<LinkedinOutlined />} 
                                        size="large" 
                                        className={styles.socialBtn}
                                        href="#"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </Button>
                                    <Button 
                                        icon={<MailOutlined />} 
                                        size="large" 
                                        className={styles.socialBtn}
                                        href="mailto:bernardo.marques@aluno.senai.br"
                                    >
                                        Email
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Experience Section */}
                    <section className={styles.experienceSection}>
                        <h2 className={styles.sectionTitle}>
                            <TrophyOutlined /> Experiência Profissional
                        </h2>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDate}>2023 - Presente</div>
                                <div className={styles.timelineContent}>
                                    <h3>Desenvolvedor Full Stack</h3>
                                    <h4>Freelancer & Projetos Pessoais</h4>
                                    <p>
                                        Desenvolvimento de aplicações web completas do frontend ao backend, 
                                        criando soluções robustas e escaláveis. Experiência em arquitetura 
                                        de sistemas, APIs RESTful, bancos de dados relacionais e deploy em nuvem.
                                    </p>
                                    
                                    <div className={styles.skillsInTimeline}>
                                        <h5 className={styles.skillsTimelineTitle}>Principais Tecnologias:</h5>
                                        <div className={styles.skillsTimelineGrid}>
                                            {/* Primeira linha - 3 cards */}
                                            <div className={styles.skillTimelineItem}>
                                                <div className={`${styles.skillIcon} ${styles.javascript}`}>
                                                    <SiJavascript size={48} />
                                                </div>
                                                <span className={styles.techNameJavascript}>JavaScript</span>
                                                <div className={`${styles.skillLevel} ${styles.advanced}`}>Avançado</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={`${styles.skillIcon} ${styles.typescript}`}>
                                                    <SiTypescript size={48} />
                                                </div>
                                                <span className={styles.techNameTypescript}>TypeScript</span>
                                                <div className={`${styles.skillLevel} ${styles.intermediate}`}>Intermediário</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={`${styles.skillIcon} ${styles.react}`}>
                                                    <SiReact size={48} />
                                                </div>
                                                <span className={styles.techNameReact}>React</span>
                                                <div className={`${styles.skillLevel} ${styles.advanced}`}>Avançado</div>
                                            </div>
                                            
                                            {/* Segunda linha - 3 cards */}
                                            <div className={styles.skillTimelineItem}>
                                                <div className={`${styles.skillIcon} ${styles.nextjs}`}>
                                                    <SiNextdotjs size={60} />
                                                </div>
                                                <span className={styles.techNameNextjs}>Next.js</span>
                                                <div className={`${styles.skillLevel} ${styles.advanced}`}>Avançado</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={`${styles.skillIcon} ${styles.nodejs}`}>
                                                    <SiNodedotjs size={60} />
                                                </div>
                                                <span className={styles.techNameNodejs}>Node.js</span>
                                                <div className={`${styles.skillLevel} ${styles.intermediate}`}>Intermediário</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={`${styles.skillIcon} ${styles.postgresql}`}>
                                                    <SiPostgresql size={60} />
                                                </div>
                                                <span className={styles.techNamePostgresql}>PostgreSQL</span>
                                                <div className={`${styles.skillLevel} ${styles.intermediate}`}>Intermediário</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Motivation Section */}
                    <section className={styles.motivationSection}>
                        <h2 className={styles.sectionTitle}>
                            <RocketOutlined /> Motivações do Projeto
                        </h2>
                        <div className={styles.motivationContent}>
                            <div className={styles.motivationCard}>
                                <div className={styles.motivationHeader}>
                                    <div className={styles.motivationIcon}>
                                        <TrophyOutlined />
                                    </div>
                                    <h3 className={styles.motivationTitle}>Paixão pelo UFC</h3>
                                </div>
                                <p className={styles.motivationText}>
                                    Como fã das artes marciais mistas, sempre quis criar uma plataforma que celebrasse 
                                    os lutadores e tornasse as informações do UFC mais acessíveis. Este projeto nasceu 
                                    da necessidade de ter estatísticas detalhadas e históricos completos em um só lugar.
                                </p>
                            </div>
                            
                            <div className={styles.motivationCard}>
                                <div className={styles.motivationHeader}>
                                    <div className={styles.motivationIcon}>
                                        <FaCode />
                                    </div>
                                    <h3 className={styles.motivationTitle}>Desafio Técnico</h3>
                                </div>
                                <p className={styles.motivationText}>
                                    Desenvolver uma aplicação completa com funcionalidades avançadas como busca, 
                                    filtros e páginas dinâmicas foi uma oportunidade perfeita para demonstrar minhas 
                                    habilidades em React, Next.js e desenvolvimento full stack.
                                </p>
                            </div>
                            
                            <div className={styles.motivationCard}>
                                <div className={styles.motivationHeader}>
                                    <div className={styles.motivationIcon}>
                                        <MailOutlined />
                                    </div>
                                    <h3 className={styles.motivationTitle}>Comunidade</h3>
                                </div>
                                <p className={styles.motivationText}>
                                    Quero criar um espaço onde outros fãs possam explorar informações detalhadas 
                                    sobre seus lutadores favoritos, descobrir novos talentos e se conectar através 
                                    da paixão compartilhada pelas artes marciais mistas.
                                </p>
                            </div>
                            
                            <div className={styles.motivationCard}>
                                <div className={styles.motivationHeader}>
                                    <div className={styles.motivationIcon}>
                                        <RocketOutlined />
                                    </div>
                                    <h3 className={styles.motivationTitle}>Inovação & UX</h3>
                                </div>
                                <p className={styles.motivationText}>
                                    Busco sempre implementar as melhores práticas de experiência do usuário, 
                                    criando interfaces intuitivas e responsivas. Este projeto representa minha 
                                    visão de como a tecnologia pode melhorar a forma como consumimos esportes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className={styles.projectsSection}>
                        <h2 className={styles.sectionTitle}>
                            <FaCode /> Projetos em Destaque
                        </h2>
                        <div className={styles.projectsGrid}>
                            {projects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                    <div className={styles.projectTech}>
                                        {project.tech.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className={`${styles.techTag} ${styles['techTag' + tech.replace(/[^a-zA-Z]/g, '')]}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={project.link} className={styles.projectLink}>
                                        <Button icon={<RocketOutlined />} className={styles.projectBtn}>
                                            Ver Projeto
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className={styles.contactSection}>
                        <h2 className={styles.sectionTitle}>
                            <MailOutlined /> Vamos Trabalhar Juntos?
                        </h2>
                        <div className={styles.contactContent}>
                            <p className={styles.contactText}>
                                Estou sempre interessado em novos desafios e oportunidades. 
                                Se você tem um projeto em mente ou gostaria de colaborar, 
                                não hesite em entrar em contato!
                            </p>
                            <div className={styles.contactActions}>
                                <Button 
                                    icon={<MailOutlined />} 
                                    size="large" 
                                    className={styles.contactBtn}
                                    href="mailto:bernardomarques@email.com"
                                >
                                    Enviar Email
                                </Button>
                                <Button 
                                    icon={<LinkedinOutlined />} 
                                    size="large" 
                                    className={styles.contactBtn}
                                    href="#"
                                    target="_blank"
                                >
                                    LinkedIn
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
