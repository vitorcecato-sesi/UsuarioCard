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
              nome="Laura Betti Migliaccio"
              // Aqui estamos passando os hobbies como propriedade para o componente "Perfil"
              hobbies="Os meus hobbies são: Ouvir música e ver filmes/séries."
            />

            <Perfil 
              foto={fotoPerfilLucas} 
              nome="Lucas Casagrande da Silva" 
              hobbies="Os meus hobbies são: Praticar vôlei, jogar jogos online e assistir séries." 
            />

            <Perfil 
              foto={fotoPerfilMilena} 
              nome="Milena Oliveira Souza" 
              hobbies="Os meus hobbies são: Escutar música, ver filmes e séries, estudar matemática e cozinhar." 
            />
          </section>

          <section className="blocoCartas">
            <Perfil 
              foto={fotoPietro} 
              nome="@Pietro_Melle" 
              hobbies="Sou o Pietro Melle, tenho 16 anos e moro em Jundiaí. Adoro jogar com os meus amigos e andar de bicicleta. 🚴‍♀️" 
            />

            <Perfil 
              foto={fotoPyetro} 
              nome="@Pyetro_Joaquim" 
              hobbies="Sou o Pyetro Joaqueim, tenho 17 anos e moro em Valinhos. Gosto de cozinhar e jogar. 🎮" 
            />

            <Perfil 
              foto={fotoVitor} 
              nome="@Vitor_Geraldo" 
              hobbies="Sou o Vitor Geraldo, tenho 17 anos e moro em Valinhos. Adoro nadar, programar e jogar com os meus colegas. 🏊‍♂️" 
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
