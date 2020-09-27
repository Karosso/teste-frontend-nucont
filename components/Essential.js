import React from 'react'
import ReactGA from 'react-ga'
import styles from './Essential.module.css'

export default function Essential() {

    const handleEssentialButton = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Clique no botão: Quero assistir a série'
        })
    }

    return (
        <div className={styles.essential}>
            <h1>COMO SER ESSENCIAL NA TOMADA DE DECISÃO DAS EMPRESAS?</h1>

            <p>Responder essa pergunta <b>pode ser mais fácil</b> do que parece:<br/>
            A Consultoria Contábil é sua aliada para analisar a real situação das empresas.<br/>
            No entanto, para colocar em prática, você precisa de informações e dedicação.<br/>
            <br/>
            <b>Vamos conversar a respeito?</b>
            </p>

            <div className={styles.button}>
                <button onClick={handleEssentialButton}>
                    <a href="https://www.youtube.com/playlist?list=PLiBEvajibubhKAJCOW_QkKw8nwCHqBPp_" 
                        target="_blank">QUERO ASSITIR A SÉRIE: CONSULTORIA CONTÁBIL NA PRÁTICA
                    </a>
                </button>
            </div>
        </div>
    )
}