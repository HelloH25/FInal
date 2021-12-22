import { useMutation, gql } from "@apollo/client"
import { useNavigate } from "react-router"


const REGISTROUSUARIO = gql`
mutation CreateUser($nom:String, $cor:String!, $iden:String, $rol:String, $estado:String, $apellido:String) {
    createUser(input:{nombre:$nom, apellido:$apellido, correo:$cor, identificacion:$iden, rol:$rol, estado:$estado }) 
}
`
const Registration = () => {

    const navigate = useNavigate()

    const [registroUsuario] = useMutation(REGISTROUSUARIO)


    let nuevoUsuario = {
        nombre: "",
        correo: "",
        apellido: "",
        identificacion: "",
        rol: "",
        estado: ""
    }
    // const registro = async(e) =>{
    //     e.preventDefault()
    const registrarUse = (e) => {
        e.preventDefault()
        registroUsuario({
            variables: {
                nom: nuevoUsuario.nombre.value,
                apellido: nuevoUsuario.apellido.value,
                cor: nuevoUsuario.correo.value,
                iden: nuevoUsuario.identificacion.value,
                rol: nuevoUsuario.rol.value,


            }
        })

       navigate("/")
    }

    return (
        <div>
            <h3>registro</h3>
            <form >
                <div>
                    <label>Nombre</label>
                    <input ref={node => { nuevoUsuario.nombre = node }} placeholder="nombre" />
                    <label>Apellido</label>
                    <input ref={node => { nuevoUsuario.apellido = node }} placeholder="apellido" />
                </div>
                <div>
                    <label>Correo</label>
                    <input ref={node => { nuevoUsuario.correo = node }} placeholder="correo" />
                </div>
                <div>
                    <label>Identificacion</label>
                    <input ref={node => { nuevoUsuario.identificacion = node }} placeholder="identificacion" />
                </div>

                <div >
                    <label>rol</label>
                    <select ref={val => nuevoUsuario.rol = val}>
                        <option></option>
                        <option value="Lider">Lider</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Estudiante">Estudiante</option>
                    </select>
                </div>

                <button type="submit" onClick={registrarUse}>Registrar</button>

            </form>
        </div>
    )
}

export default Registration