import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalExcluir.scss";

export default function ModalExcluir(props) {
  const navigation = useNavigate();
  const [idToDelete, setIdToDelete] = useState(""); // Estado para acompanhar o ID do produto a ser excluído.

  const handleDelete = () => {
    // Faça uma solicitação DELETE para o servidor com o ID a ser excluído.
    fetch(`http://localhost:5000/produtos/${idToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response); // Verifique a resposta do servidor (pode ser uma mensagem de sucesso).
        props.setOpen(false);
        navigation("/produtos");
      })
      .catch((error) => console.error(error));
  };


  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>EXCLUSÂO DE PRODUTOS</h1>

        <div>
          <form className="formGroup" onSubmit={handleSubmit}>
            <fieldset>
        <span  className="btnClose" onClick={()=> props.setOpen(false)}>X</span>
             
                <button>EXCLUIR</button>
            </fieldset>
          </form>
        </div>

      </div>
    );
  }
}
