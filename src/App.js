import './App.css';
import Formulario from './components/Formulario';
import Processo from './Models/Processo';
import Rodape from './components/Rodape';
import ProcessoComponent from './components/Processo';
import React, { useState } from 'react';


const processo1 = new Processo('Shelton Martins', '14412313213', '2023-08-31', '10:30', 'outros')
const processo2 = new Processo('Robervaldo Cebola', '66631552313213', '2023-02-30', '10:30', 'outros')
const processo3 = new Processo('Juliana Martins', '12312356513213', '2023-08-30', '10:30', 'outros')
const processo4 = new Processo('Cristiano Ronaldo', '12312345513213', '2023-08-31', '10:30', 'outros')
const processo5 = new Processo('Nylon Loja', '12312313213', '31-02-2023', '10:30', 'outros')



function processosDeHoje() {

  const dataAtual = new Date(); // Obter a data atual

  const dataFormatada = { dia: dataAtual.getDate(), mes: dataAtual.getMonth()+1, ano: dataAtual.getFullYear() }

  return dataFormatada;
}


function App() {

  const [processos, setProcessos] = useState([processo1, processo2, processo3, processo4, processo5])

  // setProcessos([...processos, processoInicial])

  const aoProcessoAdicionado = (processo) => {

    setProcessos([...processos, processo])

    console.log(processo)

  }

  const aoDeletarProcesso = () => {

    alert('voce conseguiu')

  }

  return (
    <div className="App">
      <div className='processos__Container'>
        <h2>Compromissos hoje</h2>
        {processos.map(proc => {
          if ((proc.exibeDia() == processosDeHoje().dia) && (proc.exibeMes() == processosDeHoje().mes)) {
            return <ProcessoComponent processo={proc} aoDeletar={() => aoDeletarProcesso()} />
          }
         
        }
        )}

        <div className="divisoria"></div>

        <h2>Compromissos amanhã</h2>
        {processos.map(proc => {
          if (proc.exibeDia() == processosDeHoje().dia+1) {
            return <ProcessoComponent processo={proc} aoDeletar={() => aoDeletarProcesso()} />
          }
        }
        )}
      </div>
      <Formulario aoProcessoCadastrado={processo => aoProcessoAdicionado(processo)}></Formulario>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
