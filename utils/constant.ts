import { KeyboardTypeOptions } from "react-native";

export type ButtonProps ={
    click?:()=>void;
    text:string;
    padding:number;
    disabled?:boolean;
    background?:boolean
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
interface SearchList {
    from:string;
    to:string;
    date:Date;
    seat:number;
    nationality:string;
}

interface ErrorListSearch {
    errorFrom:boolean;
    errorTo:boolean;
    errorDate:boolean;
    errorNationality:boolean;
}

export type SearchProps = {
    showDate:boolean;
    searchList:SearchList;
    errorList:ErrorListSearch;
    departureTime:()=>void;
    dateChange:(data1:any,data:any) =>void;
    sourceClick:(data:string) => void;
    destinaionClick:(data:string) => void;
    searchListBtn:() => void;
    seatClick:(text:string) => void;
    choiceNationally:(text:string) => void;
}

export type AuthProps = {
    isLoggedIn:boolean;
    users:LoginTypeProps
    login:() => void;
    registerUsers:RegisterTypeProps;
    loginChange:(text:string,name:any) => void;
    registerChange:(text:string,name:any) =>void;
    register:() =>void;
    logout:() =>void;
}

export type SeatProps = {
    choiceSeat:string[];
    seatClick:(seat:string) =>void;
    allSeats:any[];
    modalVisiable:boolean;
    openModal:() =>void;
    closeModal:() => void;
}