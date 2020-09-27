import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ReactGA from 'react-ga'

import styles from './tks.module.css'
import Statistics from '../components/statistics'

export default function Thanks() {

    const handleTalkButton = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Clique no botão: Falar com um consultor'
        })
    }

    const handleTelegramButton = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Clique no botão: Conecte-se com a gente'
        })
    }

    return (
        <div className={styles.tks}>
            <Head>
                <title>CONSULTORIA CONTABIL NA PRÁTICA</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.thanks}>
                    <div className={styles.title}>
                        <h1>OBRIGADO!</h1>
                        <Link href="/"><h5>Home</h5></Link>
                    </div>
                    
                    <p>
                        Fique ligado! Você receberá em alguns instantes um<br/>
                        e-mail da Fernanda Rocha com o acesso para acompanhar<br/>
                        a série. toda semana vamos enviar o link da Consultoria<br/>
                        Contábil com o tema que será abordado<br/>
                    </p>

                    <h5>
                        Por favor, confira também a aba de promoções e sua caixa de spam ou<br/>
                        lixo eletrônico, em alguns casos o e-mail chega nessas outras caixas.
                    </h5>
                </div>

                <div className={styles.contact}>
                    <p>
                        A Nucont se sente responsável por te ajudar não só com estratégias e ações<br/>
                        de emergência, mas também para te deixar preparado para um novo<br/>
                        normal que viveremos. Conheça o Plano de retomada!<br/>
                    </p>

                    <button onClick={handleTalkButton}>
                        <a href="https://nucont.com/" 
                            target="_blank">FALAR COM CONSULTOR
                        </a>
                    </button>
                </div>

                <div className={styles.telegram}>
                    <p>
                        QUER FAZER PARTE DO CANAL OFICIAL DA NUCONT COM NÓTICAS, DICAS E CONTEÚDOS<br/>
                        EXCLUSIVOS VOLTADOS A CONTABILIDADE CONSULTIVA?<br/> 
                    </p>
                    
                    <div className={styles.button}>
                        <a href="https://blog.nucont.com/" target="_blank">
                            <img src="/telegram-icon.png" alt='Telegram Icon' onClick={handleTelegramButton}/>
                            <span onClick={handleTelegramButton}>
                            CONECTE - SE COM A GENTE: TELEGRAM
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <Statistics/>
        </div>
    )
}
