import React from 'react'

import styles from './Statistics.module.css'

export default function Statistics() {

    const registerLog = () => {
        for (var i=1 ; i<=localStorage.length ; i++){
            var storage = JSON.parse(localStorage.getItem(i));
            console.log(`localStorage[${i}]:`, storage);
        }
    }

    /* const clearLocalStorage = () => {
        localStorage.clear();
    } */

    return (
        <div className={styles.statistics}>
            <div className="dots">..............................................................................</div>

            <h5>Estatísticas de acesso</h5>   

            <button onClick={registerLog}>E-mails cadastrados (Console)</button>

            {/* <button onClick={clearLocalStorage}>Limpar lista de e-mail</button> */}

            <h5>Google Analytics n° acessos & cliques</h5>

            <img src="/ga.png" alt='Google Analytics Report'/>

        </div>
    )
}