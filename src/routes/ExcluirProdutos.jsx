
import { useNavigate, useParams } from "react-router-dom";
import style from "./ExcluirProdutos.module.css";
import { useState } from "react";

export default function ExcluirProdutos() {
  document.title = "Excluir Produtos";

  const navigate = useNavigate();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    // Buscar as informações do produto com base no id
    fetch(`http://localhost:5000/produtos/${id}`)
      .then((response) => {
        if (!response.ok) {
          // Se a resposta não for bem-sucedida, trata como erro
          throw new Error("Produto não encontrado");
        }
        return response.json();
      })
      .then((data) => setProduto(data))
      .catch((error) => {
        console.error(error);
        navigate("/produtos"); // Redirecionar para a lista de produtos se o produto não for encontrado
      });
  }, [id, navigate]);

  const handleDelete = () => {
    setIsModalOpen(true);
  };


  return (
    <>
      <div>
        <h1>Excluir Produtos</h1>
        
        <div className={style.card}>
            <h2>Produto Selecionado</h2>
            <figure>
                <img src={produto.img} alt={produto.desc} title={produto.desc}/>
                <figcaption>{produto.nome} - <span>R$ </span>{produto.preco}</figcaption>
            </figure>
            <div className={style.btn}>
                <button onClick={handleDelete}>EXCLUIR</button>
                <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
            </div>
        </div>

      </div>

      {isModalOpen && <ModalExcluir setOpen={setIsModalOpen} />}
    </>
  );
}
