import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const [isEditing,setIsEditing] = useState(false);

function issEditing() {
    setIsEditing(false)
}

function isnotEditing() {
    setIsEditing(true)
}

   return (
        <nav className="navbar navbar-expand-lg navbar-light mb-3">
            <div className="container-fluid nav-item" >
            <Link className="nav-link active" aria-current="page" to="/" href="#" style={{color: "black",fontSize:22}}>DASHBOARD</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" onClick={issEditing} aria-current="page" to="/" href="#">BOOKS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" onClick={isnotEditing} aria-current="page" to="/Authors" href="#">AUTHERS</Link>
                    </li>
                    {
                        isEditing ?
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/AddAuthor" href="#">ADDAUTHERS</Link>
                    </li> :
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/AddBooks" href="#">ADDBOOKS</Link>
                    </li>
                    }
                </ul>
            </div>
            </div>
        </nav>
    )
}