import "@renderer/assets/notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex-container">
            <div className="text-center d-flex flex-column">
                <h1>
                    <span className="fade-in" id="digit1">4</span>
                    <span className="fade-in" id="digit2">0</span>
                    <span className="fade-in" id="digit3">4</span>
                </h1>
                <h3 className="fadeIn">PAGE NOT FOUND</h3>
                <Link to="/">Return To Home</Link>
               
            </div>
        </div>
    )
}

export default NotFound
