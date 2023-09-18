import React from 'react';
import {useState} from 'react';

function AdicionarProdutos() {

  //Inicializando a lista e o valor do input vazios
  const [itens, setItens] = useState([])
  const [novoItem, setNovoItem] = useState('') 

  //Adicionando itens à lista
  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      setItens([...itens, novoItem])
      setNovoItem('')
    }
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
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

export default AdicionarProdutos;
