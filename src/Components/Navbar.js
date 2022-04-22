import React, { useState } from 'react'

export default function Navbar(props) {

    const [alertMessage, setAlertMessage] = useState(null)
    const [navbarTheme, setNavebarTheme] = useState(props.theme)
    const switchFire = () => { if (navbarTheme === "light") { setNavebarTheme('dark'); props.themeChangeFunction("dark"); setAlertMessage("Dark Theme Fired"); setTimeout(()=>{setAlertMessage(null)},4000)  } else { setNavebarTheme('light'); props.themeChangeFunction("light"); } }
    const handleOnChange = () => { }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${navbarTheme} bg-${navbarTheme}`} style={{ border: "2px solid red" }}>
                <div className="container-fluid">
                    <span className="navbar-brand" >Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active" aria-current="page" >Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" >Link</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><span className="dropdown-item" >Action</span></li>
                                    <li><span className="dropdown-item" >Another action</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item" >Something else here</span></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link d-flex flex-row justify-content-center">
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                                    <span className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={switchFire} onChange={handleOnChange} />
                                    </span>
                                </div>

                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
            {/* setTimeout(() => {
                
            }, 2000); */}
            {alertMessage && <div class="alert alert-success" role="alert">
                {alertMessage}
            </div>}
        </>
    )
}
