import "./Perfis.css" //Importa o css do perfil para estilizar

function perfil (props) { //Função que ao ser chamada vai inserir o modelo do perfil na página.
    return (
        <>
        <section className="blocoPerfil">  {/*Section responsável por organizar os itens dentro dela*/}
        <img className="fotoPerfil" src={props.foto}></img> {/*Imagem com props para ser manipulada no app.jsx (isso permite que essa img seja qualquer uma.)*/}
        <section className="blocoTextos"> {/*Section responsável por organizar os textos.*/}
        <h3 className="nome">{props.nome}</h3> {/*H3 com props, o nome do usuário (o nome pode ser alterado no app.jsx)*/}
        <p className="hobbies">{props.hobbies}</p> {/*p com props, os hobbies (os hobbies pode ser alterado no app.jsx)*/}
        </section>
        </section>

        </>
    )

}

export default perfil //Exporta o componente para ele ser usado em outros arquivos.