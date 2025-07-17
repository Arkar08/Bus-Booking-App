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