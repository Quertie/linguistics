import { GetExamplesAsList } from "../types/ExampleData"
import { FirstExamples, FirstExamplesNoAspiration, StressedSyllable, BeginningWord, NoAspiration, ExamplesWork } from "./Examples"
import Image from "next/image"

export default function ClearVsDarkL()
{
    return (
        <main>
            <h1 className='text-2xl'>Aspiration</h1>
            <h2 className='text-xl pb-2'>Lesson summary</h2>
            <div className='paragraph-block lesson-paragraph'>
                <p>Unlike French, there can be noticeable release of air in English (like a whisper) after a [p], [t] or [k] sound. This is known as <strong>aspiration</strong>.</p>
                <p>You can hear it in:</p>
                {GetExamplesAsList(FirstExamples, 'Aspiration')}
                <p>However, you <i>don&apos;t</i> hear it in:</p>
                {GetExamplesAsList(FirstExamplesNoAspiration, 'Aspiration')}
                <p>to produce aspiration, imagine you are &quot;pushing&quot; the following vowel with a burst of air: <strong>p - hort</strong>.</p>
                <Image className='inline w-full sm:w-fit' src="/images/aspiration-blow.jpg" width="400" height="200" alt='clear vs dark l'/>
                <p>So, when do you use it?</p>
                <ul>
                <li>
                        <p>Aspiration is used before a vowel sound.</p>
                        <ul>
                            <li>At the beginning of a word</li>
                            <li>At the beginning of a stressed syllable</li>
                        </ul>
                    </li>
                
                </ul>
            </div>
            <h2 className='text-xl pb-2'>Examples</h2>
            <div className='paragraph-block examples-paragraph'>
                <ul>
                    <li>
                        <h3>Beginning of a stressed syllable</h3>
                        {GetExamplesAsList(StressedSyllable, 'Aspiration')}
                    </li>
                    <li>
                        <h3>Beginning of a word</h3>
                        {GetExamplesAsList(BeginningWord, 'Aspiration')}
                    </li>
                    <li>
                        <h3>No aspiration</h3>
                            {GetExamplesAsList(NoAspiration, 'Aspiration')}
                    </li>
                    <li>
                        <h3>Examples for work</h3>
                        {GetExamplesAsList(ExamplesWork, 'Aspiration')}
                    </li>
                </ul>
                
            </div>
            <h2 className='text-xl pb-2'>References</h2>
            <div className='paragraph-block'>
                <ul>
                    <a href='https://home.cc.umanitoba.ca/~krussll/phonetics/narrower/aspiration.html'><li><div className='hover:bg-neutral-200'>Aspiration (Canadian website)</div></li></a>
                    <a href='https://www.youtube.com/watch?v=6PSdlctYBsw'><li><div className='hover:bg-neutral-200'>Aspiration (video by Geoff Lyndsey)</div></li></a>
                </ul>
            </div>
        </main>
    )
}