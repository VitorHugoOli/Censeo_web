import {RouteProps} from "react-router";
import React from "react";
import './style.scss'

function Home(props: RouteProps) {

    return (
        <React.Fragment>
            <main className="home-page">
                <h1>Suporte Censeo</h1>
                <h3>Contatos</h3>
                <a href="mailto:vitor.h.oliveira@ufv.br">vitor.h.oliveira@ufv.br</a>
            </main>
        </React.Fragment>
    )
}

export default Home;