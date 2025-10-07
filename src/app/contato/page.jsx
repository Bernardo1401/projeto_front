"use client";

import { useState } from "react";
import { Button, Form, Input, message, Card, Space, Typography } from "antd";
import { 
    MailOutlined, 
    UserOutlined,
    SendOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    LinkedinOutlined,
    GithubOutlined,
    ClockCircleOutlined,
    CheckCircleOutlined
} from "@ant-design/icons";
import styles from "./contato.module.css";
import Header from "../../components/Header";

const { TextArea } = Input;
const { Title, Text } = Typography;

export default function ContatoPage() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            // Simulação de envio com mais realismo
            console.log('Dados enviados:', values);
            
            // Simular processamento
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            message.success({
                content: 'Dúvida enviada com sucesso! Retornaremos em até 24 horas.',
                duration: 4,
                style: { marginTop: '20vh' }
            });
            
            form.resetFields();
            setSubmitted(true);
            
            // Reset submitted state after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
            
        } catch (error) {
            message.error('Erro ao enviar mensagem. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <MailOutlined />,
            title: "Email Comercial",
            value: "bernardo.marques@aluno.senai.br",
            subtitle: "Resposta em até 24h"
        },
        {
            icon: <PhoneOutlined />,
            title: "Telefone",
            value: "+55 (11) 99999-9999",
            subtitle: "Seg-Sex, 9h às 18h"
        },
        {
            icon: <EnvironmentOutlined />,
            title: "Localização",
            value: "Valinhos, SP",
            subtitle: "Atendimento presencial"
        }
    ];

    const socialLinks = [
        {
            icon: <LinkedinOutlined />,
            name: "LinkedIn",
            url: "https://linkedin.com/in/bernardo-dev",
            color: "#0077b5"
        },
        {
            icon: <GithubOutlined />,
            name: "GitHub",
            url: "https://github.com/Bernardo1401",
            color: "#333"
        }
    ];

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    
                    <div className={styles.hero}>
                        <div className={styles.heroContent}>
                            <Title level={1} className={styles.heroTitle}>
                                Tire suas Dúvidas
                            </Title>
                            <Text className={styles.heroSubtitle}>
                                Tem alguma pergunta sobre nosso site, lutadores ou o mundo do UFC? 
                                Entre em contato conosco e nossa equipe especializada responderá suas dúvidas.
                            </Text>
                            <div className={styles.heroStats}>
                                <div className={styles.stat}>
                                    <Text strong>2h</Text>
                                    <Text type="secondary">Tempo de resposta</Text>
                                </div>
                                <div className={styles.stat}>
                                    <Text strong>1000+</Text>
                                    <Text type="secondary">Dúvidas respondidas</Text>
                                </div>
                                <div className={styles.stat}>
                                    <Text strong>24/7</Text>
                                    <Text type="secondary">Suporte disponível</Text>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contentGrid}>
                        
                        <div className={styles.formSection}>
                            <Card className={styles.formCard}>
                                <div className={styles.formHeader}>
                                    <Title level={3} className={styles.formTitle}>
                                        Envie sua Dúvida
                                    </Title>
                                    <Text className={styles.formSubtitle}>
                                        Pergunte sobre lutadores, eventos, estatísticas ou funcionamento do site
                                    </Text>
                                </div>

                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={handleSubmit}
                                    className={styles.contactForm}
                                    size="large"
                                >
                                    <Form.Item
                                        name="nome"
                                        label="Seu Nome"
                                        rules={[
                                            { required: true, message: 'Por favor, insira seu nome' },
                                            { min: 3, message: 'Nome deve ter pelo menos 3 caracteres' }
                                        ]}
                                    >
                                        <Input 
                                            prefix={<UserOutlined />}
                                            placeholder="Seu nome"
                                            className={styles.input}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="email"
                                        label="Seu Email"
                                        rules={[
                                            { required: true, message: 'Por favor, insira seu email' },
                                            { type: 'email', message: 'Email inválido' }
                                        ]}
                                    >
                                        <Input 
                                            prefix={<MailOutlined />}
                                            placeholder="seu@email.com"
                                            className={styles.input}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="telefone"
                                        label="WhatsApp (Opcional)"
                                    >
                                        <Input 
                                            prefix={<PhoneOutlined />}
                                            placeholder="(11) 99999-9999"
                                            className={styles.input}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="mensagem"
                                        label="Sua Dúvida ou Pergunta"
                                        rules={[
                                            { required: true, message: 'Por favor, descreva sua dúvida' },
                                            { min: 10, message: 'Dúvida deve ter pelo menos 10 caracteres' }
                                        ]}
                                    >
                                        <TextArea
                                            rows={5}
                                            placeholder="Ex: Gostaria de saber mais sobre as estatísticas do Conor McGregor, como funcionam os rankings do UFC, informações sobre próximos eventos..."
                                            className={styles.textarea}
                                            showCount
                                            maxLength={500}
                                        />
                                    </Form.Item>

                                    <Form.Item className={styles.submitContainer}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            icon={submitted ? <CheckCircleOutlined /> : <SendOutlined />}
                                            loading={loading}
                                            className={`${styles.submitButton} ${submitted ? styles.submitted : ''}`}
                                            size="large"
                                            block
                                        >
                                            {loading ? 'Enviando...' : submitted ? 'Dúvida Enviada!' : 'Enviar Dúvida'}
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </div>

                        <div className={styles.infoSection}>
                            
                            <div className={styles.contactCards}>
                                {contactInfo.map((info, index) => (
                                    <Card key={index} className={styles.contactCard}>
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardIcon}>
                                                {info.icon}
                                            </div>
                                            <div className={styles.cardInfo}>
                                                <Text strong className={styles.cardTitle}>
                                                    {info.title}
                                                </Text>
                                                <Text className={styles.cardValue}>
                                                    {info.value}
                                                </Text>
                                                <Text type="secondary" className={styles.cardSubtitle}>
                                                    {info.subtitle}
                                                </Text>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <Card className={styles.socialCard}>
                                <Title level={4} className={styles.socialTitle}>
                                    Conecte-se Comigo
                                </Title>
                                <Space size="large" className={styles.socialLinks}>
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                            style={{ borderColor: social.color }}
                                        >
                                            <span style={{ color: social.color }}>
                                                {social.icon}
                                            </span>
                                            {social.name}
                                        </a>
                                    ))}
                                </Space>
                            </Card>

                            <Card className={styles.availabilityCard}>
                                <div className={styles.availabilityContent}>
                                    <ClockCircleOutlined className={styles.availabilityIcon} />
                                    <div>
                                        <Text strong>Disponibilidade</Text>
                                        <br />
                                        <Text type="secondary">
                                            Aceitando novos projetos para início em Outubro 2025
                                        </Text>
                                    </div>
                                </div>
                            </Card>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
