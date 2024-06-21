import { GetExamplesAsList } from "../types/ExampleData"
import { ShortExamples, LongExamples } from "./Examples"


export default function KitvsFleece()
{
    return (
        <main>
            <h1 className='text-2xl'>Kit vs Fleece</h1>
            <h2 className='text-xl pb-2'>Lesson summary</h2>
            <div className='paragraph-block lesson-paragraph'>
                <p>The sound that is usually pronounced [i] (as in French <i>riz</i>) by French speakers comes in two varieties, that you may know as &quot;short i&quot; and &quot;long i&quot;.</p>
                <p>As is turns out, &quot;short&quot; or &quot;long&quot; is far from being the only difference between these sounds. They&apos;re entirely different sounds.</p>
                <ul>
                    <li>
                        <p className='list-item-title'>Short i (/ɪ/)</p>
                        <p className='list-item-detail'>
                            This sound is essentially the same as the French <i>é</i>, as in <i>été</i>. This may come as a surprise, as both the spelling and the phonetic character are confusing.<br />
                            This is a <strong>short</strong> sound, make sure you pronounce it that way.
                        </p>
                    </li>
                    <li><p className='list-item-title'>Long i (/i:/)</p></li>
                        <p className='list-item-detail'>
                            The realisation of /i:/ depends on the speaker&apos;s accent.<br />
                            Speakers of RP use the authentic [i:] sound, the same as in French <i>riz</i>.<br />
                            Speakers of SSB use a very slightly different sound, the diphtongue [ɪj], which could be approximated by quickly saying <i>é-ille</i>.
                        </p>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>Examples</h2>
            <div className='paragraph-block examples-paragraph'>
                <p>In the following examples, notice the pairs: bit/beat, shit/sheet, ...</p>
                <ul>
                    <li><h3>Short i (/ɪ/)</h3>
                        {GetExamplesAsList(ShortExamples, 'KitvsFleece/Kit')}
                    </li>
                    <li><h3>Long i (/i:/)</h3>
                        {GetExamplesAsList(LongExamples, 'KitvsFleece/Fleece')}
                    </li>
                    <li><h3>Example sentences</h3>
                        <ul>
                            <li>Kitty</li>
                            <li>A little bit of mead</li>
                            <li>I&apos;m reading</li>
                            <li>I&apos;m taking a big sheet</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>References</h2>
            <div className='paragraph-block'>
                <ul>
                    <a href='http://seas.elte.hu/cube/accent.html'><li><div className='hover:bg-neutral-200'>The accent of CUBE</div></li></a>
                    <a href='https://youtu.be/GNpbv7hJf6c?si=R8hW_tcK6Iwyqkoj'><li><div className='hover:bg-neutral-200'>Short vs long i - Dr Geoff Lindsey (YouTube)</div></li></a>
                </ul>
            </div>
        </main>
    )
}