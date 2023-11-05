import Link from 'next/link'
import { Warning } from './components/Alerts'
import { Example } from './components/Example'

export default function Home() {
  return (
    <main>
      <h2 className='text-xl pb-4'>Lessons</h2>
      <ul>
        <Link href='./LongShortDoubleO'><li className='paragraph-block hover:bg-neutral-200'>Lesson 1: Cook vs. Kooke ([ʊ]/[u:])</li></Link>
      </ul>
    </main>
  )
}
