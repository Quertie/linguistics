export function Example({Text, RP="", FrenchTrans="", FrenchRPTrans="", RPTrans=""}:{Text:string, RP?:string, FrenchTrans?:string, FrenchRPTrans?:string, RPTrans?:string})
{
    return (
        <div className='mt-1 rounded'>{Text}
        {RP!="" ?
            <div className='w-40'>
                <audio id='audio' className='w-full' src={RP} controls/>
                <div className='grid grid-cols-3 w-full'>
                    <div>{FrenchTrans}</div>
                    <div>{FrenchRPTrans}</div>
                    <div>{RPTrans}</div>
                </div>
            </div>
            : null}
        </div>
    )
}