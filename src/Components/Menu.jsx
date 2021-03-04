import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {auth} from '../firebaseConfig'

function Menu() {
    const history = useHistory()
    const [estado,setEstado]=useState(null)
    const [user,setUser]=useState(null)
    useEffect(() =>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setEstado(user.email)
                setUser(user)
                console.log(user.email)
            }
        })
    },[])//se pone un array vacio para que no se genere un loop infinito sino estara buscando a cada rato
    const CerrarSession=() =>{
        auth.signOut()
        setEstado(null)
        history.push("/Login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">FapCod</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            { 
                            !estado ?
                            (<Link to="/Login" className="nav-link active" >Login</Link>
                            )
                            :
                            ( <div></div> )
                            }
                        </li>
                        <li className="nav-item">
                            { 
                            !estado ?
                            (<Link to="/Registrar" className="nav-link active" >Registrar</Link>
                            )
                            :
                            ( <div></div> )
                            }
                        </li>
                        <li className="nav-item">

                            { 
                            user !== null ?
                          
                            (<Link to="/Admin" className="nav-link active" >Admin</Link>
                            )
                            :
                            ( <div></div> )
                            }
                        
                        </li>
                    </ul>
                    </div>
                </div>
                { 
                        estado ?
                        (<button onClick={CerrarSession} className="btn btn-outline-success ">Salir</button>
                           )
                        :
                        ( <div></div> )
                }
            </nav>
        </div>
    )
}

export default Menu
