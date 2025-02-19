import "./Aside.css"

function Valores(props) {
    return(
        <div className="lado">    
            <h1>Valores</h1>
            <ul>
                <li>{props.valor1}</li>    
                <li>{props.valor2}</li>   
                <li>{props.valor3}</li>    
            </ul> 
        </div>  
    )
}
export default Valores