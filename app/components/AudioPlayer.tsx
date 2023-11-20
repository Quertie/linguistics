'use client'

import { useRef, useEffect, useState, MutableRefObject } from "react"
import Image from "next/image"

let FrenchFlag = () => (<Image className='inline' src="/images/french-flag.jpg" width={15} height={10} alt='FR'/>)

let EnglishFlag = () => (<Image className='inline' src="/images/english-flag.png" width={15} height={10} alt='GB'/>)

const playingStyle= ['bg-orange-200', 'drop-shadow-md']
const normalStyle= ['bg-white', 'hover:bg-gray-200']

function PlayAudio(audioRef:MutableRefObject<HTMLAudioElement|null>, transcriptionRef:MutableRefObject<HTMLDivElement|null>, callback?:CallableFunction)
{
    if (audioRef.current == null) return
        transcriptionRef.current?.classList.add(...playingStyle)
        transcriptionRef.current?.classList.remove(...normalStyle)
        // Add time update handler
        audioRef.current.ontimeupdate = () => {
            if (audioRef.current == null) return
            if (audioRef.current?.currentTime >= audioRef.current?.duration)
            {
                transcriptionRef.current?.classList.remove(...playingStyle);
                transcriptionRef.current?.classList.add(...normalStyle)
                // Remove time update handler
                audioRef.current.ontimeupdate = null;
                if (callback != null) callback();
            }
        }
        audioRef.current?.play();
}
    

export function AudioPlayer({FrAudioPath, FrEnAudioPath, EnAudioPath, FrTranscription, FrEnTranscription, EnTranscription}:{FrAudioPath:string, FrEnAudioPath:string, EnAudioPath:string, FrTranscription:string, FrEnTranscription:string, EnTranscription:string})
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
        <div className='w-full md:w-96 rounded border-2'>
                <audio ref={frenchAudioRef} id='audio' src={FrAudioPath}/>
                <audio ref={frenchEnglishAudioRef} id='audio2' src={FrEnAudioPath}/>
                <audio ref={englishAudioRef} id='audio3' src={EnAudioPath}/>
                <div className='w-full rounded bg-white text-center mb-1 cursor-pointer hover:bg-gray-200' onClick={playAll}><Image className='inline mb-1' src="/images/loudspeaker.png" width={15} height={15} alt=''/> Play all</div>
                <div className=' grid md:grid-cols-3 gap-1 w-full'>
                    <div ref={frenchTranscriptionRef} className='flex-grow rounded bg-white text-center cursor-pointer hover:bg-gray-200' onClick={playFrenchAudio}>{FrTranscription}<br /><FrenchFlag /></div>
                    <div ref={frenchEnglishTranscriptionRef} className='flex-grow rounded bg-white text-center cursor-pointer hover:bg-gray-200' onClick={playFrenchEnglishAudio}>{FrEnTranscription}<br /><FrenchFlag />→<EnglishFlag /></div>
                    <div ref={englishTranscriptionRef} className='flex-grow rounded bg-white text-center cursor-pointer hover:bg-gray-200' onClick={playEnglishAudio}>{EnTranscription}<br /><EnglishFlag /></div>
                </div>
            </div>
    )
}