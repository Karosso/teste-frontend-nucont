import React from 'react'

import styles from './Header.module.css'

import ContactForm from './ContactForm.js'

export default function Header() {
    return (
        <div className={styles.headerBackColor}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <h5>CONSULTORIA CONTÁBIL NA PRÁTICA</h5>

                        <p><b>Identifique</b> situações problemáticas nas empresas através<br/>
                            de análise de indicadores e entenda como fazer uma<br/>
                            consultoria contábil eficiente. Seja o responsável por ajudar<br/>
                            as pequenas empresas a se recuperarem dos impactos<br/>
                            gerados pela crise econômica, aplicando a contabilidade<br/>
                            como ciência.
                        </p>

                        <div className={styles.signature}><p>com Fernanda Rocha - CEO da Nucont</p></div>
                    </div>

                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}