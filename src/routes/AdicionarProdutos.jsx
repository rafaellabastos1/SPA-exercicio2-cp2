import React, { useState } from 'react';


function AdicionarProduto({ onAdicionarProduto, produtos }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [novoProdutoId, setNovoProdutoId] = useState(produtos.length + 1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nome.trim() !== '' && preco.trim() !== '' && descricao.trim() !== '') {
      const novoProduto = {
        id: novoProdutoId,
        nome,
        desc: descricao,
        preco: parseFloat(preco),
        img: 'https://picsum.photos/100/100',
      };

      onAdicionarProduto(novoProduto);

      setNovoProdutoId(novoProdutoId + 1);
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
