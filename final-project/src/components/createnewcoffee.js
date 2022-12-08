import { api } from "../rest/api";

import { Card } from "react-bootstrap";

export const CreateNewCoffee = (props) => {
    const { fetchCoffees } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        let name = document.getElementById("create-coffee").value;
        let description = document.getElementById("description").value;
        let price = document.getElementById("price").value;

        api.create({ name: name, description: description, price: price });
        fetchCoffees();
        
        document.getElementById("create-coffee").value = '';
        document.getElementById("description").value = '';
        document.getElementById("price").value = '$0';
    }

    return (
        <Card className="card">
            <Card.Header>Add a New Coffee</Card.Header>
            <Card.Body>
            <form className="form-control card" onSubmit={onSubmit}>
                <input type="text" placeholder="New Coffee Name" id="create-coffee"></input>
                <input type="text" placeholder="Description" id="description"></input>
                <input type="text" placeholder="$0" id="price"></input>
                <button type="submit" className="btn btn-primary">Create Coffee</button>
            </form>
            </Card.Body>
        </Card>
    );
};