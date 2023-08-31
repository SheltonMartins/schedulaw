import React from 'react';
import './resultadoBusca.css'; // Importe o arquivo CSS de estilo
import ProcessoComponent from '../Processo';

const ResultadosBusca = ({ resultados, aoFechar }) => {
    return (
        <div className="resultados-busca">
            <button className="fechar" onClick={aoFechar}>Fechar</button>
            <h4>Resultados da busca:</h4>
            <div class="resultado-item">
                <ProcessoComponent key={resultados.numeroProcesso} processo={resultados} />
            </div>
        </div>
    );
};

export default ResultadosBusca;