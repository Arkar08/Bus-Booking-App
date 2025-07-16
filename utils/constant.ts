export type ButtonProps ={
    click?:()=>void;
    text:string;
    padding:number;
}

export type FromToPositionProps = {
    fromSourceClick:() =>void;
    toDestinationClick:() =>void;
}