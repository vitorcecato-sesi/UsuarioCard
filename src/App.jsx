import './App.css'

// Componentes
  import Perfil from "./components/Perfis"
  import Header from "./components/Header"
  import Valores from "./components/aside"
  import Footer from "./components/Footer"
//.

// Fotos
  import fotoPerfilLauraB from "./assets/fotoUsuarioLauraB.png"
  import fotoPerfilLucas from "./assets/fotoUsuarioLucas.png"
  import fotoPerfilMilena from "./assets/fotoUsuarioMilena.png"
  import fotoPietro from "./assets/fotoUsuarioPietroM.png"
  import fotoPyetro from "./assets/fotoUsuarioPyetro.png"
  import fotoVitor from "./assets/fotoUsuarioVitorG.png"
//.

// Fotos Footer
  import foto from "./assets/gmail.png"
  import foto2 from "./assets/instagram.png"
  import logo from "./assets/logoG3.png"
//.

function App() {

  return (
    <>
      <Header/>
      <section className="meioPagina">
        <main className="elementosCartas">
          <section className="blocoCartas">
            <Perfil
              // Aqui estamos passando a foto como propriedade para o componente "Perfil"
              foto={fotoPerfilLauraB}
              // Aqui estamos passando o nome como propriedade para o componente "Perfil"
              nome="@laura_betti"
              // Aqui estamos passando os hobbies como propriedade para o componente "Perfil"
              hobbies="Sou a Laura Betti , tenho 17 anos e moro em Louveira , gosto de ver series/filmes. 🎬"
            />

            <Perfil 
              foto={fotoPerfilLucas} 
              nome="@lucas_casagrande" 
              hobbies="Sou o Lucas Casagrande ,tenho 17 anos e moro em Vinhedo e adoro jogar volei e jogos online com meu amigos. 🏐" 
            />

            <Perfil 
              foto={fotoPerfilMilena} 
              nome="@milena_souza" 
              hobbies="Sou a Milena , tenho 16 anos e gosto de passar o tempo com meus amigos e famílias. 👨‍👩‍👧" 
            />
          </section>

          <section className="blocoCartas">
            <Perfil 
              foto={fotoPietro} 
              nome="Pietro Melle Michelin" 
              hobbies="Os meus hobbies são: Praticar esportes" 
            />

            <Perfil 
              foto={fotoPyetro} 
              nome="Pyetro Joaquim Taborda Nunes" 
              hobbies="Os meus hobbies são: Jogar jogos online, ouvir música e cozinhar" 
            />

            <Perfil 
              foto={fotoVitor} 
              nome="Vitor Geraldo Cecato" 
              hobbies="Meus hobbies são: jogar jogos online, programar e nadar." 
            />
          </section>
        </main>
        <Valores  valor1="União" valor2="Honestidade" valor3="Comprometimento"/>
      </section>
      <Footer 
        imagem1={foto} 
        imagem2={foto2} 
        email="vitor.cecatosesi@gmail.com" 
        instagram="@vitorgcecato"
        texto="O Vitor Geraldo Cecato é o responsável pelo projeto PROPS, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo." 
        imglogo={logo}
      />
    </>
  )
}

export default App
