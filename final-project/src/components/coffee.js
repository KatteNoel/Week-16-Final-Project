import React from 'react';

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import CoffeePic from '../img/Coffee.png';

export const Coffee = (props) => {
    const { coffee, updateCoffee, deleteCoffee } = props;

    const editClick = (e) => {
        e.preventDefault();

        const name = document.getElementById("edit-name").value;
        const description = document.getElementById("edit-description").value;
        const price = document.getElementById("edit-price").value;

        let nameToUse = "";
        let descriptionToUse = "";
        let priceToUse = "";

        (name !== "" && name !== coffee.name) ? nameToUse = name : nameToUse = coffee.name;
        (description !== "" && description !== coffee.description) ? descriptionToUse = description : descriptionToUse = coffee.description;
        (price !== "" && price !== coffee.price) ? priceToUse = price : priceToUse = coffee.price;

        updateCoffee({name: nameToUse, description: descriptionToUse, price: priceToUse}, coffee.id);
    };

    const deleteClick = (e) => {
        deleteCoffee(coffee.id);
    };

    return (
        <Card className="headerImage card">
        <Card.Header>{coffee.name}</Card.Header>
        <Card.Body>
            <div className="center">
                <Card.Img variant="top" src={CoffeePic} alt="A picture of a latte." className="headerImage"></Card.Img>
            </div>
            <Card.Subtitle>Description</Card.Subtitle>
            <Card.Text>{coffee.description}</Card.Text>
            <Card.Subtitle>{coffee.price}</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
            <input type="text" placeholder="Edit Coffee Name" id="edit-name"></input>
            <input type="text" placeholder="Edit Description" id="edit-description"></input>
            <input type="text" placeholder="$0" id="edit-price"></input><br/>
            <Button variant="warning" onClick={editClick}>Submit Coffee Edits</Button>
            <Button variant="danger" onClick={deleteClick}>Delete Coffee</Button>
        </Card.Footer>
        </Card>
    );
};