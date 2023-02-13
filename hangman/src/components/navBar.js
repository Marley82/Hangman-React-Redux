import {Link} from "react-router-dom"; 
function Nav(){
// creating a navbar to cut between pages and hold the reload button
    function refreshPage(){ 
        window.location.reload(); 
    }
    
    return(
        <div>
            <nav>
            <ul id="mainnav">
                <span><Link id="link" to="/">Home</Link></span>
                <span><Link id="link" to="/help">Help</Link></span>
                <span type="button" id="link" onClick={ refreshPage }>Reload</span> 
            </ul>
            
            </nav>
        </div>
    )
}

export default Nav