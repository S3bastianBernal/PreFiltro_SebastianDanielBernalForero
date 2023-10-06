import axios from "axios";
import React, {useState,useEffect} from "react";
import { useHistory } from "react-router";
import { Button, Form } from "semantic-ui-react";
import "../form.css"



export function CreatePeli(){
    let history = useHistory();
    const [_id, setID] = useState(null);
    const [pelicula, setPelicula] = useState("");
    const [stock, setStock] = useState();
    const [precio, setPrecio] = useState();
    const [categoria, setCategoria] = useState("");

    const postData = () =>{
        if(pelicula === "" || categoria === "" || stock === "" || precio === "" || categoria === ""){
            return(
                <div>
                    Todos los Datos son requeridos
                </div>
            )
        }

        axios.post(`http://localhost:4000/api/post/peliculas`,{
            pelicula,stock:parseInt(stock),precio:parseFloat(precio),categoria
        }).then(()=>{
            history.push("/peliculas")
        })
    }

    return(
    <div className="centrar">
        <div className="form-container">
      <Form className="form">
        <div className="form-group">
          <label>Nombre Pelicula</label>
          <input type="text" required  placeholder="Pelicula" value={pelicula} onChange={(e)=>{setPelicula(e.target.value)}}></input>
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input type="number" required  placeholder="Stock" value={stock} onChange={(e)=>{setStock(e.target.value)}}></input>
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input type="number" required  placeholder="Precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></input>
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <input type="text" required placeholder="Categoria" value={categoria} onChange={(e)=>{setCategoria(e.target.value)}}></input>
        </div>
        <Button type="submit" className="form-submit-btn" onClick={postData} >Agregar</Button>
      </Form>
    </div>
    </div>
    
    )
}


