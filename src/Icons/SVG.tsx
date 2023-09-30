import React from "react"

interface Props{
    className?:string
}

const PC: React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
    )
}


const Cube:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
    )
}
const Layer:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>
    )
}
const Cloud:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" /></svg>
    )
}
const ReactIcon:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" className={className} ><path d="m14.7707636 5.18060613c-.1863637-.06414646-.3794747-.12483939-.5783096-.18223864.0326809-.13337733.0626755-.26502788.0893447-.39444002.4377692-2.12498767.1515404-3.83689254-.8258459-4.40052446-.9371908-.54044839-2.4698948.02305563-4.01785203 1.37019542-.14885438.12954005-.29812449.2666907-.44733045.41042866-.09941755-.09510049-.19867502-.18700325-.29767671-.27490886-1.62230449-1.44044955-3.2484143-2.04747468-4.22484122-1.4822119-.93629541.54201527-1.21357059 2.15136893-.8195143 4.16523547.03805299.19451793.08253341.39316093.13283371.59512957-.23014064.06532962-.45231893.13497619-.66490404.2090676-1.90197796.66311331-3.11666776 1.70237561-3.11666776 2.78036243 0 1.11335383 1.30397043 2.2300651 3.28502825 2.9071844.15633703.0534341.31855789.1039583.48573523.1519242-.05426548.218437-.10146398.432493-.14108387.6412729-.37573329 1.9789153-.08230957 3.5502479.85149161 4.0888417.96453137.5562132 2.58328632-.015509 4.15954352-1.393347.12458358-.1089147.2496148-.2244167.37486989-.3454827.16234884.156337.32444169.3042959.4856713.4430774 1.52678827 1.3138514 3.03474187 1.8443869 3.96767967 1.3042903.963572-.5578122 1.2767258-2.245798.8701663-4.2995082-.03105-.1568487-.0671843-.317087-.1077634-.4801712.1136793-.0336083.22528-.0683036.3340988-.1043739 2.0594982-.6823637 3.399475-1.78548474 3.399475-2.9137079 0-1.08188802-1.2538621-2.12815338-3.1941487-2.79609527zm-.446691 4.98132827c-.0982342.0325208-.1990267.0639546-.3017378.0944289-.2273586-.71977705-.5342128-1.48515383-.9097222-2.27592049.3583376-.77193214.6533282-1.52752377.8743233-2.24263219.1837736.05317826.362143.10926645.534021.16845644 1.6624359.57229777 2.6765002 1.41844915 2.6765002 2.07043434 0 .69448309-1.0951586 1.59601916-2.8733845 2.185233zm-.7378442 1.4620661c.1797763.9081234.2054541 1.7291726.0863706 2.371021-.106996.5767427-.3221713.9612697-.5882224 1.1152725-.5661582.3277033-1.7768827-.0982663-3.082612-1.2218847-.14968572-.1288047-.30045871-.266339-.45171134-.4118998.50620074-.553623 1.01211364-1.1972301 1.50587514-1.9120188.8684715-.0770652 1.6889772-.2030558 2.433057-.3750617.036646.1478311.0691989.2928161.097243.4345715zm-7.46158373 3.4296617c-.55314338.1953493-.99369467.2009453-1.26000165.0473903-.56666976-.32684-.80224654-1.5884725-.48090664-3.2808392.03680588-.1938145.08061478-.3929051.13110694-.5964087.73592563.1627325 1.55041949.2798334 2.42096955.3504073.4970872.6994396 1.01761373 1.3423432 1.54216938 1.9052716-.11460667.1106414-.22876569.2159747-.34228506.3152322-.69700926.6092636-1.39548944 1.0415327-2.01105252 1.2589465zm-2.59140859-4.8959809c-.87598622-.29940341-1.59940873-.68853519-2.09528075-1.11316179-.44557172-.38158512-.67053205-.76042021-.67053205-1.06781811 0-.65415965.97527574-1.48854339 2.60186517-2.05566083.19736391-.06881516.40396926-.13366512.61837707-.19458188.22480043.73125694.51969511 1.49580222.87557052 2.26891745-.36048014.78459509-.65956384 1.56132386-.88657071 2.30115056-.15285151-.0439367-.30093839-.0901759-.44342925-.1388454zm.86866341-5.91292289c-.33761636-1.72543127-.11339151-3.02703538.45084798-3.35365154.6010134-.34794503 1.93002202.14815083 3.33075583 1.391908.08953642.07949558.17942463.16270051.26956863.24878342-.52196547.56046617-1.03772737 1.19854126-1.53040166 1.89385571-.84490433.07831242-1.65367426.20411113-2.39727443.37256755-.04675083-.18805851-.08816143-.37282336-.12349635-.55346314zm7.74925141 1.91348978c-.1777617-.30704606-.3602562-.60683326-.5463001-.89843427.5731931.07246056 1.1223712.16864828 1.6381012.28635674-.1548342.49622377-.3478171 1.0150555-.5749839 1.54693397-.1629562-.30938041-.3353139-.62131899-.5168172-.93485644zm-3.16012486-3.07797521c.35398877.38350378.70848912.81167986 1.05716966 1.27624609-.35136665-.01659621-.70708216-.02523009-1.06573949-.02523009-.35526786 0-.70836119.00844202-1.0575534.02475044.34903228-.46024931.70660245-.8878498 1.06612323-1.27576644zm-3.1803665 3.08328344c-.17756996.30790945-.34672989.61815324-.50712804.92897263-.22348937-.5300238-.41468165-1.05122185-.5708588-1.55448064.51256418-.11470258 1.05915221-.208492 1.62869994-.27957754-.18866609.2942871-.37266349.59628075-.5507131.9050216zm.56711745 4.58612068c-.58844632-.0656494-1.14325251-.1546102-1.65568878-.2661471.15867138-.51224439.35408467-1.04457049.58230667-1.58601021.16081386.31059558.33064532.6209673.5093025.92954828h.00003197c.18198284.31436883.37052101.62231013.56404764.92260903zm2.63448203 2.1775583c-.36374183-.3924574-.72655628-.8265812-1.08089677-1.2935457.34397979.0134944.69467487.0204015 1.05109396.0204015.36617207 0 .72815509-.0082501 1.08444629-.0241109-.34983183.4753746-.70305303.9101699-1.05464348 1.2972551zm3.66303188-4.05731196c.2401176.54729151.4425339 1.07683565.6032518 1.58035026-.5208782.1188276-1.083263.2145357-1.6758024.2856532.1864916-.2955343.3705849-.6004698.5514805-.91413518.1830061-.31734267.3567708-.63516505.5210701-.95186828zm-1.1858463.56846049c-.2808246.48691832-.569132.95174037-.8618202 1.39050107-.5330937.0381168-1.08383872.0577509-1.64516819.0577509-.55905916 0-1.10286526-.0173637-1.62652547-.0513555-.30448793-.4445165-.59906281-.91071352-.87809677-1.39270749h.00006396c-.27829847-.48068273-.53443665-.96542673-.76652791-1.44745249.2320273-.48314512.48749396-.96843263.76419356-1.44825207l-.00006395.00009593c.27743506-.48109851.56941981-.94502521.87109363-1.38675967.53427678-.04038732 1.08214393-.06146036 1.63583095-.06146036h.000032c.55618119 0 1.10475179.02123291 1.63886859.06197201.2970692.43850474.5870713.9009285.8655937 1.38209098.2816881.48656665.5404484.96862441.7744582 1.4414089-.2333063.4809066-.491491.96782505-.7719321 1.45416779zm1.5831643-8.57010886c.6015891.34692176.8355349 1.74605664.4575632 3.58075435-.0241109.1170689-.0512595.23631226-.0807427.35715448-.7453269-.17197393-1.5546725-.29994709-2.4020389-.37944266-.4936337-.70295704-1.0051746-1.34202342-1.51863415-1.89529471.13804604-.13280172.27590021-.25943185.41317874-.37893102 1.32629061-1.15422072 2.56589071-1.60992926 3.13067381-1.28424044zm-4.09015269 5.50422104c.88596309 0 1.60420529.71821021 1.60420529 1.60420529 0 .88596309-.7182422 1.60420541-1.60420529 1.60420541-.88596316 0-1.60420533-.71824232-1.60420533-1.60420541 0-.88599508.71824217-1.60420529 1.60420533-1.60420529z"/></svg>
    )
}

