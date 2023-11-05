'use client'

import { useRef, useEffect, useState, MutableRefObject } from "react"

const playingStyle= ['bg-orange-200', 'drop-shadow-md']

function PlayAudio(audioRef:MutableRefObject<HTMLAudioElement|null>, transcriptionRef:MutableRefObject<HTMLDivElement|null>, callback?:CallableFunction)
{
    if (audioRef.current == null) return
        transcriptionRef.current?.classList.add(...playingStyle)
        // Add time update handler
        audioRef.current.ontimeupdate = () => {
            if (audioRef.current == null) return
            if (audioRef.current?.currentTime >= audioRef.current?.duration)
            {
                transcriptionRef.current?.classList.remove(...playingStyle);
                // Remove time update handler
                audioRef.current.ontimeupdate = null;
                if (callback != null) callback();
            }
        }
        audioRef.current?.play();
}

export function Example({Text, RP="", FrenchTrans="", FrenchRPTrans="", RPTrans=""}:{Text:string, RP?:string, FrenchTrans?:string, FrenchRPTrans?:string, RPTrans?:string})
{
    const frenchAudioRef = useRef<HTMLAudioElement>(null);
    const frenchTranscriptionRef = useRef<HTMLDivElement>(null);

    const frenchEnglishAudioRef = useRef<HTMLAudioElement>(null);
    const frenchEnglishTranscriptionRef = useRef<HTMLDivElement>(null);

    const englishAudioRef = useRef<HTMLAudioElement>(null);
    const englishTranscriptionRef = useRef<HTMLDivElement>(null);

    let playFrenchAudio = ()=>{
        PlayAudio(frenchAudioRef, frenchTranscriptionRef)
    }

    let playFrenchEnglishAudio = ()=>{
        PlayAudio(frenchEnglishAudioRef, frenchEnglishTranscriptionRef)
    }

    let playEnglishAudio = ()=>{
        PlayAudio(englishAudioRef, englishTranscriptionRef)
    }

    let playAll = ()=>{
        PlayAudio(frenchAudioRef, frenchTranscriptionRef, ()=>{PlayAudio(frenchEnglishAudioRef, frenchEnglishTranscriptionRef, ()=>{PlayAudio(englishAudioRef, englishTranscriptionRef)})})
    }
    
    return (
        <div className='mt-1 rounded'>{Text}
        {RP!="" ?
            <div className='w-52 rounded border-2 p-1'>
                <audio ref={frenchAudioRef} id='audio' src={RP}/>
                <audio ref={frenchEnglishAudioRef} id='audio2' src={RP}/>
                <audio ref={englishAudioRef} id='audio3' src={RP}/>
                <div className='w-full rounded bg-white text-center mb-1' onClick={playAll}>▸</div>
                <div className='grid grid-cols-3 gap-1 w-full'>
                    <div ref={frenchTranscriptionRef} className='rounded bg-white text-center' onClick={playFrenchAudio}>{FrenchTrans}<br />🇫🇷</div>
                    <div ref={frenchEnglishTranscriptionRef} className='rounded bg-white text-center' onClick={playFrenchEnglishAudio}>{FrenchRPTrans}<br />🇫🇷→🇬🇧</div>
                    <div ref={englishTranscriptionRef} className='rounded bg-white text-center' onClick={playEnglishAudio}>{RPTrans}<br />🇬🇧</div>
                </div>
            </div>
            : null}
        </div>
    )
}