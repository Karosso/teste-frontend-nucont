import React from 'react'
import Head from 'next/head'

import Header from '../components/Header.js'
import Essential from '../components/Essential.js'
import Content from '../components/Content.js'
import Speaker from '../components/Speaker.js'
import Contact from '../components/Contact.js'
import Statistics from '../components/statistics.js'

export default function Home() {
    return (
        <div>
            <Head>
                <title>CONSULTORIA CONTABIL NA PRÁTICA</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:site_name" content="https://teste-nucont.vercel.app/" key="siteName" />
                <meta property="og:title" content="CONSULTORIA CONTABIL NA PRÁTICA" key="siteTitle" />
                <meta property="og:description" 
                    content="Identifique problemas através
                    de análise de indicadores e entenda como fazer uma
                    consultoria contábil eficiente."
                    key="siteDescription"
                />
                <meta property="og:image" itemprop="image" content="https://teste-nucont.vercel.app/speaker.jpg" key="siteImg" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="420" />
                <meta property="og:image:height" content="372" />
                <meta property="og:type" content="website" key="siteType" />
            </Head>

            <Header />
            <Essential />
            <Content />
            <Speaker />
            <Contact />
            <Statistics/>
        </div>
    )
}