const Nodejs:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg className={className} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5v-213.2c0-2.1-1.1-4-2.9-5.1l-184.6-106.5c-1.7-1-4-1-5.7 0l-184.5 106.6c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7v-210.4c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3v210.5c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9c-12-6.9-19.4-19.8-19.4-33.7v-213.1c0-13.8 7.4-26.8 19.4-33.7l184.5-106.6c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7l-184.7 106.6c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
    )
}

const Unity:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (        
        <svg className={className} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="m498.11 206.4-52.8-191.68-197.11 51.36-29.2 50.06-59.2-.43-144.26 140.29 144.28 140.32 59.17-.43 29.24 50 197.08 51.36 52.8-191.62-30-49.63zm-274.34-82.2 150.78-37.69-86.55 145.82h-173.13zm0 263.63-108.9-108.12h173.13l86.55 145.81zm193 14-86.6-145.83 86.58-145.84 41.81 145.84z"/></svg>
    )
}

const Express:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="m126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45-7.16 9.66-14.31 18.86-21.02 28.43-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13-25.06-32.63c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19 8.36 10.99 16.62 22.09 25.13 33.43z"/><path d="m1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06 9.9 7.79 12.36 18.77 11.87 31.15h-55.8c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89-5.32-5.6-7.58-12.57-8.58-20.1-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>
    )
}

