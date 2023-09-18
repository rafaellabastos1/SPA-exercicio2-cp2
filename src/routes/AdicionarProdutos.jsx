import React, { useState } from 'react';

function MeuComponente() {
  const [itens, setItens] = useState([]); // Inicializa uma lista vazia
  const [novoItem, setNovoItem] = useState(''); // Inicializa o valor do input vazio

  // Função para lidar com a adição de um novo item à lista
  const adicionarItem = () => {
    if (novoItem.trim() !== '') { // Verifica se o valor não está em branco
      setItens([...itens, novoItem]); // Adiciona o novo item à lista
      setNovoItem(''); // Limpa o valor do input
    }
  };

  return (
    <div>
      <h1>Minha Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <div>
              <strong>{produto.nome}</strong>
            </div>
            <div>Preço: R$ {produto.preco.toFixed(2)}</div>
            <div>Descrição: {produto.descricao}</div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>
    </div>
  );
}

export default MeuComponente;
