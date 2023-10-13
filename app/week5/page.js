import ItemList from "./item-list"

export default function Home() {
    return(
        <main>
            <h1 className="text-4xl font-bold m-3 text-emerald-500">Shopping List</h1>
            <ItemList />
        </main>
    )
}