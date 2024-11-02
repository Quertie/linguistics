import { GetExamplesAsList } from "../types/ExampleData"
import { ShortExamples, LongExamples } from "./Examples"
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
                <ul>
                    <li>Port [pʰo:t]</li>
                    <li>Tar [tʰɑ:]</li>
                    <li>Care [kʰɛ:]</li>
                </ul>
                <p>However, you <i>don&apos;t</i> hear it in:</p>
                <ul>
                    <li>Sport [spo:t]</li>
                    <li>Star [stɑ:]</li>
                    <li>Scare [skɛ:]</li>
                </ul>
                <p>So, when do you use it?</p>
                <ul>
                <li>
                        <p>Aspiration is used before a vowel sound.</p>
                        <ul>
                            <li>At the beginning of a word</li>
                            <li>At the beginning of a stressed syllable</li>
                        </ul>
                    </li>
                    <li>
                        <p className='list-item-title'>Beginning of a stressed syllable</p>
                        <p className='list-item-detail'>
                            <ul>
                                <li>Report [ɹə&apos;pʰo:t]</li>
                                <li>Retain [ɹə&apos;tʰɛjn]</li>
                                <li>Record [ɹə&apos;kʰo:d]</li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p className='list-item-title'>Beginning of a word</p>
                        <p className='list-item-detail'>
                            <ul>
                                <li>Party [&apos;pʰɑ:ti:]</li>
                                <li>Pertain [pʰə&apos;tʰɛjn]</li>
                                <li>Conceal [kʰņ&apos;si:ɫ]</li>
                                <li>Towards [tʰə&apos;wo:dz]</li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p className='list-item-title'>No aspiration</p>
                        <p className='list-item-detail'>
                            <ul>
                                <li>Estate [&apos;pʰɑ:ti:]</li>
                                <li>Spare [pʰə&apos;tʰɛjn]</li>
                                <li>Matter [kʰņ&apos;si:ɫ]</li>
                                <li>Winter [tʰə&apos;wo:dz]</li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p className='list-item-title'>Examples for work</p>
                        <p className='list-item-detail'>
                            <ul>
                                <li>PowerPoint [&apos;pʰaʊəpʰojnt]</li>
                                <li>Title [&apos;tʰɑjtɫ]</li>
                                <li>Table [&apos;tʰɛjbɫ]</li>
                                <li>Custom [&apos;kʰʌstəm]</li>
                                <li>Template [&apos;tʰɛmplɛjt]</li>
                                <li>Tools [&apos;tʰu:lz]</li>
                                <li>Pane [&apos;pʰɛjn]</li>
                                <li>Publish [&apos;pʰʌblɪʃ]</li>
                            </ul>
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
                    <li><h3>Tongue twisters</h3>
                        <ul>
                            <li>Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked.                            </li>
                            <li>Betty Botter bought some butter. But she said the butter&apos;s bitter, “If I put it in my batter. It will make my batter bitter, But a bit of better butter.- that would make my batter better.</li>
                            <li>A cupcake cook in a cupcake cook&apos;s cap cooks cupcakes.</li>
                        </ul>
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