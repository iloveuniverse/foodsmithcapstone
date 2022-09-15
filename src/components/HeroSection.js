import React from "react";
import './css/HeroSection.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function HeroSection(){
         return (
            <div>
                <div className="hero">
                    <video src='/videos/video1.mp4' autoPlay loop muted/>
                    <Navbar variant="dark" className="navbar-transparent">
                    <Container>
                    <span  className="website-name">FoodSmith</span>
                        <Nav className="m-auto">
                            <Nav.Link href="/" className="options">HOME</Nav.Link>
                            <Nav.Link href="recipe" className="options">RECIPES</Nav.Link>
                            <Nav.Link href="search" className="options">SEARCH</Nav.Link>
                            <Nav.Link href="#pricing" className="options">About US</Nav.Link>
                        </Nav>
                        <Button variant="outline-warning" className="btn">Sign Up</Button>
                    </Container>
                    </Navbar>
                    <div className="video-txt">
                        <span>Welcome</span>
                    </div>
                    
                </div>

              
            </div>
         )
}

export default HeroSection;