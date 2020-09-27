import React from 'react'

import styles from './Content.module.css'

export default function Content() {
    return (
        <div className={styles.content}>
            <h1>ESSA SÉRIE É PRA VOCÊ CONTADOR:</h1>
            <p><img src="/ellipse.png" alt='circle'/>Que quer ter processos contábeis ágeis; </p>
            <p><img src="/ellipse.png" alt='circle'/>Que quer aumentar o valor percebido pelo seu cliente e ajudá-lo na tomada de decisão; </p>
            <p><img src="/ellipse.png" alt='circle'/>Que deseja ver na prática como aplicar uma consultoria contábil eficaz e com método claro; </p>
            <div className="dots">..............................................................................</div>

            <h1>O QUE SERÁ ABORDADO NA SÉRIE:</h1>
            <p><img src="/ellipse.png" alt='circle'/>Análises de indicadores de empresas reais no contexto atual; </p>
            <p><img src="/ellipse.png" alt='circle'/>Doenças financeiras como insolvência, undertrading e excesso de endividamento; </p>
            <p><img src="/ellipse.png" alt='circle'/>Metodologia científica para aplicação de consultoria contábil; </p>
            <p><img src="/ellipse.png" alt='circle'/>Pesquisas e comparativos de mercado para entender o contexto das pequenas empresas na pandemia; </p>
            <div className="dots">..............................................................................</div>
        </div>
    )
}