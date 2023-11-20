import { Example } from "../components/Example"

const AudioFolder = 'audio/KitvsFleece/';

function ShortAudioPath(word:string)
{
    return AudioFolder + 'Kit/' + word + '.mp3';
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
    return AudioFolder + 'Fleece/' + word + '.mp3';
}

function FRLongAudioPath(word:string)
{
    return LongAudioPath('FR-' + word)
}

function FRRPLongAudioPath(word:string)
{
    return LongAudioPath('FR-RP-' + word)
}

function FRSSBLongAudioPath(word:string)
{
    return LongAudioPath('FR-SSB-' + word)
}

function RPLongAudioPath(word:string)
{
    return LongAudioPath('RP-' + word)
}

function SSBLongAudioPath(word:string)
{
    return LongAudioPath('SSB-' + word)
}

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
                        <ul>
                            <li>
                                <Example Text='Kit'
                                         FR={FRShortAudioPath('kit')}
                                         FRRP={FRRPShortAudioPath('kit')}
                                         RP={RPShortAudioPath('kit')}
                                         FrenchTrans='[kit]'
                                         FrenchRPTrans='[kɪt]'
                                         RPTrans='[kʰɪt]'/>
                            </li>
                            <li>
                                <Example Text='Bit'
                                         FR={FRShortAudioPath('bit')}
                                         FRRP={FRRPShortAudioPath('bit')}
                                         RP={RPShortAudioPath('bit')}
                                         FrenchTrans='[bit]'
                                         FrenchRPTrans='[bɪt]'
                                         RPTrans='[bɪt]'/>
                            </li>
                            <li>
                                <Example Text='With'
                                         FR={FRShortAudioPath('with')}
                                         FRRP={FRRPShortAudioPath('with')}
                                         RP={RPShortAudioPath('with')}
                                         FrenchTrans='[wiz]'
                                         FrenchRPTrans='[wɪz]'
                                         RPTrans='[wɪð]'/>
                            </li>
                            <li>
                                <Example Text='Shit'
                                         FR={FRShortAudioPath('shit')}
                                         FRRP={FRRPShortAudioPath('shit')}
                                         RP={RPShortAudioPath('shit')}
                                         FrenchTrans='[ʃit]'
                                         FrenchRPTrans='[ʃɪt]'
                                         RPTrans='[ʃɪt]'/>
                            </li>
                            <li>
                                <Example Text='Mid'
                                         FR={FRShortAudioPath('mid')}
                                         FRRP={FRRPShortAudioPath('mid')}
                                         RP={RPShortAudioPath('mid')}
                                         FrenchTrans='[mid]'
                                         FrenchRPTrans='[mɪd]'
                                         RPTrans='[mɪd]'/>
                            </li>
                            <li>
                                <Example Text='Rid'
                                         FR={FRShortAudioPath('rid')}
                                         FRRP={FRRPShortAudioPath('rid')}
                                         RP={RPShortAudioPath('rid')}
                                         FrenchTrans='[rid]'
                                         FrenchRPTrans='[rɪd]'
                                         RPTrans='[ɹɪd]'/>
                            </li>
                            <li>
                                <Example Text='Grit'
                                         FR={FRShortAudioPath('grit')}
                                         FRRP={FRRPShortAudioPath('grit')}
                                         RP={RPShortAudioPath('grit')}
                                         FrenchTrans='[grit]'
                                         FrenchRPTrans='[grɪt]'
                                         RPTrans='[gɹɪt]'/>
                            </li>
                            <li>
                                <Example Text='Hit'
                                         FR={FRShortAudioPath('hit')}
                                         FRRP={FRRPShortAudioPath('hit')}
                                         RP={RPShortAudioPath('hit')}
                                         FrenchTrans='[hit]'
                                         FrenchRPTrans='[hɪt]'
                                         RPTrans='[hɪt]'/>
                            </li>
                            <li>
                                <Example Text='Little'
                                         FR={FRShortAudioPath('little')}
                                         FRRP={FRRPShortAudioPath('little')}
                                         RP={RPShortAudioPath('little')}
                                         FrenchTrans='[litəl]'
                                         FrenchRPTrans='[lɪtəl]'
                                         RPTrans='[&apos;lɪtl]'/>
                            </li>
                            <li>
                                <Example Text='Big'
                                         FR={FRShortAudioPath('big')}
                                         FRRP={FRRPShortAudioPath('big')}
                                         RP={RPShortAudioPath('big')}
                                         FrenchTrans='[big]'
                                         FrenchRPTrans='[bɪg]'
                                         RPTrans='[bɪg]'/>
                            </li>
                            <li>
                                <Example Text='Will'
                                         FR={FRShortAudioPath('will')}
                                         FRRP={FRRPShortAudioPath('will')}
                                         RP={RPShortAudioPath('will')}
                                         FrenchTrans='[wil]'
                                         FrenchRPTrans='[wɪl]'
                                         RPTrans='[wɪɫ]'/>
                            </li>
                            <li>
                                <Example Text='Sit'
                                         FR={FRShortAudioPath('sit')}
                                         FRRP={FRRPShortAudioPath('sit')}
                                         RP={RPShortAudioPath('sit')}
                                         FrenchTrans='[sit]'
                                         FrenchRPTrans='[sɪt]'
                                         RPTrans='[sɪt]'/>
                            </li>
                            <li>
                                <Example Text='Piss'
                                         FR={FRShortAudioPath('piss')}
                                         FRRP={FRRPShortAudioPath('piss')}
                                         RP={RPShortAudioPath('piss')}
                                         FrenchTrans='[pis]'
                                         FrenchRPTrans='[pɪs]'
                                         RPTrans='[pʰɪs]'/>
                            </li>
                        </ul>
                    </li>
                    <li><h3>Long i (/i:/)</h3>
                        <ul>
                            <li>
                                <Example Text='Fleece'
                                         FR={FRLongAudioPath('fleece')}
                                         FRRP={FRRPLongAudioPath('fleece')}    
                                         RP={RPLongAudioPath('fleece')}
                                         FRSSB={FRSSBLongAudioPath('fleece')}
                                         SSB={SSBLongAudioPath('fleece')}
                                         FrenchTrans='[flis]'
                                         FrenchRPTrans='[fli:s]'
                                         RPTrans='[fli:s]'
                                         FrenchSSBTrans='[flɪjs]'
                                         SSBTrans='[flɪjs]'/>
                            </li>
                            <li>
                                <Example Text='Keep'
                                         FR={FRLongAudioPath('keep')}
                                         FRRP={FRRPLongAudioPath('keep')}
                                         FRSSB={FRSSBLongAudioPath('keep')}
                                         SSB={SSBLongAudioPath('keep')}
                                         RP={RPLongAudioPath('keep')}
                                         FrenchTrans='[kip]'
                                         FrenchRPTrans='[ki:p]'
                                         RPTrans='[kʰi:p]'
                                         FrenchSSBTrans='[kɪjp]'
                                         SSBTrans='[kʰɪjp]'/>
                            </li>
                            <li>
                                <Example Text='Beat'
                                         FR={FRLongAudioPath('beat')}
                                         FRRP={FRRPLongAudioPath('beat')}
                                         RP={RPLongAudioPath('beat')}
                                         FRSSB={FRSSBLongAudioPath('beat')}
                                         SSB={SSBLongAudioPath('beat')}
                                         FrenchTrans='[bit]'
                                         FrenchRPTrans='[bi:t]'
                                         RPTrans='[bi:t]'
                                         FrenchSSBTrans='[bɪjt]'
                                         SSBTrans='[bɪjt]'/>
                            </li>
                            <li>
                                <Example Text='Need'
                                         FR={FRLongAudioPath('need')}
                                         FRRP={FRRPLongAudioPath('need')}
                                         RP={RPLongAudioPath('need')}
                                         FRSSB={FRSSBLongAudioPath('need')}
                                         SSB={SSBLongAudioPath('need')}
                                         FrenchTrans='[nid]'
                                         FrenchRPTrans='[ni:d]'
                                         RPTrans='[ni:d]'
                                         FrenchSSBTrans='[nɪjd]'
                                         SSBTrans='[nɪjd]'/>
                            </li>
                            <li>
                                <Example Text='Be'
                                         FR={FRLongAudioPath('be')}
                                         FRRP={FRRPLongAudioPath('be')}
                                         RP={RPLongAudioPath('be')}
                                         FRSSB={FRSSBLongAudioPath('be')}
                                         SSB={SSBLongAudioPath('be')}
                                         FrenchTrans='[bi]'
                                         FrenchRPTrans='[bi:]'
                                         RPTrans='[bi:]'
                                         FrenchSSBTrans='[bɪj]'
                                         SSBTrans='[bɪj]'/>
                            </li>
                            <li>
                                <Example Text='Sheet'
                                         FR={FRLongAudioPath('sheet')}
                                         FRRP={FRRPLongAudioPath('sheet')}
                                         RP={RPLongAudioPath('sheet')}
                                         FRSSB={FRSSBLongAudioPath('sheet')}
                                         SSB={SSBLongAudioPath('sheet')}
                                         FrenchTrans='[ʃit]'
                                         FrenchRPTrans='[ʃi:t]'
                                         RPTrans='[ʃi:t]'
                                         FrenchSSBTrans='[ʃɪjt]'
                                         SSBTrans='[ʃɪjt]'/>
                            </li>
                            <li>
                                <Example Text='Mead'
                                         FR={FRLongAudioPath('mead')}
                                         FRRP={FRRPLongAudioPath('mead')}
                                         RP={RPLongAudioPath('mead')}
                                         FRSSB={FRSSBLongAudioPath('mead')}
                                         SSB={SSBLongAudioPath('mead')}
                                         FrenchTrans='[mid]'
                                         FrenchRPTrans='[mi:d]'
                                         RPTrans='[mi:d]'
                                         FrenchSSBTrans='[mɪjd]'
                                         SSBTrans='[mɪjd]'/>
                            </li>
                            <li>
                                <Example Text='Read'
                                         FR={FRLongAudioPath('read')}
                                         FRRP={FRRPLongAudioPath('read')}
                                         RP={RPLongAudioPath('read')}
                                         FRSSB={FRSSBLongAudioPath('read')}
                                         SSB={SSBLongAudioPath('read')}
                                         FrenchTrans='[rid]'
                                         FrenchRPTrans='[ri:d]'
                                         RPTrans='[ɹi:d]'
                                         FrenchSSBTrans='[rɪjd]'
                                         SSBTrans='[ɹɪjd]'/>
                            </li>
                            <li>
                                <Example Text='Greet'
                                         FR={FRLongAudioPath('greet')}
                                         FRRP={FRRPLongAudioPath('greet')}
                                         RP={RPLongAudioPath('greet')}
                                         FRSSB={FRSSBLongAudioPath('greet')}
                                         SSB={SSBLongAudioPath('greet')}
                                         FrenchTrans='[grit]'
                                         FrenchRPTrans='[gri:t]'
                                         RPTrans='[gɹi:t]'
                                         FrenchSSBTrans='[grɪjt]'
                                         SSBTrans='[gɹɪjt]'/>
                            </li>
                            <li>
                                <Example Text='Heat'
                                         FR={FRLongAudioPath('heat')}
                                         FRRP={FRRPLongAudioPath('heat')}
                                         RP={RPLongAudioPath('heat')}
                                         FRSSB={FRSSBLongAudioPath('heat')}
                                         SSB={SSBLongAudioPath('heat')}
                                         FrenchTrans='[hit]'
                                         FrenchRPTrans='[hi:t]'
                                         RPTrans='[hi:t]'
                                         FrenchSSBTrans='[hɪjt]'
                                         SSBTrans='[hɪjt]'/>
                            </li>
                            <li>
                                <Example Text='Seat'
                                         FR={FRLongAudioPath('seat')}
                                         FRRP={FRRPLongAudioPath('seat')}
                                         RP={RPLongAudioPath('seat')}
                                         FRSSB={FRSSBLongAudioPath('seat')}
                                         SSB={SSBLongAudioPath('seat')}
                                         FrenchTrans='[sit]'
                                         FrenchRPTrans='[si:t]'
                                         RPTrans='[si:t]'
                                         FrenchSSBTrans='[sɪjt]'
                                         SSBTrans='[sɪjt]'/>
                            </li>
                            <li>
                                <Example Text='Peace'
                                         FR={FRLongAudioPath('peace')}
                                         FRRP={FRRPLongAudioPath('peace')}
                                         RP={RPLongAudioPath('peace')}
                                         FRSSB={FRSSBLongAudioPath('peace')}
                                         SSB={SSBLongAudioPath('peace')}
                                         FrenchTrans='[pis]'
                                         FrenchRPTrans='[pi:s]'
                                         RPTrans='[pʰi:s]'
                                         FrenchSSBTrans='[pɪjs]'
                                         SSBTrans='[pʰɪjs]'/>
                            </li>
                        </ul>
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
                    <a href='http://cube.elte.hu/accent.html'><li><div className='hover:bg-neutral-200'>The accent of CUBE</div></li></a>
                    <a href='https://youtu.be/GNpbv7hJf6c?si=R8hW_tcK6Iwyqkoj'><li><div className='hover:bg-neutral-200'>Short vs long i - Dr Geoff Lindsey (YouTube)</div></li></a>
                </ul>
            </div>
        </main>
    )
}