import './App.css';
import Formulario from './components/Formulario';
import Processo from './Models/Processo';
import Rodape from './components/Rodape';
import ProcessoComponent from './components/Processo';
import React, { useState } from 'react';
import Navbar from './components/Navbar';


function dataDeHoje() {
  const dataAtual = new Date(); // Obter a data atual
  const dataFormatada = { dia: dataAtual.getDate(), mes: dataAtual.getMonth() + 1, ano: dataAtual.getFullYear() , amanha: dataAtual.getDate()+1}
  return dataFormatada
}

const processo1 = new Processo('Fulano Da Silva', '123456789', '2023-'+dataDeHoje().mes +'-'+ dataDeHoje().dia , '10:30', 'outros')
const processo2 = new Processo('Nile Ciclano', '321654987', '2023-'+dataDeHoje().mes+'-'+dataDeHoje().amanha, '10:30', 'outros')
const processo3 = new Processo('Cleo de Sá', '121212121212', '2023-'+dataDeHoje().mes +'-'+ dataDeHoje().dia , '10:30', 'outros')
const processo4 = new Processo('Robervaldo Cebola', '1111111111', '2023-'+dataDeHoje().mes+'-'+dataDeHoje().amanha, '10:30', 'outros')
const processo5 = new Processo('Ronaldo Nazario', '99999999999', '2023-'+dataDeHoje().mes+'-'+dataDeHoje().amanha, '10:30', 'outros')



function App() {
  const [processos, setProcessos] = useState([processo1, processo2, processo3, processo4, processo5])
  const [processosResultado, setProcessosResultado] = useState([])

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
    } else if ((args.exibeDia() == '1') && (args.exibeMes() - 1 == dataFormatada.mes) && (args.exibeAno() == dataFormatada.ano)) {
      return true
    }
    return false
  }

  const aoProcessoAdicionado = (processo) => {

    setProcessos([...processos, processo])

    console.log(processo)

  }

  const aoDeletarProcesso = () => {

    alert('voce conseguiu')

  }

  function buscarProcesso(processosBuscados) {
    console.log(processosBuscados)
  }

  return (
    <div className="App">
      <Navbar 
        aoBuscaProcessos={processos => buscarProcesso(processos)} 
        //parei aqui
      />
      <div className='processos__Container'>
        <h2>Todos de hoje</h2>
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
