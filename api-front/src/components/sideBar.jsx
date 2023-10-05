import React, { useState } from 'react';
import video from '../assets/video.svg'
import arrow from '../assets/arrow.svg';
import movie from '../assets/movie.svg';
import game from '../assets/game.svg'
import {Link} from 'react-router-dom'
import '../sideBar.css'

const SideBar = () => {
  const [sideBarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!sideBarOpen);
  }

 

  return (
    <div>
      <nav className={`sidebar ${sideBarOpen ? 'close' : ''}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="https://cdn-icons-png.flaticon.com/512/5847/5847540.png" alt="" className="logo" />
            </span>
            <div className="text logo-text">
              <span className="name">GameBuster</span>
              <span className="profession">By: Sebastian</span>
            </div>
          </div>
          <img src={arrow} className='bx bx-chevron-right toggle arrow' onClick={toggleSidebar}></img>
        </header>
        <div className="menu-bar">
          
            <li className="nav-link active">

                <Link to={'/peliculas'}>
                    <img className='icon-SideBar' src="https://cdn-icons-png.flaticon.com/512/3658/3658993.png"></img>
                    <div>
                      
                        <span className="text nav-text">Peliculas</span>
                 
                    </div> 
                </Link>
                
            </li>

            <li className="nav-link active">

                <Link to={'/videojuegos'}>
                    <img className='icon-SideBar' src="https://cdn-icons-png.flaticon.com/512/181/181885.png"></img>
                    <div>
                      
                        <span className="text nav-text">VideoJuegos</span>
                 
                    </div> 
                </Link>
                
            </li>

            <li className="nav-link active">

                <Link to={'/consolas'}>
                    <img className='icon-SideBar' src="https://cdn.icon-icons.com/icons2/2248/PNG/512/microsoft_xbox_icon_136396.png"></img>
                    <div>
                      
                        <span className="text nav-text">Consolas</span>
                 
                    </div> 
                </Link>
                
            </li>

            <li className="nav-link active">

                <Link to={'/pedidos'}>
                    <img className='icon-SideBar' src="https://cdn-icons-png.flaticon.com/512/2961/2961543.png"></img>
                    <div>
                      
                        <span className="text nav-text">Pedidos</span>
                 
                    </div> 
                </Link>
                
            </li>
          
          
        </div>
      </nav>
    </div>
  );
}

export default SideBar;