"use client";

import { useState } from "react";

export default function NewEvent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newItem = {
            name,
            quantity,
            category,
        }

        console.log(newItem);

        alert('Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}');

        setName("");
        setQuantity("");
        setCategory("");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setCategory(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return(
        <main>
            <div>
                <h1>Create New Item</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Item Name:</span>
                        <input required onChange={handleNameChange} value={name} />
                    </label>
                </form>
            </div>
        </main>
    )

}