import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import AdicionarProduto from "./AdicionarProdutos";

export default function Produtos() {
  const [produtos, setProdutos] = useState(ListaProdutos);

  const adicionarProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
    console.log(produtos);
  };

  return (
    <div>
      <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
      <p>Os Melhores Produtos do Mercado</p>

      <AdicionarProduto onAdicionarProduto={adicionarProduto}/>

      <table className={classes.estilo}>
        <thead className={classes.tableHeaders}>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>IMAGEM</th>
            <th>EDITAR</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className={classes.tableLine}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td>
                <img src={produto.img} alt={produto.desc} />
              </td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}>
                  <Editar />
                </Link>{" "}
                |{" "}
                <Link to={`/excluir/produtos/${produto.id}`}>
                  <Excluir />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className={classes.tableFooter}>
          <tr>
            <td colSpan={6}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

