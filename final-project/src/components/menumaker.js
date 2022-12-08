import React from 'react';
import { api } from '../rest/api';
import { CreateNewCoffee } from './createnewcoffee';
import { Coffee } from './coffee';
import { Gif2 } from './gif2';

export default class MenuMaker extends React.Component {
    state = {
        coffees: []
    };

    componentDidMount() {
        this.fetchCoffees();
    }

    fetchCoffees = async () => {
        const resources = await api.get();
        let coffees = [];

        for (let resource of resources) {
            if (resource.name !== "About"){
                coffees.push(resource);
            }
        }

        console.log(coffees);

        this.setState({coffees});
    }

    updateCoffee = async (updatedCoffee, id) => {
        await api.put(updatedCoffee, id);
        this.fetchCoffees();
    };

    deleteCoffee = async (id) => {
        await api.delete(id);
        this.fetchCoffees();
    };

    render() {
        return(
            <div>
                <Gif2 />
                <CreateNewCoffee fetchCoffees={this.fetchCoffees} />
                <div className="center-card">
                    {this.state.coffees.map((coffee) => 
                        <Coffee key={coffee.id} coffee={coffee} updateCoffee={this.updateCoffee} deleteCoffee={this.deleteCoffee}/>
                    )}
                </div>
            </div>
        );
    }
}