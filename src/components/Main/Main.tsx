import React from 'react';
import Aside from "./Aside/Aside";
import Content from "./Content/Content";
import './Main.module.css';

function Main() {
    return (
        <main>
            <Aside/>
            <Content/>
        </main>
    )
}

export default Main;