
import reactLogo from '../assets/react.svg'
import Rodape from './Rodape'

export default function Secao(props) {
  let reactAlt = 'React Logo'

  return(
      <>
        <section>

        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quam a
            vel dolore! Eveniet nesciunt sit repudiandae voluptas, aspernatur
            reiciendis maiores cum neque assumenda fugit! Laboriosam, vitae veniam!
            Magni, doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aliquid
            illo sapiente assumenda quae odit, dolor officia provident magni enim
            perferendis molestias beatae. Nulla nisi nihil reprehenderit, aspernatur
            ducimus excepturi?
          </p>

          <img src={reactLogo} alt={reactAlt} />
          <img src={props.viteLogoProps} alt={props.viteAltProps} />

          <div>
            <h2>Lista de nomes</h2>
            <ul>
                {props.nomesProps.map((nome,indice) => (
                    <li key={indice}>{nome}</li>
                ))}
            </ul>
          </div>
        </div>
        </section>
      </>
  ) 
} 
