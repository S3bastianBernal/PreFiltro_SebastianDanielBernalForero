import "../btn.css"
import {Button} from "semantic-ui-react"

export default function Boton(){
    return(
        <Button className='boton'>
            <div className="Titulo">
                    A D D - D A T A
            </div>
            <div id="clip">
                
                <div id="leftTop" className="corner"></div>
                <div id="rightBottom" className="corner"></div>
                <div id="rightTop" className="corner"></div>
                <div id="leftBottom" className="corner"></div>
                </div>
                <span id="rightArrow" className="arrow"></span>
                <span id="leftArrow" className="arrow"></span>
        </Button>
    )
}