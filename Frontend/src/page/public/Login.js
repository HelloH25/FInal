import { useMutation, gql } from "@apollo/client"

import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const his = useNavigate();
    let user, clave;
    const [pass, setPass] = useState("")
    const AUTENTICAR_USUARIO = gql`
    mutation Authorization($correo: String, $clave: String) {
        authorization(correo: $correo, clave: $clave) {
          jwt
          status
        }
      }
      
    `
    
    const [auth] = useMutation(AUTENTICAR_USUARIO)
    const autenticar = async (e) => {
        e.preventDefault();

        const { data: { authorization } } = await auth({
            variables: {
                correo: user.value,
                clave: clave.value
            }
        })
        if (authorization.status != 200) {
            alert("Usuario y/o contrasena invalida")
        } else {
            localStorage.setItem('auth_token', autenticar.jwt)
            his("/Proyectos")
        }
    }
    const registroUsuarioNuevo = () => {
        his("/Registro")
    }
    return <div>
        <form>
            <h3>Autenticar</h3>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email" id="username" ref={u => user = u} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" ref={node => clave = node}/>

            <button className="btn btn-primary" onClick={autenticar}>Log In</button>

            <button className="btn btn-primary" onClick={registroUsuarioNuevo}>Registro Usuario Nuevo</button>
        </form>
    </div>
}

export default Login