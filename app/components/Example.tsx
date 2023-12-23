'use client'

import {AudioPlayer, SimpleAudioPlayer} from '../components/AudioPlayer'

export function Example({Text, FR="", FRRP= "", RP="", FRSSB="", SSB="", FrenchTrans="", FrenchRPTrans="", RPTrans="", FrenchSSBTrans="", SSBTrans=""}:{Text:string, FR:string, FRRP:string, RP:string, FRSSB:string, SSB:string, FrenchTrans:string, FrenchRPTrans:string, RPTrans:string, FrenchSSBTrans:string, SSBTrans:string})
{
    var shouldDisplayFullRPAudio = FR!="" && FRRP!="" && RP!="" && FrenchTrans!="" && FrenchRPTrans!="" && RPTrans!="";
    var shouldDisplayFullSSBAudio = FR!="" && FRSSB!="" && SSB!="" && FrenchTrans!="" && FrenchSSBTrans!="" && SSBTrans!="";
    var shouldDisplaySimpleRPAudio = FrenchTrans=="" && FrenchSSBTrans=="" && SSBTrans=="" && FrenchRPTrans=="" && RP!="" && RPTrans!=""

    return (
        <div className='mt-1 grid md:grid-cols-4 mt-1'>{Text}
        {shouldDisplayFullRPAudio?
            <div className='md:w-fit'>
                {shouldDisplayFullSSBAudio?
                    <div className='text-center bg-gray-200 rounded mb-1'>RP</div>
                    :null}
                <AudioPlayer FrTranscription={FrenchTrans} FrEnTranscription={FrenchRPTrans} EnTranscription={RPTrans} FrAudioPath={FR} FrEnAudioPath={FRRP} EnAudioPath={RP} />
            </div>
            : null}
        {shouldDisplayFullSSBAudio?
            <div className='md:w-fit mt-1'>
                {shouldDisplayFullRPAudio?
                    <div className='text-center bg-gray-200 rounded mb-1'>SSB</div>
                    :null}
                <AudioPlayer FrTranscription={FrenchTrans} FrEnTranscription={FrenchSSBTrans} EnTranscription={SSBTrans} FrAudioPath={FR} FrEnAudioPath={FRSSB} EnAudioPath={SSB} />
            </div>
            : null}
        {shouldDisplaySimpleRPAudio?
            <div className='md:w-fit'>
                <SimpleAudioPlayer AudioPath={RP} Transcription={RPTrans} />
            </div>
            :null}
        </div>
    )
}