import Header from "./components/Design/Header";
import logo from './images/usacelogo.png'
import {Link} from "react-router-dom"

function Texas() {
    return (
        <>
        <Header/>
        <div className="container">
        <Link to="/Texas"> 
            <div className="content1">
                <h2>General Rules</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Oklahoma">
            <div className="content2">
                <h2>Board 1</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Kansas">
            <div className="content3">
                <h2>Board 2</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>

    </div>
    </>
    )
}
export default Texas