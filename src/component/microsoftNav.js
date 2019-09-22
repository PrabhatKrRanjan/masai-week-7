import React from "react";
import './App.css';


function MicrosoftNav() {
    return (
        <div className="ml-5 mr-5">
            <div className="container-fluid">
                <nav className="row nav">
                    <div className="col-2">
                        <img className="logo" src="https://inteng-storage.s3.amazonaws.com/images/APRIL/sizes/Microsoft_logo_44_resize_md.jpg"></img>
                    </div>

                    <div className="col-1">
                        <a className="nav-link" >Office</a>
                    </div>

                    <div className="col-1">
                    <a className="nav-link" >Windows</a>
                    </div>

                    <div className="col-1">
                        <a className="nav-link" >Surface</a>
                    </div>

                    <div className="col-1">
                        <a className="nav-link" >Xbox</a>
                    </div>

                    <div className="col-1">
                        <a className="nav-link" >Support</a>
                    </div>

                    <div className="col-1">
                        <a className="nav-link dropdown-toggle" >All Microsoft</a>
                    </div>

                    <div className="col-1">
                        <a className="nav-link" >Search</a>
                    </div>

                    <div className="col-1">
                        <a className="nav-link" >Cart</a>
                    </div>

                    <div className="col-1">
                        <a className="nav-link" >Sign in</a>
                    </div>

                </nav>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide w-100 h-75" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 imgHight" src="http://getwallpapers.com/wallpaper/full/3/1/a/658215.jpg"
                            alt="First slide">
                        </img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 imgHight"
                            src="http://getwallpapers.com/wallpaper/full/0/9/b/658412.jpg"
                            alt="Second slide">
                        </img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 imgHight" src="http://getwallpapers.com/wallpaper/full/f/0/7/658770.jpg"
                            alt="Third slide">
                        </img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default MicrosoftNav;

