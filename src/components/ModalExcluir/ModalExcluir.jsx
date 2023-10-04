import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ModalExcluir(props) {

    const navigation = useNavigate();

    const[produto, setProduto] = useState({
      id:"",
    });

    const handleChange = (e)=>{
      //Destructuring
      const {name,value} = e.target;
      //Inserir as propriedades no produto.
      setProduto({...produto,[name]:value});
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      
      fetch("http://localhost:5000/produtos",{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(produto)
      })
      .then((response)=> response.json())
      .then((response)=> console.log(response))
      .catch(error=> console.log(error));

      //Fechando o modal
      props.setOpen(false);
      navigation("/produtos");
    }


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