const MongoDB:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg className={className} viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781-.469-.661-.974-1.911-.974-1.911-.005.026-.005.042-.01.068v.016c0 .021-.005.031-.005.052v.021h-.005v.031.036h-.005c0 .01 0 .026-.005.031v.031c0 .01 0 .021-.005.026v.026c0 .016 0 .031-.005.042v.005c0 .021-.005.047-.01.068v.01c-.005.005-.005.01-.005.016v.021h-.005v.031h-.005v.021h-.01v.031h-.005v.026h-.005v.021h-.005v.021h-.005v.021h-.005v.021h-.005v.016h-.005v.021h-.005v.005.016h-.005c-.005 0-.005.005-.005.005v.01s-.005.01-.005.01c0 .01-.005.021-.01.031-.005.005-.005.005-.005.01v.01h-.005v.01h-.01v.026h-.01v.016h-.005v.005h-.005v.01h-.005v.016h-.005v.01h-.01v.016h-.005v.01h-.005v.01h-.005v.016h-.005v.01h-.005v.005h-.005v.01h-.01v.016h-.005v.005h-.005v.01h-.005v.016h-.005v.005h-.005v.01h-.005v.005h-.005v.016h-.01v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.005.005c-.005 0-.005.005-.005.005v.005h-.005c-.005.01-.01.016-.016.026 0 0-.01.01-.01.016-.005 0-.005.005-.005.005v.005h-.005v.005h-.005v.005.005h-.01v.005h-.005v.005h-.005v.005.01h-.005v.005h-.005v.005h-.005v.01h-.005v-.01h-.01v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.016h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.01h-.005v.005h-.005v.005h-.005v.01h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.005c-.005 0-.005.005-.005.005l-.005.005s-.005.005-.005.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005l-.01.01v.005c-.01.005-.01.01-.021.021 0 0-.01.01-.016.01-.016.01-.036.031-.052.047-.01.005-.021.016-.031.021-.021.021-.042.036-.063.052-.031.031-.063.052-.099.083h-.005c-.073.063-.156.135-.245.214h-.005c-.224.198-.49.453-.792.755l-.026.026c-1.813 1.875-4.672 5.786-4.969 12.104-.031.521-.026 1.031.005 1.526v.01c.146 2.49.927 4.615 1.906 6.344.385.688.807 1.313 1.234 1.875 1.469 1.938 2.969 3.089 3.349 3.37.589 1.359.536 3.703.536 3.703l.859.286s-.177-2.266.068-3.365c.078-.339.255-.63.464-.88.146-.099.563-.401 1.063-.859.026-.026.042-.047.063-.073 2.026-1.891 5.813-6.547 4.516-14.13z"/></svg>
    )
}

const MySQL:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 0 0 .3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 0 0-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 0 0-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 0 1-.35-.4 8.76 8.76 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 0 1 2.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/></svg>
    )
}

const Tailwind:React.FC<Props> = ({className="w-6 h-6"})=>{
    return (
        <svg className={className} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z"/></svg>
    )
}





module.exports = {
    PC,
    Cube,
    Layer,
    Cloud,
    ReactIcon,
    Nodejs,
    Unity,
    Express,
    MongoDB,
    MySQL,
    Tailwind

};