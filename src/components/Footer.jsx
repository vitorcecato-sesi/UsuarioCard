import './Footer.css'

function Footer(props) {

    return (
      <>
      <footer className="footer">

        <section className="informacoes-contatos">

            <section className='bloco-img1'>
            <img className='img' src={props.imagem1}/>
            <h3 className='email' >{props.email}</h3>
            </section>

            <section className='bloco-img2'>
            <img src={props.imagem2}/>
            <h3 className='instagram'>{props.instagram}</h3>
            </section>

        </section>

        <section className="informacao-resposavel" >
            <p>{props.texto}</p>
            <img className='imglogo' src={props.imglogo}/>
        </section>


      </footer>
        
      </>
    )
  }
  
  export default Footer