export function CreateGame(){
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();
  const [plataforma, setPlataforma] = useState("");
  const [genero, setGenero] = useState("");
  const [clasificacion, setClasificacion] = useState("");

  const postData = () =>{
      if(nombre === "" || precio === "" || plataforma === "" || precio === "" || genero === "" || clasificacion === ""){
          return(
              <div>
                  Todos los Datos son requeridos
              </div>
          )
      }

      axios.post(`http://localhost:4000/api/post/videojuegos`,{
          nombre,precio:parseFloat(precio),plataforma,genero,clasificacion
      }).then(()=>{
          history.push("/videojuegos")
      })
  }

  return(
  <div className="centrar">
      <div className="form-container">
    <Form className="form">
      <div className="form-group">
        <label>Nombre Videojuego</label>
        <input type="text" required  placeholder="Videojuego" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Plataforma</label>
        <input type="text" required  placeholder="Plataforma" value={plataforma} onChange={(e)=>{setPlataforma(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input type="number" required  placeholder="Precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Genero del Videojuego</label>
        <input type="text" required placeholder="Genero" value={genero} onChange={(e)=>{setGenero(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Clasificacion del Videojuego</label>
        <input type="text" required placeholder="Clasificacion" value={clasificacion} onChange={(e)=>{setClasificacion(e.target.value)}}></input>
      </div>
      <Button type="submit" className="form-submit-btn" onClick={postData} >Agregar</Button>
    </Form>
  </div>
  </div>
  
  )
}

export function CreateConsola(){
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();
  const [modelo, setModelo] = useState("");
  const [almacenamiento, setAlmacenamiento] = useState("");
  const [año_fabricacion, setAñoFabricacion] = useState();

  const postData = () =>{
    if(nombre === "" || precio === "" || modelo === "" || precio === "" || almacenamiento === "" || año_fabricacion === ""){
        return(
            <div>
                Todos los Datos son requeridos
            </div>
        )
    }

    axios.post(`http://localhost:4000/api/post/consolas`,{
        nombre,precio:parseFloat(precio),modelo,almacenamiento,año_fabricacion
    }).then(()=>{
        history.push("/consolas")
    })
}

return(
  <div className="centrar">
      <div className="form-container">
    <Form className="form">
      <div className="form-group">
        <label>Nombre Consola</label>
        <input type="text" required  placeholder="Consola" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Modelo</label>
        <input type="text" required  placeholder="Modelo" value={modelo} onChange={(e)=>{setModelo(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input type="number" required  placeholder="Precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Almacenamiento de la Consola</label>
        <input type="text" required placeholder="Almacenamiento" value={almacenamiento} onChange={(e)=>{setAlmacenamiento(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Año de Creacion</label>
        <input type="number" required placeholder="Año Creacion" value={año_fabricacion} onChange={(e)=>{setAñoFabricacion(e.target.value)}}></input>
      </div>
      <Button type="submit" className="form-submit-btn" onClick={postData} >Agregar</Button>
    </Form>
  </div>
  </div>
  
  )
}


export function CreateClientes(){
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nit, setNit] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const postData = () =>{
    if(nombre === "" || apellido === "" || nit === "" || direccion === "" || telefono === "" ){
        return(
            <div>
                Todos los Datos son requeridos
            </div>
        )
    }

    axios.post(`http://localhost:4000/api/post/clientes`,{
        nombre,apellido,nit,direccion,telefono
    }).then(()=>{
        history.push("/clientes/159753")
    })
}

return(
  <div className="centrar">
      <div className="form-container">
    <Form className="form">
      <div className="form-group">
        <label>Nombre Cliente</label>
        <input type="text" required  placeholder="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Apellido Cliente</label>
        <input type="text" required  placeholder="Apellido" value={apellido} onChange={(e)=>{setApellido(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Nit Cliente</label>
        <input type="text" required  placeholder="Nit" value={nit} onChange={(e)=>{setNit(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Direccion del cliente</label>
        <input type="text" required placeholder="direccion" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}></input>
      </div>
      <div className="form-group">
        <label>Telefono del Cliente</label>
        <input type="text" required placeholder="Telefono" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
      </div>
      <Button type="submit" className="form-submit-btn" onClick={postData} >Agregar</Button>
    </Form>
  </div>
  </div>
  
  )
}

export function CreatePedido(){
  let history = useHistory();
  const [_id, setID] = useState(null);
  const [producto, setProducto] = useState("");
  const [cliente, setCliente] = useState("");
  const [total, setTotal] = useState(0);
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");

  const [APIData, setAPIData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:4000/api/pedidos/detalles')
        .then((response) =>{
            console.log(response.data);
            setAPIData(response.data);
        })
    },[]);

  const postData = () =>{
    if(producto === "" || cliente === "" || total === "" || fecha === "" || estado === "" ){
        return(
            <div>
                Todos los Datos son requeridos
            </div>
        )
    }

    axios.post(`http://localhost:4000/api/post/pedidos`,{
        producto,
        cliente,
        total:parseFloat(total),
        fecha,
        estado
    }).then(()=>{
        history.push("/pedidos")
    })
  }

  return(
    <div className="centrar">
        <div className="form-container">
      <Form className="form">
        <div className="form-group">
          <label>Nombre Producto</label>
          <select name="" id="" onChange={(e)=>{setProducto(e.target.value)}}>
          <option>Seleccione un Producto</option>
          {
            APIData.map((data)=>{
              return(
                <option value={data.producto}>{data.producto}</option>
              )
            })
          }
        </select>
        </div>
        <div className="form-group">
          <label>Nit del Cliente</label>
          <select name="" id="" onChange={(e)=>{setCliente(e.target.value)}}>
          <option>Seleccione un Cliente</option>
          {
            APIData.map((data)=>{
              return(
                <option value={data.Clientes[0].nit}>{data.Clientes[0].nit}</option>
              )
            })
          }
        </select>
        </div>
        <div className="form-group">
          <label>Precio Total</label>
          <input type="number" required  placeholder="Total" value={total} onChange={(e)=>{setTotal(e.target.value)}}></input>
        </div>
        <div className="form-group">
          <label>Fecha de Entrega</label>
          <input type="date" required placeholder="Fecha" value={fecha} onChange={(e)=>{setFecha(e.target.value)}}></input>
        </div>
        <div className="form-group">
          <label>Estado del Pedido</label>
          <input type="text" required placeholder="Estado" value={estado} onChange={(e)=>{setEstado(e.target.value)}}></input>
        </div>
        <Button type="submit" className="form-submit-btn" onClick={postData} >Agregar</Button>
      </Form>
    </div>
    </div>
    
    )
}