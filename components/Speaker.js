import React from 'react'

import styles from './Speaker.module.css'

export default function Speaker() {
    return (
        <div className={styles.speaker}>
            <h1>QUEM É FERNANDA ROCHA?</h1>

            <div className={styles.content}>
                <div className={styles.speakerImg}>
                    <img src="/speaker.jpg" alt='Fernanda Rocha'/>
                </div>

                <p>
                    <font color="#FFB700"><b>Fala galera, beleza?</b></font><br/>
                    Eu sou a Fernanda Rocha, <font color="#E67E00">fundadora da Nucont e do Movimento<br/>
                    Contabilidade Sem Chatice.</font> Como empresária contábil eu já estive<br/>
                    no fundo do poço, a ponto de largar tudo. Até que através da<br/>
                    Contabilidade Consultiva me reergui e achei uma maneira de<br/>
                    entregar mais valor para as empresas e com isso fui mais<br/>
                    valorizada. <font color="#E67E00">Cansada de ser tratada como mal necessário,</font> decidi<br/>
                    fazer diferente. Corri atrás e resolvi encarar de frente o desafio de<br/>
                    aplicar na prática a verdadeira contabilidade. Não foi fácil, muitas<br/>
                    vezes me decepcionei, mas <font color="#E67E00">me coloquei na missão de mudar para<br/>
                    sempre a forma com que Contadores e Empresas se relacionam.</font><br/>
                    Hoje tenho um compromisso com a classe contábil de replicar<br/>
                    tudo o que eu aprendi nessa jornada e garantir que o contador<br/>
                    salve empresas e ajude os empresários na tomada de decisões.<br/>
                    Vem comigo!
                </p>
            </div>

            <div className="dots">..............................................................................</div>
        </div>
    )
}