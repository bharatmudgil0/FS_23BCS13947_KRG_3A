import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 
import Section from './Section';

function MenuNutritionSummary ({ menuItems }) {
    const nutrientKeys = {  //Only a few common nutrients are displayed
        ENERC_KCAL: 'Calories',
        PROCNT: 'Protein',
        FAT: 'Total Fat',
        FASAT: 'Saturated Fat',
        CHOCDF: 'Carbohydrates',
        SUGAR: 'Sugar',
        NA: 'Sodium',
        CA: 'Calcium',
        FIBTG: 'Fiber'
    };

    // Calculate total nutrition for the specified nutrients
    const totalNutrition = menuItems.reduce((totals, item) => {//Use reduce function to calculate the total nutrition for the specified nutrients
        Object.entries(nutrientKeys).forEach(([key, _]) => {
            if (item.nutrition[key]) {
                if (!totals[key]) { //if the nutrition key does not exist in the totals object, initialize it with quantity 0
                    totals[key] = { quantity: 0, unit: item.nutrition[key].unit };
                }
                totals[key].quantity += item.nutrition[key].quantity;//Add the quantity of the nutrition value to the total
            }
        });
        return totals;//Returns the totals object which accumulates the total nutrition values for all the food items in the menuItems array.
    }, {});

    function Groups(props){
        return <div>{props.children}</div>
    }

    function Group(props){
        return ( 
            <div style={{color: '#198754', margin: '0 10px', display: 'flex', fontSize:'80%', flexDirection: 'row', justifyContent:'space-between'}}>
            {props.name}
            <div style={{color: '#198754',paddingLeft:'10px'}}>
            {props.message}<br/></div>
            
            </div>
            
        );
    }
    
    function Family(props){
        return (
        <div>
            <div style={{color:"#198754"}}>
                {props.title}
            </div>
            <div>{props.children}</div>
            <div>{props.message}</div>    
                
        </div>
        );
    }

    return (
        <Section title="Menu Nutrition Summary">
            <h3 style={{color:"grey",fontSize:"120%"}}>Total Main Nutrition (from all selected items):</h3>
            <ul style={{color:"grey",fontSize:"100%"}}>
                {Object.entries(totalNutrition).map(([key, { quantity, unit }]) => (   //Use Object.entries to iterate over the totalNutrition object and render each nutrient as a list item
                    <li key={key}>
                        {nutrientKeys[key]}: {quantity.toFixed(2)} {unit}
                    </li>
                ))}
            </ul><br/>
            <h3 style={{color:"grey",fontSize:"120%"}}>Items added at a glance:</h3>
            <ul style={{color:"grey",fontSize:"100%"}}>
                {menuItems.map((item, index) => (    //map function is used to iterate over the menuItems array and render each item as a list item
                    <li key={index}>
                        {item.food} - {item.quantity} {item.unit}
                    </li>
                ))}
            </ul>
            <p style={{color:"grey",fontSize:"95%"}}>You may edit food items on the Menu Summary (Editable) page.</p><br/>
            <h5 style={{color:"#198754",fontSize:"110%"}}>Estimated Energy Requirement(EER) formula:</h5>
                <Groups>
                    <Family title="Male">
                        <Group name="EER Formula:" />
                            <Group message="662 - (9.53 * Age_year) + Physical Activity Index * [(15.91 * Weight_KG) + (539.6 * Height_meter)]" /> 
                        <Group name="Physical Activity Index:" />
                            <Group message="Sedentary: 1.0" /> 
                            <Group message="Low active: 1.11" />
                            <Group message="Active: 1.25" />
                            <Group message="Very Active: 1.48" />
                    </Family>
                    <Family title="Female">
                        <Group name="EER Formula:" />
                            <Group message="354 - (6.91 * Age_year) + Physical Activity Index * [(9.36 * Weight_KG) + (726 * Height_meter)]" /> 
                        <Group name="Physical Activity Index:" />
                            <Group message="Sedentary: 1.0" /> 
                            <Group message="Low active: 1.12" />
                            <Group message="Active: 1.27" />
                            <Group message="Very Active: 1.45" />
                    </Family>
                </Groups>

                    {/* <p style={{color:"#0D6EFD",fontSize:"80%"}}>Source: <a href='https://www.ontario.ca/page/calories-menus#:~:text=Adults%20and%20youth%20(ages%2013%20and%20older)%20need%20an%20average,to%202%2C400%20calories%20per%20day.'>Ontario.ca</a></p> */}
                    <p style={{marginTop:'10px', paddingLeft:'10px', color:"#0D6EFD",fontSize:"80%"}}>Source: <a href='https://nkf.org.my/prevention/education-tools-resources/err-calculator/.'>Estimated Energy Requirement (EER)</a></p>
                    {/* <h5 style={{color:"grey",fontSize:"110%"}}>Remarks</h5>
                    <p style={{color:"grey",fontSize:"90%"}}>Adults and youth (ages 13 and older) need an average of 2,000 calories a day. </p>
                    <p style={{color:"grey",fontSize:"90%"}}>Children (ages 4 to 12) need an average of 1,500 calories a day. However, individual needs vary.</p>
                    <p style={{color:"#0D6EFD",fontSize:"95%"}}>Source: <a href='https://www.ontario.ca/page/calories-menus#:~:text=Adults%20and%20youth%20(ages%2013%20and%20older)%20need%20an%20average,to%202%2C400%20calories%20per%20day.'>Ontario.ca</a></p> */}

            <div>
            <Button size='sm' variant="outline-success" onClick={() => window.print()}>Print this page</Button>
            </div>
            <footer cl={{ marginTop: '20px', textAlign: 'center', color: '#666', fontSize:"90%" }}>
                <p style={{marginTop:"20px", textAlign: 'center', color: '#666', fontSize:"90%"}}>&copy; 2024 CPAN144 Yan & Tina</p>
            </footer>
        </Section>
    );
};

export default MenuNutritionSummary;



