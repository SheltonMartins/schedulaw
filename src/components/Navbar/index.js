import React, { useState } from 'react';
import './navbar.css'; // Importe o arquivo CSS de estilo

const Navbar = ({ aoBuscaProcessos }) => {

  const [busca, setBusca] = useState('')

  function aoDigitar(evento) {

    setBusca(evento.target.value)

    aoBuscaProcessos(evento.target.value)

  }

  return (
    <nav className="navbar">
      <div className="navbar-title">Schedulaw<span>Sua agenda de compromissos jurídicos.</span></div>
      <div className="navbar-search">
        <input value={busca} onChange={aoDigitar} type="text" placeholder="Buscar" list="sugestoes"/>
        <datalist id="sugestoes">
          <option value="ok"></option>
        </datalist>
        <button>Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;