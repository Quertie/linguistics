import { Warning } from "../components/Alerts";
import { GetExamplesAsList } from "../types/ExampleData";
import { LongExamples, ShortExamples } from "./Examples"

export default function LongShortDoubleO()
{
    return (
        <main>
            <Warning Message="The part on Goose /u:/ is bullshit. Do not take it into account until i make a better version."/><br />
            <h1 className='text-2xl'>Foot vs Goose ([ʊ]/[u:])</h1>
            <h2 className='text-xl pb-2'>Lesson summary</h2>
            <div className='paragraph-block lesson-paragraph'>
                <p>The two vowels covered in this lesson are often replaced by French speakers with a short [u] sound (the French ⟨ou⟩, as in <i>coucou</i>), which matches neither of the correct pronunciations.</p>
                <p>Unfortunately you cannot always know when to use which, as English is not good at following rules when it comes to pronunciation.</p>
                <p>Let&apos;s begin with presenting both sounds:</p>
                <ul>
                    <li><p className='list-item-title'>The /ʊ/ sound</p>
                        <p className='list-item-detail'>It is <strong>short</strong>, and its realisation depends on the speaker&apos;s accent.<br/>
                        Speakers of RP English use the authentic [ʊ] sound, which is somewhere in between a French [ø] (⟨eu⟩, as in <i>jeu</i>) and [o] (as in <i>beau</i>).<br />
                        Speakers of SSB English use a more relaxed sound, [ɵ]/[ʏ], which is very close to the French [ø] (<i>jeu</i>), but slightly less rounded (same as in <i>jeu</i> but lips do not form an &quot;o&quot;)
                        </p>
                    </li>
                    <li><p className='list-item-title'>The /u:/ sound</p>
                        <p className='list-item-detail'>
                        It is <strong>long</strong>, and its realisation depends on the speaker&apos;s accent too.<br />
                        Speakers of RP English use the authentic [u:] sound, which is close to the French [y] (<i>rue</i>), but held longer.<br />
                        Speakers of SSB English use a sound often transcribed as [ᵾw], that could be approximated with an [øy] (<i>jeuw</i>).
                        </p>
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>Examples (RP)</h2>
            <div className='paragraph-block examples-paragraph'>
                <ul>
                    <li><h3>The [ʊ] sound</h3>
                        {GetExamplesAsList(ShortExamples, 'LongShortDoubleO/ShortDoubleO')}
                    </li>
                    <li><h3>The [u:] sound</h3>
                        {GetExamplesAsList(LongExamples, 'LongShortDoubleO/LongDoubleO')}
                    </li>
                    <li>Example sentences
                        <ul>
                            <li>You should move the footers.</li>
                            <li>Who understood?</li>
                            <li>I should cook.</li>
                            <li>You could look at the menu.</li>
                            <li>Blue boots</li>
                            <li>Would the moon look blue?</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>References</h2>
            <div className='paragraph-block'>
                <ul>
                    <a href='https://thesoundofenglish.org/oo-pronunciation-rules/'><li><div className='hover:bg-neutral-200'>OO pronunciation rules (thesoundofenglish.org)</div></li></a>
                    <a href='https://thesoundofenglish.org/ipa/'><li><div className='hover:bg-neutral-200'>IPA Chart (thesoundofenglish.org)</div></li></a>
                </ul>
            </div>
        </main>
    )
}