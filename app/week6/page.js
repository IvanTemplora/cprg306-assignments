"use client";

import ItemList from "./item-list"
import NewEvent from "./new-item"
import itemsData from "./items.json";
import { useState } from "react";

export default function Home() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
        setItems([...items, item]);
    }
    
    return(
        <main>
            <h1 className="text-4xl font-bold m-3 text-emerald-500">Shopping List</h1>
            <NewEvent onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    )
}