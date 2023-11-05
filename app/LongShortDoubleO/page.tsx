import { Example } from "../components/Example"

export default function LongShortDoubleO()
{
    return (
        <main>
            <h1 className='text-2xl'>Cook vs Kooke ([ʊ]/[u:])</h1>
            <h2 className='text-xl pb-2'>Lesson summary</h2>
            <div className='paragraph-block lesson-paragraph'>
                <p>The two vowels covered in this lesson are often replaced by French speakers by a short [u] sound (the French ⟨ou⟩, as in <i>coucou</i>), which matches none of the correct pronunciations.</p>
                <p>Unfortunately you cannot always know when to use which, as English is not good at following rules when it comes to pronunciation.</p>
                <p>Let&apos;s begin with presenting both sounds:</p>
                <ul>
                    <li><p className='list-item-title'>The [ʊ] sound</p>
                        <p className='list-item-detail'>It is <strong>short</strong>, and its realization depends on the speaker&apos;s accent.<br/>
                        Speakers of RP English use the authentic [ʊ] sound, which is somewhere in between a French [ø] (⟨eu⟩, as in <i>jeu</i>) and [o] (as in <i>beau</i>).<br />
                        Speakers of SSB English use a more relaxed sound, [ɵ]/[ʏ], which is very close to the French [ø] (<i>jeu</i>), but slightly less rounded (same as in <i>jeu</i> but lips do not form an &quot;o&quot;)
                        </p>
                    </li>
                    <li><p className='list-item-title'>The [u:] sound</p>
                        <p className='list-item-detail'>
                        It is <strong>long</strong>, and its realization depends on the speaker&apos;s accent too.<br />
                        Speakers of RP English use the authentic [u:] sound, which is very close to the French [u] (<i>coucou</i>), but held longer.<br />
                        Speakers of SSB English use a sound often transcribed as [ᵾw], that could be approximated with an [øw] (<i>jeuw</i>).
                        </p>
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>Examples</h2>
            <div className='paragraph-block examples-paragraph'>
                <ul>
                    <li>The [ʊ] sound
                        <ul>
                            <li><Example Text='Understood' /></li>
                            <li><Example Text='Could' /></li>
                            <li><Example Text='Would' /></li>
                            <li><Example Text='Should' /></li>
                            <li><Example Text='Hood' /></li>
                            <li><Example Text='Look' /></li>
                            <li><Example Text='Hook' /></li>
                            <li><Example Text='Book' /></li>
                            <li><Example Text='Cook' /></li>
                            <li><Example Text='Nook' /></li>
                            <li><Example Text='Rook' /></li>
                            <li><Example Text='Took' /></li>
                            <li><Example Text='Foot' /></li>
                            <li><Example Text='Footers' /></li>
                        </ul>
                    </li>
                    <li>The [u:] sound
                        <ul>
                            <li><Example Text='Who' RP='/audio/LongShortDoubleO/RP-who.mp3' FrenchTrans='[hu]' FrenchRPTrans='[hu:]' RPTrans='[hu:]'/></li>
                            <li><Example Text='Mood' RP='/audio/LongShortDoubleO/RP-mood.mp3' FrenchTrans='[mud]' FrenchRPTrans='[mu:d]' RPTrans='[mu:d]'/></li>
                            <li><Example Text='Blue' RP='/audio/LongShortDoubleO/RP-blue.mp3' FrenchTrans='[blu]' FrenchRPTrans='[blu:]' RPTrans='[blu:]'/></li>
                            <li><Example Text='Shoe' RP='/audio/LongShortDoubleO/RP-shoe.mp3' FrenchTrans='[ʃu]' FrenchRPTrans='[ʃu:]' RPTrans='[ʃu:]'/></li>
                            <li><Example Text='Goose' RP='/audio/LongShortDoubleO/RP-goose.mp3' FrenchTrans='[gus]' FrenchRPTrans='[gu:s]' RPTrans='[gu:s]'/></li>
                            <li><Example Text='Menu' RP='/audio/LongShortDoubleO/RP-menu.mp3' FrenchTrans='[menju]' FrenchRPTrans='[menju:]' RPTrans='[&apos;mɛnju:]'/></li>
                            <li><Example Text='Moon' RP='/audio/LongShortDoubleO/RP-moon.mp3' FrenchTrans='[mun]' FrenchRPTrans='[mu:n]' RPTrans='[mu:n]'/></li>
                            <li><Example Text='Food' RP='/audio/LongShortDoubleO/RP-food.mp3' FrenchTrans='[fud]' FrenchRPTrans='[fu:d]' RPTrans='[fu:d]'/></li>
                            <li><Example Text='Move' RP='/audio/LongShortDoubleO/RP-move.mp3' FrenchTrans='[muv]' FrenchRPTrans='[mu:v]' RPTrans='[mu:v]'/></li>
                            <li><Example Text='True' RP='/audio/LongShortDoubleO/RP-true.mp3' FrenchTrans='[ʧɹu]' FrenchRPTrans='[ʧɹu:]' RPTrans='[ʧɹu:]'/></li>
                        </ul>
                    </li>
                    <li>Example sentences
                        <ul>
                            <li><Example Text='You should move the footers.' /></li>
                            <li><Example Text='Who understood?' /></li>
                            <li><Example Text='I should cook.' /></li>
                            <li><Example Text='You could look at the menu.' /></li>
                            <li><Example Text='Blue boots' /></li>
                            <li><Example Text='Would the moon look blue?' /></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h2 className='text-xl pb-2'>References</h2>
            <div className='paragraph-block'>
                <ul>
                    <li><a href='https://thesoundofenglish.org/oo-pronunciation-rules/'>https://thesoundofenglish.org/oo-pronunciation-rules/</a></li>
                </ul>
            </div>
        </main>
    )
}