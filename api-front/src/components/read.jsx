import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {Button} from "semantic-ui-react"
import {Link} from "react-router-dom"
import Videos from "../assets/video.svg"
import game from "../assets/game.svg"
import person from "../assets/person.svg"
import "../Peliculas.css"
import Boton from '../assets/btn';

export function ReadPelis(){
    const [APIData, setAPIData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:4000/api/peliculas')
        .then((response) =>{
            console.log(response.data);
            setAPIData(response.data);
        })
    },[]);

    const setData = (data) =>{
        let {_id, pelicula, stock, precio, categoria } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('NOMBRE', pelicula);
        localStorage.setItem('STOCK', stock);
        localStorage.setItem('PRECIO', precio);
        localStorage.setItem('CATEGORIA', categoria);
    }

    const getData = () =>{
        axios.get('http://localhost:4000/api/peliculas')
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const  onDelete = (_id) =>{
        axios.delete(`http://localhost:4000/api/delete/peliculas/${_id}`)
        .then(()=>{
            getData();
        })
        window.location.href = "http://localhost:3000/peliculas";
    };

    return(
        <div className='todo'>
            <Link to={"/createPeli"}>
                <Boton></Boton>
            </Link>
        <div className='container'>
            {
                APIData.map((data)=>{
                    return(

                        <div className="card">
                        <div className="card-img"><div className="img"><img src={Videos} alt='flim'/></div></div>
                        <div className="card-title">{data.pelicula}</div>
                        <div className="card-subtitle">{data.categoria}</div>
                        <hr className="card-divider"></hr>
                        <div className="card-footer">
                        <div className="card-price"><span>$</span>{data.precio}</div>
                        <div className='btns'>
                        <Link>
                            <Button className='card-btn' onClick={()=>onDelete(data._id)}>Eliminar</Button>
                        </Link>
                            
                        <Link to="/updatePelis">
                            <Button className='card-btn' onClick={()=>setData(data)}>Actualizar</Button>
                        </Link>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}                               

export function ReadVidejuegos(){
    const [APIData, setAPIData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:4000/api/videojuegos')
        .then((response) =>{
            console.log(response.data);
            setAPIData(response.data);
        })
    },[]);

    const setData = (data) =>{
        let {_id, nombre, plataforma, precio, genero, clasificacion } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('NOMBRE', nombre);
        localStorage.setItem('PLATAFORMA', plataforma);
        localStorage.setItem('PRECIO', precio);
        localStorage.setItem('GENERO', genero);
        localStorage.setItem('CLASIFICACION', clasificacion);
    }

    const getData = () =>{
        axios.get('http://localhost:4000/api/videojuegos')
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const  onDelete = (_id) =>{
        axios.delete(`http://localhost:4000/api/delete/videojuegos/${_id}`)
        .then(()=>{
            getData();
        })
        window.location.href = "http://localhost:3000/videojuegos";
    };

    return(
        <div className='todo'>
        <Link to={"/createGame"}>
                <Boton></Boton>
            </Link>
        <div className='container'>
            
            
            {
                APIData.map((data)=>{
                    return(

                        <div className="card">
                        <div className="card-img"><div className="img"><img src={game} alt='flim'/></div></div>
                        <div className="card-title">{data.nombre}</div>
                        <div className="card-subtitle">{data.plataforma} // {data.genero}</div>
                        <hr className="card-divider"></hr>
                        <div className="card-footer">
                            Clasificacion: {data.clasificacion}
                        <div className="card-price">
                            <span>$</span>{data.precio}</div>
                        <div className='btns'>
                        <Link>
                            <Button className='card-btn' onClick={()=>onDelete(data._id)}>Eliminar</Button>
                        </Link>
                            
                        <Link to="/updateGames">
                            <Button className='card-btn' onClick={()=>setData(data)}>Actualizar</Button>
                        </Link>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}


export function ReadConsolas(){
    const [APIData, setAPIData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:4000/api/consolas')
        .then((response) =>{
            console.log(response.data);
            setAPIData(response.data);
        })
    },[]);

    const setData = (data) =>{
        let {_id, nombre, modelo, precio, almacenamiento, año_fabricacion } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('NOMBRE', nombre);
        localStorage.setItem('MODELO', modelo);
        localStorage.setItem('PRECIO', precio);
        localStorage.setItem('ALMACENAMIENTO', almacenamiento);
        localStorage.setItem('AÑOFABRI', año_fabricacion);
    }

    const getData = () =>{
        axios.get('http://localhost:4000/api/consolas')
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const  onDelete = (_id) =>{
        axios.delete(`http://localhost:4000/api/delete/consolas/${_id}`)
        .then(()=>{
            getData();
        })
        window.location.href = "http://localhost:3000/consolas";
    };

    return(
        <div className='todo'>
        <Link to={"/createConsola"}>
                <Boton></Boton>
            </Link>
        <div className='container'>
            
            
            {
                APIData.map((data)=>{
                    return(

                        <div className="card">
                        <div className="card-img"><div className="img"><img src="https://cdn-icons-png.flaticon.com/512/3205/3205299.png" alt='flim'/></div></div>
                        <div className="card-title">{data.nombre}</div>
                        <div className="card-subtitle">{data.modelo} // {data.almacenamiento}</div>
                        <hr className="card-divider"></hr>
                        <div className="card-footer">
                           {data.año_fabricacion}
                        <div className="card-price">
                            <span>$</span>{data.precio}</div>
                        <div className='btns'>
                        <Link>
                            <Button className='card-btn' onClick={()=>onDelete(data._id)}>Eliminar</Button>
                        </Link>
                            
                        <Link to="/updateConsolas">
                            <Button className='card-btn' onClick={()=>setData(data)}>Actualizar</Button>
                        </Link>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export function ReadClientes() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:4000/api/clientes')
        .then((response) =>{
            console.log(response.data);
            setAPIData(response.data);
        })
    },[]);

    const setData = (data) =>{
        let {_id, nombre, apellido, nit, direccion, telefono } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('NOMBRE', nombre);
        localStorage.setItem('APELLIDO', apellido);
        localStorage.setItem('NIT', nit);
        localStorage.setItem('DIRECCION', direccion);
        localStorage.setItem('TELEFONO', telefono);
    }

    const getData = () =>{
        axios.get('http://localhost:4000/api/clientes')
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const  onDelete = (_id) =>{
        axios.delete(`http://localhost:4000/api/delete/clientes/${_id}`)
        .then(()=>{
            getData();
        })
        window.location.href = "http://localhost:3000/clientes";
    };

    return(
        <div className='todo'>
        <Link to={"/createCliente"}>
                <Boton></Boton>
            </Link>
        <div className='container'>
            
            
            {
                APIData.map((data)=>{
                    return(

                        <div className="card">
                        <div className="card-img"><div className="img"><img src={person} alt='flim'/></div></div>
                        <div className="card-title">{data.nombre} {data.apellido}</div>
                        <div className="card-subtitle"> Nit:  {data.nit}</div>
                        <hr className="card-divider"></hr>
                        <div className="card-footer">
                            {data.direccion}
                        <div className="card-price">
                            {data.telefono}</div>
                        <div className='btns'>
                        <Link>
                            <Button className='card-btn' onClick={()=>onDelete(data._id)}>Eliminar</Button>
                        </Link>
                            
                        <Link to="/updateClientes">
                            <Button className='card-btn' onClick={()=>setData(data)}>Actualizar</Button>
                        </Link>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )


    
}


export function ReadPedidios(){
    const [APIData, setAPIData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:4000/api/pedidos/detalles')
        .then((response) =>{
            console.log(response.data);
            setAPIData(response.data);
        })
    },[]);

    const setData = (data) =>{
        let {_id, producto, cliente, total, fecha, estado } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('PRODUCTO', producto);
        localStorage.setItem('CLIENTE', cliente);
        localStorage.setItem('TOTAL', total);
        localStorage.setItem('FECHA', fecha);
        localStorage.setItem('ESTADO', estado);
    }

    const getData = () =>{
        axios.get('http://localhost:4000/api/pedidos/detalles')
        .then((getData) =>{
            setAPIData(getData.data)
        })
    };

    const  onDelete = (_id) =>{
        axios.delete(`http://localhost:4000/api/delete/pedidos/${_id}`)
        .then(()=>{
            getData();
        })
        window.location.href = "http://localhost:3000/pedidos";
    };

    return(
        <div className='todo'>
        <Link to={"/createPedido"}>
                <Boton></Boton>
            </Link>
        <div className='container'>
            
            
            {
                APIData.map((data)=>{
                    return(

                        <div className="card">
                        <div className="card-img"><div className="img"><img src="https://cdn-icons-png.flaticon.com/512/2961/2961543.png" alt='flim'/></div></div>
                        <div className="card-title">{data.producto}</div>
                        <div className="card-subtitle">- - - - - - Cliente: {data.Clientes[0].nombre} {data.Clientes[0].apellido} - - - - - -</div>
                        <hr className="card-divider"></hr>
                        <div className="card-footer">
                            {data.fecha}//{data.estado}
                        <div className="card-price">
                            {data.total}</div>
                        <div className='btns'>
                        <Link>
                            <Button className='card-btn' onClick={()=>onDelete(data._id)}>Eliminar</Button>
                        </Link>
                            
                        <Link to="/updatePedido">
                            <Button className='card-btn' onClick={()=>setData(data)}>Actualizar</Button>
                        </Link>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )

}