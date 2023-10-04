import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalExcluir.scss";

export default function ModalExcluir(props) {
  const navigation = useNavigate();
  const [idToDelete, setIdToDelete] = useState("");

  const handleDelete = () => {
    //ID que vai ser removido
    fetch(`http://localhost:5000/produtos/${idToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        props.setOpen(false);
        navigation("/produtos");
      })
      .catch((error) => console.error(error));
  };

  if (props.open) {
    return (
       <div className="modal-containerExcluir"> 
        <div>
          <form className="formGroupExcluir" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <span className="btnCloseExcluir" onClick={() => props.setOpen(false)}>X</span>
              <label htmlFor="idToDelete">ID do Produto a Excluir:</label>
              <input
                type="text"
                id="idToDelete"
                name="idToDelete"
                value={idToDelete}
                onChange={(e) => setIdToDelete(e.target.value)}
                className="input-fieldExcluir"
              />
              <button onClick={handleDelete} className="delete-button">EXCLUIR</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}