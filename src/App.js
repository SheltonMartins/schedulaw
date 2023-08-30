import './App.css';
import Formulario from './components/Formulario';
import Processo from './Models/Processo';
import Rodape from './components/Rodape';
import ProcessoComponent from './components/Processo';
import React, { useState } from 'react';


const processo1 = new Processo('Shelton Martinsll', '14412313213', '2023-08-31', '10:30', 'outros')
const processo2 = new Processo('Robervaldo Cebola', '666315523113', '2023-08-30', '10:30', 'outros')
const processo3 = new Processo('Juliana Martinsll', '123123565113', '2023-08-30', '15:30', 'outros')
const processo4 = new Processo('Cristiano Ronaldo', '123123455113', '2023-08-31', '10:30', 'outros')
const processo5 = new Processo('Nylon Lojalllllll', '123123132134', '31-02-2023', '10:30', 'outros')



function App() {

  function processosDeHoje(args) {
    const dataAtual = new Date(); // Obter a data atual
    const dataFormatada = { dia: dataAtual.getDate(), mes: dataAtual.getMonth() + 1, ano: dataAtual.getFullYear() }
    if ((args.exibeDia() == dataFormatada.dia) && (args.exibeMes() == dataFormatada.mes) && (args.exibeAno() == dataFormatada.ano)) {
      return true
    }
    return false
  }

  function processosDeAmanha(args) {
    const dataAtual = new Date(); // Obter a data atual
    const dataFormatada = { dia: dataAtual.getDate(), mes: dataAtual.getMonth() + 1, ano: dataAtual.getFullYear() }
    if ((args.exibeDia() - 1 == dataFormatada.dia) && (args.exibeMes() == dataFormatada.mes) && (args.exibeAno() == dataFormatada.ano)) {
      return true
    }else if((args.exibeDia() == '1') && (args.exibeMes() - 1 == dataFormatada.mes) && (args.exibeAno() == dataFormatada.ano)){
      return true
    }
    return false
  }

  const [processos, setProcessos] = useState([processo1, processo2, processo3, processo4, processo5])



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
          if (processosDeHoje(proc)) {
            return <ProcessoComponent key={proc.numeroProcesso} processo={proc} aoDeletar={() => aoDeletarProcesso()} />
          }

        }
        )}

        <div className="divisoria"></div>

        <h2>Compromissos amanhã</h2>
        {processos.map(proc => {
          if (processosDeAmanha(proc)) {
            return <ProcessoComponent key={proc.numeroProcesso} processo={proc} aoDeletar={() => aoDeletarProcesso()} />
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
