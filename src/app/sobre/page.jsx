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
                                        href="mailto:bernardomarques@email.com"
                                    >
                                        Email
                                    </Button>
                                    <Button 
                                        icon={<DownloadOutlined />} 
                                        size="large" 
                                        className={styles.cvBtn}
                                        href="#"
                                    >
                                        Download CV
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
                                                <div className={styles.skillIcon} style={{backgroundColor: '#f7df1e', color: '#000'}}>
                                                    <SiJavascript size={48} />
                                                </div>
                                                <span>JavaScript</span>
                                                <div className={`${styles.skillLevel} ${styles.advanced}`}>Avançado</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={styles.skillIcon} style={{backgroundColor: '#3178c6', color: '#fff'}}>
                                                    <SiTypescript size={48} />
                                                </div>
                                                <span>TypeScript</span>
                                                <div className={`${styles.skillLevel} ${styles.intermediate}`}>Intermediário</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={styles.skillIcon} style={{backgroundColor: '#61dafb', color: '#000'}}>
                                                    <SiReact size={48} />
                                                </div>
                                                <span>React</span>
                                                <div className={`${styles.skillLevel} ${styles.advanced}`}>Avançado</div>
                                            </div>
                                            
                                            {/* Segunda linha - 3 cards */}
                                            <div className={styles.skillTimelineItem}>
                                                <div className={styles.skillIcon} style={{backgroundColor: '#000', color: '#fff'}}>
                                                    <SiNextdotjs size={48} />
                                                </div>
                                                <span>Next.js</span>
                                                <div className={`${styles.skillLevel} ${styles.advanced}`}>Avançado</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={styles.skillIcon} style={{backgroundColor: '#339933', color: '#fff'}}>
                                                    <SiNodedotjs size={48} />
                                                </div>
                                                <span>Node.js</span>
                                                <div className={`${styles.skillLevel} ${styles.intermediate}`}>Intermediário</div>
                                            </div>
                                            <div className={styles.skillTimelineItem}>
                                                <div className={styles.skillIcon} style={{backgroundColor: '#336791', color: '#fff'}}>
                                                    <SiPostgresql size={48} />
                                                </div>
                                                <span>PostgreSQL</span>
                                                <div className={`${styles.skillLevel} ${styles.intermediate}`}>Intermediário</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                            <span key={techIndex} className={styles.techTag}>
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
