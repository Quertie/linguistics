import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2 className='text-xl pb-4'>Lessons</h2>
      <ul>
        <Link href='./LongShortDoubleO'><li className='paragraph-block hover:bg-neutral-200'>Lesson 1: Foot vs. Goose ([ʊ]/[u:])</li></Link>
        <Link href='./KitvsFleece'><li className='paragraph-block hover:bg-neutral-200'>Lesson 2: Kit vs. Fleece ([ɪ]/[i:])</li></Link>
        <Link href='./ClearVsDarkL'><li className='paragraph-block hover:bg-neutral-200'>Lesson 3: Clear vs. Dark L ([l]/[ɫ])</li></Link>
        <Link href='./LinkingR'><li className='paragraph-block hover:bg-neutral-200'>Lesson 4: Linking r</li></Link>
      </ul>
    </main>
  )
}
