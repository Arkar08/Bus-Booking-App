import { KeyboardTypeOptions } from "react-native";

export type ButtonProps ={
    click?:()=>void;
    text:string;
    padding:number;
}

export type FromToPositionProps = {
    fromSourceClick:() =>void;
    toDestinationClick:() =>void;
}

export type FormInputFieldProps = {
    control:any;
    label:string;
    placeholder:string;
    keyboardType?:KeyboardTypeOptions;
    error?:string;
    secureTextEntry?:boolean;
    name:string;
}

export type LoginTypeProps = {
    email:string;
    password:string;
}

export type RegisterTypeProps = {
    email:string;
    name:string;
    password:string;
    phone:string;
}

export type SearchProps = {
    seat:number;
    increaseSeat:()=>void;
    decreaseSeat:()=>void;
    isLocalChecked:boolean;
    isForeignChecked:boolean;
    foreignClick:()=>void;
    localClick:()=>void;
    dateData:{
        date:Date,
        showDate:boolean,
        textDate:string
    };
    departureTime:()=>void;
    dateChange:(data1:any,data:any) =>void;
    formPosition:string;
    toPosition:string;
    sourceClick:(data:string) => void;
    destinaionClick:(data:string) => void;
}