import { GetExamplesAsList } from "../types/ExampleData"
import { ShortExamples, LongExamples } from "./Examples"
import Image from "next/image"

export default function ClearVsDarkL()
{
    return (
        <main>
            <h1 className='text-2xl'>Clear vs Dark L</h1>
            <h2 className='text-xl pb-2'>Lesson summary</h2>
            <div className='paragraph-block lesson-paragraph'>
                <p>There are two distinct ways to pronounce the L in English: Clear L [l], which is the same as in French, and Dark L [ɫ], which is specific to English (and other languages but not French)</p>
                <ul>
                <li>
                        <p className='list-item-title'>Clear L [l]</p>
                        <p className='list-item-detail'>
                            Light L is used when <strong>followed by a pronounced vowel</strong> (this <strong>excludes</strong> silent vowels like the ending e in &quot;style&quot;)
                        </p>
                    </li>
                    <li>
                        <p className='list-item-title'>Dark L [ɫ]</p>
                        <p className='list-item-detail'>
                            Dark L is used when the L is <strong>not followed by a pronounced vowel.</strong><br />
                            The consonant [ɫ] is realised by sticking the tip of the tongue on the back of the gum and raising the back of the tongue.<br />
                            <Image className='inline w-full sm:w-fit' src="/images/clear-dark-l.webp" width="400" height="200" alt='clear vs dark l'/><br />
                            Some people realise dark L by pronouncing a [w] sound (less posh)<br />
                            With this pronuncitation, &quot;howl&quot; [hæwɫ]/[hæw] sounds the same as &quot;how&quot; [hæw].
                        </p>
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>Examples</h2>
            <div className='paragraph-block examples-paragraph'>
                <ul>
                    <li><h3>Clear L ([l])</h3>
                        {GetExamplesAsList(ShortExamples, 'ClearVsDarkL/Clear L')}
                    </li>
                    <li><h3>Dark L ([ɫ])</h3>
                        {GetExamplesAsList(LongExamples, 'ClearVsDarkL/Dark L')}
                    </li>
                    <li><h3>Example sentences</h3>
                        <ul>
                            <li>Will you help me?</li>
                            <li>I will send you an email</li>
                            <li>When I have cleared the slides</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
    )
}