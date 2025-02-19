import './App.css'

// Componentes
  import UsuarioCard from "./components/UsuarioCard"
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
            <UsuarioCard
              // Aqui estamos passando a foto como propriedade para o componente "UsuarioCard"
              foto={fotoPerfilLauraB}
              // Aqui estamos passando o nome como propriedade para o componente "Perfil"
              nome="@Laura_betti"
              // Aqui estamos passando os hobbies como propriedade para o componente "Perfil"
              hobbies="Sou a Laura Betti, tenho 17 anos e moro em Louveira , gosto de ver series/filmes. 🎬"
            />

            <UsuarioCard
              foto={fotoPerfilLucas} 
              nome="@Lucas_casagrande" 
              hobbies="Sou o Lucas Casagrande, tenho 17 anos e moro em Vinhedo e adoro jogar volei e jogos online com meus amigos. 🏐" 
            />

            <UsuarioCard 
              foto={fotoPerfilMilena} 
              nome="@Milena_souza" 
              hobbies="Sou a Milena, tenho 16 anos e gosto de passar o tempo com meus amigos e famílias. 👨‍👩‍👧" 
            />
          </section>

          <section className="blocoCartas">
            <UsuarioCard 
              foto={fotoPietro} 
              nome="@Pietro_Melle" 
              hobbies="Sou o Pietro Melle, tenho 16 anos e moro em Jundiaí. Adoro jogar com os meus amigos e andar de bicicleta. 🚴‍♀️" 
            />

            <UsuarioCard
              foto={fotoPyetro} 
              nome="@Pyetro_Joaquim" 
              hobbies="Sou o Pyetro Joaquim, tenho 17 anos e moro em Valinhos. Gosto de cozinhar e jogar. 🎮" 
            />

            <UsuarioCard
              foto={fotoVitor} 
              nome="@Vitor_Geraldo" 
              hobbies="Sou o Vitor Geraldo, tenho 17 anos e moro em Valinhos. Amo nadar e programar. 🏊‍♂️" 
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
