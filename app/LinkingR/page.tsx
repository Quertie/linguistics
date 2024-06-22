import { GetExamplesAsList } from "../types/ExampleData"
import { UnpronouncedRExamples,
         LinkingRExamples,
         WordsEndingInRExamples,
         CounterExamples,
         WordsNonEndingInRExamples,
         OtherCounterExamples} from "./Examples"

export default function LinkingR()
{
    return (
        <main>
            <h1 className='text-2xl'>Linking r</h1>
            <h2 className='text-xl pb-2'>Lesson summary</h2>
            <div className='paragraph-block lesson-paragraph'>
                <p>In RP and SSB English, we do not pronounce &apos;r&apos;s at the end of syllables, <strong>unless they are followed by another vowel sound</strong>.</p>
                <ul>
                <li>
                        <p className='list-item-title'>Words ending in r</p>
                        <p className='list-item-detail'>
                            Words ending with an r like &quot;doctor&quot;, &quot;car&quot;, &quot;clear&quot;, &quot;more&quot;, will feature a linking r if they are followed by a vowel sound.<br /></p>
                        <p className='list-item-detail'>
                            Examples:</p>
                            {GetExamplesAsList(WordsEndingInRExamples, 'LinkingR')}
                        <p className='list-item-detail'>
                            The important thing to note in these examples is that the <strong>following sound</strong> is a vowel.<br />
                        </p>
                        
                        <p className='list-item-title'>Importance of the following sound</p>
                        <p className='list-item-detail'>
                            If the following sound is a <strong>consonant</strong>, a <strong>/j/</strong> (&quot;yes&quot;) or a <strong>/w/</strong> (&quot;won&quot;) sound, then the /r/ is <strong>not pronounced</strong>.
                        </p>
                        <p className='list-item-detail'>
                            Counter-examples (no linking r):<br />
                        </p>
                        {GetExamplesAsList(CounterExamples, 'LinkingR')}
                        

                        <p className='list-item-title'>Words that do not end in r</p>
                        <p className='list-item-detail'>
                            Linking r can still happen when the first word does not end in r, but ends in a vowel sound.<br />
                            This makes it easier to articulate both words in sequence.<br />
                            This excludes words that end with [j] and [w], such as &quot;boy&quot; or &quot;how&quot;.
                        </p>
                        <p className='list-item-detail'>
                            Examples:<br />
                        </p>
                        {GetExamplesAsList(WordsNonEndingInRExamples, 'LinkingR')}
                        <p className='list-item-detail'>
                            Counter-examples:</p>
                        {GetExamplesAsList(OtherCounterExamples, 'LinkingR')}
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>Examples</h2>
            <div className='paragraph-block examples-paragraph'>
                <ul>
                    <li><h3>Unpronounced r</h3>
                    {GetExamplesAsList(UnpronouncedRExamples, 'LinkingR')}
                    </li>
                    <li><h3>With linking r</h3>
                    {GetExamplesAsList(LinkingRExamples, 'LinkingR')}
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>References</h2>
            <div className='paragraph-block'>
                <ul>
                    <a href='https://www.englishspeechservices.com/blog/linking-r/'><li><div className='hover:bg-neutral-200'>Linking r (Goeff Lyndsay)</div></li></a>
                </ul>
            </div>
        </main>
    )
}