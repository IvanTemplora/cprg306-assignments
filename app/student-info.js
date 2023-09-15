import Link from "next/link"

export default function StudentInfo() {
    return (
        <main>
            <p>Name: Ivan Templora</p>
            <p>Course section: CPRG 306 C</p>
            <Link href="https://github.com/IvanTemplora?tab=repositories">https://github.com/IvanTemplora?tab=repositories</Link>
        </main>
    )
}