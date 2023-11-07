import { Example } from "../components/Example"

const AudioFolder = 'audio/LongShortDoubleO/';

function ShortAudioPath(word:string)
{
    return AudioFolder + 'ShortDoubleO/' + word + '.mp3';
}

function FRShortAudioPath(word:string)
{
    return ShortAudioPath('FR-' + word)
}

function FRRPShortAudioPath(word:string)
{
    return ShortAudioPath('FR-RP-' + word)
}

function RPShortAudioPath(word:string)
{
    return ShortAudioPath('RP-' + word)
}

function LongAudioPath(word:string)
{
    return AudioFolder + 'LongDoubleO/' + word + '.mp3';
}

function FRLongAudioPath(word:string)
{
    return LongAudioPath('FR-' + word)
}

function FRRPLongAudioPath(word:string)
{
    return LongAudioPath('FR-RP-' + word)
}

function RPLongAudioPath(word:string)
{
    return LongAudioPath('RP-' + word)
}

export default function LongShortDoubleO()
{
    return (
        <main>
            <h1 className='text-2xl'>Foot vs Goose ([ʊ]/[u:])</h1>
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
                        <ul>
                            <li>
                                <Example Text='Understood'
                                         FR={FRShortAudioPath('understood')}
                                         FRRP={FRRPShortAudioPath('understood')}
                                         RP={RPShortAudioPath('understood')}
                                         FrenchTrans='[œndœʁstud]'
                                         FrenchRPTrans='[œndœʁstʊd]'
                                         RPTrans='[ˌʌndə&apos;stʊd]'/>
                            </li>
                            <li>
                                <Example Text='Could' 
                                         FR={FRShortAudioPath('could')} 
                                         FRRP={FRRPShortAudioPath('could')} 
                                         RP={RPShortAudioPath('could')} 
                                         FrenchTrans='[kud]'
                                         FrenchRPTrans='[kʊd]'
                                         RPTrans='[kʰʊd]'/>
                            </li>
                            <li>
                                <Example Text='Would' 
                                         FR={FRShortAudioPath('would')} 
                                         FRRP={FRRPShortAudioPath('would')} 
                                         RP={RPShortAudioPath('would')} 
                                         FrenchTrans='[wud]'
                                         FrenchRPTrans='[wʊd]'
                                         RPTrans='[wʊd]'/>
                            </li>
                            <li>
                                <Example Text='Should' 
                                         FR={FRShortAudioPath('should')} 
                                         FRRP={FRRPShortAudioPath('should')} 
                                         RP={RPShortAudioPath('should')} 
                                         FrenchTrans='[ʃud]'
                                         FrenchRPTrans='[ʃʊd]'
                                         RPTrans='[ʃʊd]'/>
                            </li>
                            <li>
                                <Example Text='Hood' 
                                         FR={FRShortAudioPath('hood')} 
                                         FRRP={FRRPShortAudioPath('hood')} 
                                         RP={RPShortAudioPath('hood')} 
                                         FrenchTrans='[hud]'
                                         FrenchRPTrans='[hʊd]'
                                         RPTrans='[hʊd]'/>
                            </li>
                            <li>
                                <Example Text='Look' 
                                         FR={FRShortAudioPath('look')} 
                                         FRRP={FRRPShortAudioPath('look')} 
                                         RP={RPShortAudioPath('look')} 
                                         FrenchTrans='[luk]'
                                         FrenchRPTrans='[lʊk]'
                                         RPTrans='[lʊk]'/>
                            </li>
                            <li>
                                <Example Text='Hook' 
                                         FR={FRShortAudioPath('hook')} 
                                         FRRP={FRRPShortAudioPath('hook')} 
                                         RP={RPShortAudioPath('hook')} 
                                         FrenchTrans='[huk]'
                                         FrenchRPTrans='[hʊk]'
                                         RPTrans='[hʊk]'/>
                            </li>
                            <li>
                                <Example Text='Book' 
                                         FR={FRShortAudioPath('book')} 
                                         FRRP={FRRPShortAudioPath('book')} 
                                         RP={RPShortAudioPath('book')} 
                                         FrenchTrans='[buk]'
                                         FrenchRPTrans='[bʊk]'
                                         RPTrans='[bʊk]'/>
                            </li>
                            <li>
                                <Example Text='Cook' 
                                         FR={FRShortAudioPath('cook')} 
                                         FRRP={FRRPShortAudioPath('cook')} 
                                         RP={RPShortAudioPath('cook')} 
                                         FrenchTrans='[kuk]'
                                         FrenchRPTrans='[kʊk]'
                                         RPTrans='[kʰʊk]'/>
                            </li>
                            <li>
                                <Example Text='Nook' 
                                         FR={FRShortAudioPath('nook')} 
                                         FRRP={FRRPShortAudioPath('nook')} 
                                         RP={RPShortAudioPath('nook')} 
                                         FrenchTrans='[nuk]'
                                         FrenchRPTrans='[nʊk]'
                                         RPTrans='[nʊk]'/>
                            </li>
                            <li>
                                <Example Text='Rook' 
                                         FR={FRShortAudioPath('rook')} 
                                         FRRP={FRRPShortAudioPath('rook')} 
                                         RP={RPShortAudioPath('rook')} 
                                         FrenchTrans='[ɹuk]'
                                         FrenchRPTrans='[ɹʊk]'
                                         RPTrans='[ɹʊk]'/>
                            </li>
                            <li>
                                <Example Text='Took' 
                                         FR={FRShortAudioPath('took')} 
                                         FRRP={FRRPShortAudioPath('took')} 
                                         RP={RPShortAudioPath('took')} 
                                         FrenchTrans='[tuk]'
                                         FrenchRPTrans='[tʊk]'
                                         RPTrans='[tʰʊk]'/>
                            </li>
                            <li>
                                <Example Text='Foot' 
                                         FR={FRShortAudioPath('foot')} 
                                         FRRP={FRRPShortAudioPath('foot')} 
                                         RP={RPShortAudioPath('foot')} 
                                         FrenchTrans='[fut]'
                                         FrenchRPTrans='[fʊt]'
                                         RPTrans='[fʊt]'/>
                            </li>
                            <li>
                                <Example Text='Footers' 
                                         FR={FRShortAudioPath('footers')} 
                                         FRRP={FRRPShortAudioPath('footers')} 
                                         RP={RPShortAudioPath('footers')} 
                                         FrenchTrans='[futœʁz]'
                                         FrenchRPTrans='[fʊtœʁz]'
                                         RPTrans='[&apos;fʊt
                            əz]'/></li>
                        </ul>
                    </li>
                    <li><h3>The [u:] sound</h3>
                        <ul>
                            <li>
                                <Example Text='Who'
                                         FR={FRLongAudioPath('who')}
                                         FRRP={FRRPLongAudioPath('who')}
                                         RP={RPLongAudioPath('who')}
                                         FrenchTrans='[hu]'
                                         FrenchRPTrans='[hu:]'
                                         RPTrans='[hu:]'/>
                            </li>
                            <li>
                                <Example Text='Mood'
                                         FR={FRLongAudioPath('mood')}
                                         FRRP={FRRPLongAudioPath('mood')}
                                         RP={RPLongAudioPath('mood')}
                                         FrenchTrans='[mud]'
                                         FrenchRPTrans='[mu:d]'
                                         RPTrans='[mu:d]'/>
                            </li>
                            <li>
                                <Example Text='Blue'
                                         FR={FRLongAudioPath('blue')}
                                         FRRP={FRRPLongAudioPath('blue')}
                                         RP={RPLongAudioPath('blue')}
                                         FrenchTrans='[blu]'
                                         FrenchRPTrans='[blu:]'
                                         RPTrans='[blu:]'/>
                            </li>
                            <li>
                                <Example Text='Shoe'
                                         FR={FRLongAudioPath('shoe')}
                                         FRRP={FRRPLongAudioPath('shoe')}
                                         RP={RPLongAudioPath('shoe')}
                                         FrenchTrans='[ʃu]'
                                         FrenchRPTrans='[ʃu:]'
                                         RPTrans='[ʃu:]'/>
                            </li>
                            <li>
                                <Example Text='Goose'
                                         FR={FRLongAudioPath('goose')}
                                         FRRP={FRRPLongAudioPath('goose')}
                                         RP={RPLongAudioPath('goose')}
                                         FrenchTrans='[gus]'
                                         FrenchRPTrans='[gu:s]'
                                         RPTrans='[gu:s]'/>
                            </li>
                            <li>
                                <Example Text='Menu'
                                         FR={FRLongAudioPath('menu')}
                                         FRRP={FRRPLongAudioPath('menu')}
                                         RP={RPLongAudioPath('menu')}
                                         FrenchTrans='[menju]'
                                         FrenchRPTrans='[menju:]'
                                         RPTrans='[&apos;mɛnju:]'/>
                            </li>
                            <li>
                                <Example Text='Moon'
                                         FR={FRLongAudioPath('moon')}
                                         FRRP={FRRPLongAudioPath('moon')}
                                         RP={RPLongAudioPath('moon')}
                                         FrenchTrans='[mun]'
                                         FrenchRPTrans='[mu:n]'
                                         RPTrans='[mu:n]'/>
                            </li>
                            <li>
                                <Example Text='Food'
                                         FR={FRLongAudioPath('food')}
                                         FRRP={FRRPLongAudioPath('food')}
                                         RP={RPLongAudioPath('food')}
                                         FrenchTrans='[fud]'
                                         FrenchRPTrans='[fu:d]'
                                         RPTrans='[fu:d]'/>
                            </li>
                            <li>
                                <Example Text='Move'
                                         FR={FRLongAudioPath('move')}
                                         FRRP={FRRPLongAudioPath('move')}
                                         RP={RPLongAudioPath('move')}
                                         FrenchTrans='[muv]'
                                         FrenchRPTrans='[mu:v]'
                                         RPTrans='[mu:v]'/>
                            </li>
                            <li>
                                <Example Text='True'
                                         FR={FRLongAudioPath('true')}
                                         FRRP={FRRPLongAudioPath('true')}
                                         RP={RPLongAudioPath('true')}
                                         FrenchTrans='[ʧɹu]'
                                         FrenchRPTrans='[ʧɹu:]'
                                         RPTrans='[ʧɹu:]'/>
                            </li>
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