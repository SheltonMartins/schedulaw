import './ProcessoComponent.css'


const ProcessoComponent = ({ processo }) => {
    return (
        <div className="processo__container">
            
            <h2>Processo Nº {processo.numeroProcesso}</h2>
            <div className="processo__items">
                <div>
                    <h3>Autor</h3>
                    <label>{processo.autor}</label>
                </div>
                <div>
                    <h3>Assunto</h3>
                    <label>{processo.assunto}</label>
                </div>
                <div>
                    <h3>Horário da Audiência</h3>
                    <label>{processo.hora}</label>
                </div>
                <div>
                    <h3>Data  </h3>
                    <label>{processo.exibeDia()}/{processo.exibeMes()}/{processo.exibeAno()}</label>
                </div>
            </div>
        </div>
    );
};

export default ProcessoComponent;