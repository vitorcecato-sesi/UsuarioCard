import "./UsuarioCard.css" //Importa o css do perfil para estilizar
import { useState } from "react";

function perfil (props) { //Função que ao ser chamada vai inserir o modelo do perfil na página.

    const [seguindo, setSeguindo] = useState("Seguir")  // Inicia a variável seguindo como "Seguir"

    function seguir(){
        if (seguindo === "Seguir"){
            setSeguindo("Seguindo") // Alterar o estado do botão para seguindo
        }
        else {
            setSeguindo("Seguir")   // Alterar o estado do botão para seguir
        }
    }

    return (
        <>
        <section className="blocoPerfil">  {/*Section responsável por organizar os itens dentro dela*/}
            <img className="fotoPerfil" src={props.foto}></img> {/*Imagem com props para ser manipulada no app.jsx (isso permite que essa img seja qualquer uma.)*/}
            <section className="blocoTextos"> {/*Section responsável por organizar os textos.*/}
                <h3 className="nome">{props.nome}</h3> {/*H3 com props, o nome do usuário (o nome pode ser alterado no app.jsx)*/}
                <p className="descricao">{props.descricao}</p> {/*p com props, os hobbies (os hobbies pode ser alterado no app.jsx)*/}
                <button onClick={seguir} className={seguindo} >{seguindo}</button> {/* Botão para realizar a ação de seguir ou deixar de seguir */}
            </section>
        </section>

        </>
    )

}

export default perfil //Exporta o componente para ele ser usado em outros arquivos.