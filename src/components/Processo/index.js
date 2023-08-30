import './ProcessoComponent.css'


const ProcessoComponent = ({ processo, aoDeletar }) => {
    return (
        <div className="processo__container">
            
            <h2>Processo Nº {processo.numeroProcesso}</h2>
            {/* <div className='botao__Deletar' onClick={aoDeletar}>DELETAR</div> */}
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
                    <h3>Data Audiência </h3>
                    <label>{processo.data}</label>
                </div>
                <div>
                    <h3>Hora</h3>
                    <label>{processo.hora}</label>
                </div>
            </div>
        </div>
    );
};

export default ProcessoComponent;