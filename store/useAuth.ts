import { AuthProps } from "@/utils/constant";
import { create } from "zustand";


const useAuth = create<AuthProps>((set,get)=>({
    isLoggedIn:false,
    users:{
        email:"",
        password:""
    },
    registerUsers:{
        email:"",
        name:"",
        password:"",
        phone:""
    },

   login:() => {
    const data = get()
    set((state) => {
        if(data.users.email !== '' && data.users.password !== ''){
            return {
                isLoggedIn:true,
                users:{
                    ...state.users,
                    email:'',
                    password:""
                }
            }
        }
        return state;
    })
   },
   loginChange:(text, name) => {
       set((state) => {
            return {
                users:{
                    ...state.users,
                    [name]:text
                }
            }
       })
   },

   registerChange:(text,name) => {
        set((state) => {
            return {
                registerUsers:{
                    ...state.registerUsers,
                    [name]:text
                }
            }
       })
   },
   register:() => {
    const data = get()
    set((state) => {
        if(data.registerUsers.email !== '' && data.registerUsers.password !== '' && data.registerUsers.name !== '' && data.registerUsers.phone !== ''){
            return {
                isLoggedIn:true,
                registerUsers:{
                    ...state.registerUsers,
                    email:"",
                    name:"",
                    password:"",
                    phone:""
                }
            }
        }
        return state;
    })
   },
   logout:() => {
    set((state) => {
        return {
            isLoggedIn:false
        }
    })
   }
}))

export default useAuth;