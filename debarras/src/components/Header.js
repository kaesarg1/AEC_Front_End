import React from "react"; 
import {Nav,Navbar} from "react-bootstrap" ;
import {NavLink} from 'react-router-dom' ;

import {Link} from 'react-router-dom';



export class Header extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {  }
    }
render() { 
const activeStyle = {fontWeight: "bold",color: "red"};

return ( 
        

                <Navbar className='color-nav' expand='md'> 
                <Link exact='true' to="/Accueil"><Navbar.Brand >
                    {props =>( 
                        <div className='title' style={props}>
                        
                        <h1>Débarras</h1>
                        
                        </div>
                    )}
                    </Navbar.Brand> </Link>
                
                <Nav className="ml-auto"> 
                    <NavLink to="/Accueil"  activeStyle={activeStyle}>Accueil</NavLink>      
                    <NavLink to="/Ajout"  activeStyle={activeStyle}>Ajouter</NavLink> 
                </Nav> 
        
                </Navbar>      
          
       
                );
                    }
}