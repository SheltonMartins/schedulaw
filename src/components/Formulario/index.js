import React, { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css'
import Processo from '../../Models/Processo';

function Formulario({ aoProcessoCadastrado }) {
    const [autor, setAutor] = useState('');
    const [numeroProcesso, setNumeroProcesso] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [assunto, setAssunto] = useState('');


    const handleAutorChange = (event) => {
        setAutor(event.target.value);
    };

    const handleNumeroProcessoChange = (event) => {
        setNumeroProcesso(event.target.value);
    };

    const handleDataChange = (event) => {
        setData(event.target.value);
    };

    const handleHoraChange = (event) => {
        setHora(event.target.value);
    };

    const handleAssuntoChange = (event) => {
        setAssunto(event.target.value);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        const processo = new Processo(autor, numeroProcesso, data, hora, assunto)
        aoProcessoCadastrado(processo)
        setAutor('')
        setNumeroProcesso('')
        setData('')
        setHora('')
        setAssunto('')
    };

    return (
        <div className="form-container">
            <h2>Incluir Processo</h2>
            <form onSubmit={handleSubmit}>

                <CampoTexto
                    type="text"
                    label="Autor:"
                    id="autor"
                    value={autor}
                    onChange={handleAutorChange}
                />
                <CampoTexto
                    type="text"
                    label="Número do Processo:"
                    id="numero-processo"
                    value={numeroProcesso}
                    onChange={handleNumeroProcessoChange}
                />
                <CampoTexto
                    type="date"
                    label="Data:"
                    id="data"
                    value={data}
                    onChange={handleDataChange}
                />
                <CampoTexto
                    type="time"
                    label="Hora:"
                    id="hora"
                    value={hora}
                    onChange={handleHoraChange}
                />
                <CampoTexto
                    type="text"
                    label="Assunto:"
                    id="assunto"
                    value={assunto}
                    onChange={handleAssuntoChange}
                />

                <button type="submit">Incluir</button>
            </form>
        </div>
    );
}

export default Formulario;