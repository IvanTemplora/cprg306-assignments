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

        alert(`New Item Added\nItem Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity("");
        setCategory("Produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return(
        <main>
            <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-black text-2xl justify-center flex pb-2 ">Create New Item</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="text-black">
                            <span>Item Name: </span>
                            <input
                            type="text"
                            required
                            onChange={handleNameChange}
                            value={name}
                            placeholder="Item Name"
                            className="bg-slate-500 rounded border border-slate-900"
                            />
                        </label><br />
                        <label className="text-black">
                            <span>Quantity:</span>
                            <input
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={handleQuantityChange}
                            required
                            className="border border-slate-900 rounded"
                            />
                        </label><br />
                        <label className="text-black">
                            <span>Category:</span>
                            <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="border border-slate-900 rounded"
                            >
                                <option value="" disabled>category</option>
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                        </label><br />
                        <button
                        type="submit"
                        className="text-black mt-2 border bg-slate-400 border-slate-900 rounded"
                        >
                            Create Event
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )

}