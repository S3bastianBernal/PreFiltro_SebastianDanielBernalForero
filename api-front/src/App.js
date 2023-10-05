import { ReadClientes, ReadConsolas, ReadPedidios, ReadPelis, ReadVidejuegos } from "./components/read.jsx";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import SideBar from "./components/sideBar.jsx";
import { UpdateClientes, UpdateConsolas, UpdateGames, UpdatePedidos, UpdatePelis } from "./components/update.jsx";
import { CreateClientes, CreateConsola, CreateGame, CreatePedido, CreatePeli } from "./components/create.jsx";


function App(){
  return(
    <Router>
      <div className="App">
        <SideBar></SideBar>
        <Route exact path="/peliculas" component={ReadPelis}></Route>
        <Route exact path="/videojuegos" component={ReadVidejuegos}></Route>
        <Route exact path="/consolas" component={ReadConsolas}></Route>
        <Route exact path="/clientes/159753" component={ReadClientes}></Route>
        <Route exact path="/pedidos" component={ReadPedidios}></Route>
      </div>
      <div>
        <Route path="/updatePelis" component={UpdatePelis}></Route>
        <Route path="/updateGames" component={UpdateGames}></Route>
        <Route path="/updateConsolas" component={UpdateConsolas}></Route>
        <Route path="/updateClientes" component={UpdateClientes}></Route>
        <Route path="/updatePedido" component={UpdatePedidos}></Route>
      </div>
      <div>
        <Route path="/createPeli" component={CreatePeli}></Route>
        <Route path="/createGame" component={CreateGame}></Route>
        <Route path="/createConsola" component={CreateConsola}></Route>
        <Route path="/createCliente" component={CreateClientes}></Route>
        <Route path="/createPedido" component={CreatePedido}></Route>
      </div>
    </Router>
  )
}

export default App