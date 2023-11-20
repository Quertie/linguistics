'use client'

import {AudioPlayer} from '../components/AudioPlayer'

export function Example({Text, FR="", FRRP= "", RP="", FRSSB="", SSB="", FrenchTrans="", FrenchRPTrans="", RPTrans="", FrenchSSBTrans="", SSBTrans=""}:{Text:string, FR?:string, FRRP?:string, RP?:string, FRSSB?:string, SSB?:string, FrenchTrans?:string, FrenchRPTrans?:string, RPTrans?:string, FrenchSSBTrans?:string, SSBTrans?:string})
{
    var shouldDisplayRPAudio = FR!="" && FRRP!="" && RP!="";
    var shouldDisplaySSBAudio = FR!="" && FRSSB!="" && SSB!="";

    return (
        <div className='mt-1 grid md:grid-cols-4 mt-1'>{Text}
        {shouldDisplayRPAudio?
            <div className='md:w-fit'>
                {shouldDisplaySSBAudio?
                    <div className='text-center bg-gray-200 rounded mb-1'>RP</div>
                    :null}
                <AudioPlayer FrTranscription={FrenchTrans} FrEnTranscription={FrenchRPTrans} EnTranscription={RPTrans} FrAudioPath={FR} FrEnAudioPath={FRRP} EnAudioPath={RP} />
            </div>
            : null}
        {shouldDisplaySSBAudio?
            <div className='md:w-fit mt-1'>
                {shouldDisplayRPAudio?
                    <div className='text-center bg-gray-200 rounded mb-1'>SSB</div>
                    :null}
                <AudioPlayer FrTranscription={FrenchTrans} FrEnTranscription={FrenchSSBTrans} EnTranscription={SSBTrans} FrAudioPath={FR} FrEnAudioPath={FRSSB} EnAudioPath={SSB} />
            </div>
            : null}
        </div>
    )
}