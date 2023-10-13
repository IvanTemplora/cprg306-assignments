"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() { 

    const [sortBy, setSortBy] = useState("name");

    const sortedList = [...items]

    if(sortBy === "name"){
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if(sortBy === "category"){
        sortedList.sort((a, b) => a.category.localeCompare(b.category));
    }

      return(
        <main>
            <div>
                <button
                className={`border border-white p-2 m-2 ${sortBy === "name" ? 'bg-white text-black' : 'bg-black'}`}
                onClick={() => setSortBy("name")}>Sort By Name</button>
                <button
                className={`border border-white p-2 m-2 ${sortBy === "category" ? 'bg-white text-black' : 'bg-black'}`}
                onClick={() => setSortBy("category")}>Sort By Category</button>
            </div>
            <div>
                {sortedList.map((item) => (
                    <Item key={item.id} name={item.name} category={item.category} quantity={item.quantity} />
                ))}
            </div>
        </main>
      )
}