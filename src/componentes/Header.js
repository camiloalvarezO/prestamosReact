import React,{Fragment} from "react";

function Header(props){

    console.log(props);
    return(
        <Fragment>
        <h1>Hola Mundo</h1>
        <p>{props.Titulo}</p>
        </Fragment>
    )
}
//  const Header = ({Titulo}) =><h1>{Titulo}</h1>;



export default Header;
