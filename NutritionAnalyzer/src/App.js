import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NutritionAnalyzer from './NutritionAnalyzer';
import MenuSummary from './MenuSummary';
import MenuNutritionSummary from './MenuNutritionSummary';
import bg from './image/bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import avocadoImage from './image/avocado.png';

function App () {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: '1800px',
        minHeight: '700px',
    };

    const [menuItems, setMenuItems] = useState([]);

    const handleFoodAdded = (item) => {
        setMenuItems(prevItems => [...prevItems, item]);
    };

    const handleFoodRemoved = (index) => {
        setMenuItems(prevItems => prevItems.filter((_, i) => i !== index));//with filter function, it removes item at 
        //the specified index from the menuItems array by updating the state with a new array that excludes the item at that index.
    };

    return (
        <Router>
            <div style={backgroundStyle}>
                {/* Bootstrap Navbar */}
                {/*navbar1 */}
                <Navbar style={{paddingLeft: '20px'}} bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/" style={{fontSize:'28px', fontWeight: 'bold'}}>Nutrition Analyzer</Navbar.Brand>
                    <img src={avocadoImage} alt="Avocado" style={{ width: '40px', marginRight: '10px' }} />
                    {/* <Nav className="mr-auto"> */}
                        {/* <Nav.Link as={Link} to="/menu-summary-editable">Menu Summary(Editable)</Nav.Link>
                        <Nav.Link as={Link} to="/menu-nutrition-summary">Menu Nutrition Summary</Nav.Link> */}
                    {/* </Nav> */}
                </Navbar>
                {/*navbar2 */}
                <Navbar style={{paddingLeft: '20px', marginBottom: '20px'}} bg="dark" variant="dark">
                    {/* <Navbar.Brand as={Link} to="/">Nutrition Analyzer</Navbar.Brand> */}
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/menu-summary-editable">Menu Summary (Editable)</Nav.Link>
                        <Nav.Link as={Link} to="/menu-nutrition-summary">Menu Nutrition Summary</Nav.Link>
                    </Nav>
                </Navbar>

                <Routes>
                    <Route path="/menu-summary-editable" element={<MenuSummary menuItems={menuItems} onFoodRemoved={handleFoodRemoved} />} />
                    <Route path="/menu-nutrition-summary" element={<MenuNutritionSummary menuItems={menuItems} />} />
                    <Route path="/" element={<NutritionAnalyzer onFoodAdded={handleFoodAdded} />} />
                    <Route path="*" element={<div>Error: Page not found</div>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
