import React from 'react'

import ContactForm from './ContactForm.js'

import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <p>
                    A Consultoria Contábil na Prática é um série de<br/>
                    vídeo gratuita. Será realizada durante o mês de<br/>
                    Julho e para ter acesso exclusivo, preencha o<br/>
                    formulário ao lado!
                </p>

                <ContactForm/>
            </div>

            <div className="dots">..............................................................................</div>

            <h1>ESTAMOS JUNTOS NESSA</h1>
        </div>
    )
}