import { Example } from "../components/Example";

const AudioFolder = 'audio/';

function AudioPath(word:string, folderNameInAudioFolder:string)
    {
        return AudioFolder + folderNameInAudioFolder + "/" + word + '.mp3';
    }

export class ExampleData
{
    Text:string;
    WordReference:string;
    FrenchTranscription:string;
    FrenchRPTranscription:string;
    RPTranscription:string;
    FrenchSSBTranscription:string;
    SSBTranscription:string;

    constructor(text:string, wordReference:string, frenchTranscription:string, frenchRPTranscription:string, rpTranscription: string, frenchSSBTranscription:string, ssbTranscription:string)
    {
        this.Text=text;
        this.WordReference = wordReference;
        this.FrenchTranscription = frenchTranscription;
        this.FrenchRPTranscription = frenchRPTranscription;
        this.RPTranscription = rpTranscription;
        this.FrenchSSBTranscription = frenchSSBTranscription;
        this.SSBTranscription = ssbTranscription;
    }
}

export function GetExamplesAsList(exampleData:ExampleData[], folderNameInAudioFolder:string)
{
    const items = exampleData.map((d) => 
        <li>
            <Example Text={d.Text}
                     FR={AudioPath("FR-"+d.WordReference, folderNameInAudioFolder)}
                     FRRP={AudioPath("FR-RP-"+d.WordReference, folderNameInAudioFolder)}
                     RP={AudioPath("RP-"+d.WordReference, folderNameInAudioFolder)}
                     FRSSB={AudioPath("FR-SSB-"+d.WordReference, folderNameInAudioFolder)}
                     SSB={AudioPath("SSB-"+d.WordReference, folderNameInAudioFolder)}
                     FrenchTrans={d.FrenchTranscription}
                     FrenchRPTrans={d.FrenchRPTranscription}
                     RPTrans={d.RPTranscription}
                     FrenchSSBTrans={d.FrenchSSBTranscription}
                     SSBTrans={d.SSBTranscription}/>
        </li>
    )
    return <ul>{items}</ul>;
}