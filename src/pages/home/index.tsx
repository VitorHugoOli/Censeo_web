import {RouteProps} from "react-router";
import React from "react";
import './style.scss'

function Home(props: RouteProps) {

    return (
        <React.Fragment>
            <main className="home-page">
                <div>
                    <h1>Suporte Censeo</h1>
                    <div>
                        <h3>Contatos</h3>
                        <div>
                            <p>Email:</p>
                            <a href="mailto:vitor.h.oliveira@ufv.br">vitor.h.oliveira@ufv.br</a>
                        </div>
                    </div>

                </div>
            </main>
        </React.Fragment>
    )
}

export default Home;