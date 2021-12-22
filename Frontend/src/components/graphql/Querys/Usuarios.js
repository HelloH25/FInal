import {
    useQuery,
    gql,
    useMutation
} from "@apollo/client";
import React from "react";


const USERS = gql`
    query{
        Users{
            correo
            _id
            identificacion
            nombre
            apellido
            rol
            estado   
        }
    }    
`
const AUTORIZARUSUARIOS = gql`
mutation approveUser($id: String) {
    approveUser(_id: $id)
  }
`


const ConsultarUsuarios = () => {
    const { loading, error, data } = useQuery(USERS);
    const [autorizarUsuarios] = useMutation(AUTORIZARUSUARIOS)

    
    if (loading) return <p>loading...</p>
    const dataTable = data.Users.map(({ nombre, apellido, correo, identificacion, rol, estado, _id }) => (

        <tr key={correo}>
            <td>{nombre} {apellido}</td>
            <td>{correo}</td>
            <td>{identificacion}</td>
            <td>{rol}</td>
            <td>{estado}</td>
            <td>{_id}</td>
            <td>
                <button onClick={(e) => {
                    e.preventDefault()
                    autorizarUsuarios({
                        variables: {
                            id: _id
                        }
                    })

                }}>done</button>
            </td>


        </tr>

    ))
    return <table>
        <thead>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Identificacion</th>
            <th>Rol</th>
            <th>Estado</th>
        </thead>
        <tbody>
            {dataTable}
        </tbody>

    </table>
}



export default ConsultarUsuarios
