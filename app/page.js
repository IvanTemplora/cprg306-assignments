import Link from "next/link"
import StudentInfo from "./student-info"

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-yellow-500">CPRG 306: Web Development 2 - Assignments</h1><br />
      <StudentInfo />
      <div className="m-4 font-bold">
        <Link href="week2">Week 2</Link><br />
        <Link href="week3">Week 3</Link><br />
        <Link href="week4">Week 4</Link><br />
        <Link href="week5">Week 5</Link><br />
        <Link href="week6">Week 6</Link><br />
        <Link href="week7">Week 7</Link><br />
        <Link href="week8">Week 8</Link><br />
      </div>
    </main>
  )
}
