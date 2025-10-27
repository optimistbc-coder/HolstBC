import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";

createRoot(document.getElementById('root')).render(
    <MantineProvider>
        <App/>
    </MantineProvider>
)
/*
 #c7c9c9 - для неактивних елементів та disabled кнопок
 #0078ef - для кнопок та активних елементів

 white - осоновний фон сторінок
 white - бекграунд для футера/хедера

 #222C3A - колір основного тексту
 #6B7C93 - колір другорядного тексту
 */