import Link from "next/link"

export default function StudentInfo() {
    return (
        <div className="m-4 bg-green-700 w-max border-2 border-emerald-600">
            <p className="font-bold">Name: Ivan Templora</p>
            <p className="font-bold">Course section: CPRG 306 C</p>
            <Link href="https://github.com/IvanTemplora?tab=repositories">https://github.com/IvanTemplora?tab=repositories</Link>
        </div>
    )
}