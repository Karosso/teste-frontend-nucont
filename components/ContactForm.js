import React from 'react'
import ReactGA from 'react-ga'
import { useRouter } from 'next/router'

import styles from './ContactForm.module.css'

export default function ContactForm() {

    const router = useRouter();

    const handleSubmit = event => {
        event.persist();
        event.preventDefault();
        ReactGA.event({
            category: 'Button',
            action: 'Clique no botão: Quero acompanhar a série'
        })

        var clientContact = {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value
        }

        localStorage.setItem(localStorage.length + 1, JSON.stringify(clientContact));
        router.push("/tks");
    }

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit} > 
            <h3>Fale agora com nossos consultores!</h3>
            <p>
                Conheça a Consultoria para Contadores e<br/>
                garanta uma vaga exclusiva na<br/>
                <b>Imersão Nucont</b><br/>
            </p>
            <input type="text" name="name" placeholder=" Nome" required/>
            <input type="text" name="email" placeholder=" E-mail" required/>
            <button>
                QUERO ACOMPANHAR A SÉRIE
            </button>
            
        </form>
    )
}