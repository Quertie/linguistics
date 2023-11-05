export function Example({Text, RP="", FrenchTrans="", FrenchRPTrans="", RPTrans=""}:{Text:string, RP?:string, FrenchTrans?:string, FrenchRPTrans?:string, RPTrans?:string})
{
    return (
        <div className='mt-1 rounded'>{Text}
        {RP!="" ?
            <div className='w-52'>
                <audio id='audio' className='w-full' src={RP} controls/>
                <div className='grid grid-cols-3 gap-1 w-full'>
                    <div className='rounded bg-white text-center'>{FrenchTrans}<br />🇫🇷</div>
                    <div className='rounded bg-white text-center'>{FrenchRPTrans}<br />🇫🇷→🇬🇧</div>
                    <div className='rounded bg-white text-center'>{RPTrans}<br />🇬🇧</div>
                </div>
            </div>
            : null}
        </div>
    )
}