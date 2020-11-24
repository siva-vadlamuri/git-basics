import React from 'react';
import logo from '../../../assets/logo.jpg';

export default () => {
    return(
        <footer className="section footer-classic context-dark bg-image" style={{background: "#2d3246"}}>
            <div className="container-fluid">
                <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                            <div className="pr-xl-4">
                                <a className="brand" href="index.html">
                                    <img className="brand-logo-light" src={logo} alt="AchieversIT" />
                                </a>
                                <p>AchieversIT - provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>

                                <p className="rights"><span>©  </span><span className="copyright-year">2020</span><span> </span><span>AchieversIT</span><span>. </span><span>All Rights Reserved.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>272,6th Main,BTM 2nd Stage, Bangalore - 76</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd><a href="mailto:#">info@achieversit.com</a></dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>Website:</dt>
                                <dd><a href="https://www.achieversit.com">AchieversIT</a>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5>Links</h5>
                            <ul className="nav-list">
                                <li><a href="#">About</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters social-container">
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                    <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                </div>
      </footer>
    )
}