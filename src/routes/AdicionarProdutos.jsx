import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AdicionarProduto({ onAdicionarProduto }) {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nome.trim() !== '' && preco.trim() !== '' && descricao.trim() !== '') {
      const novoProduto = {
        id,
        nome,
        desc: descricao,
        preco: parseFloat(preco),
        img: 'https://picsum.photos/100/100',
      };

      onAdicionarProduto(novoProduto);

      setNome('');
      setPreco('');
      setDescricao('');
    }
  };

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição do Produto:</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço do Produto:</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AdicionarProduto;
