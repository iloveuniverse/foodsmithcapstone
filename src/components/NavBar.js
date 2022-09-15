//import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function NavBar(){
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className=".bg-warning">FoodSmith</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">Search By</Nav.Link>
                            <Nav.Link href="#features">Explore</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
		// <>
		// 	<nav className="navbar">
		// 		<div className="navbar-container">
		// 				<li className='nav-item'>	
		// 						Home
		// 				</li>
		// 				<li className='nav-item'>
		// 						About Us
		// 				</li>
		// 		</div>
		// 	</nav>
		// </>
        )
}

export default NavBar;