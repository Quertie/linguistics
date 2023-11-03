import Link from 'next/link'
import { Warning } from './components/Alerts'

export default function Home() {
  return (
    <main className='p-10'>
      <Warning Message='Site under construction'/>
      <h2>Lessons</h2>
      <ul>
        <li><Link href='./LongShortDoubleO'>Lesson 1: Cook vs. Kooke ([ʊ]/[u:])</Link></li>
      </ul>
    </main>
  )
}
