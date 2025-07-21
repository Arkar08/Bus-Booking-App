import { SearchProps } from './../utils/constant';

import { create } from "zustand";

const useSearch = create<SearchProps>((set,get) => ({
  showDate:false,
  searchList:{
    from:'',
    to:"",
    date:new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 0, 0, 0, 0)),
    seat:1,
    nationality:''
  },
  errorList:{
    errorFrom:false,
    errorTo:false,
    errorDate:false,
    errorNationality:false
  },

  seatClick: (text:string) => {
    set((state) => {
      if(text === 'decrese'){
        return {
          searchList:{
            ...state.searchList,seat:state.searchList.seat  - 1
          }
        }
      }else{
        return {
          searchList:{
            ...state.searchList,seat:state.searchList.seat + 1
          }
        }
      }
    });
  },

  choiceNationally:(text:string) => {
    set((state) => {
     return {
      searchList:{
        ...state.searchList , nationality:text
      },
      errorList:{
        ...state.errorList,errorNationality:false
      }
     }
    });
  },


  departureTime: () => {
    set((state)=>{
        return {
           showDate:true
        }
    })
  },

  dateChange: ({ type }: any, selectDate: any) => {
    set((state) => {
      if (type === "set") {
        return {
          searchList: {
            ...state.searchList,
              date:selectDate
          },
          showDate:false,
          errorList:{
            ...state.errorList,
            errorDate:false
          }
        };
      } else {
          return {
            showDate:false
          }
      }
    });
  },

  sourceClick:(data:string) => {
    set((state)=>{
        if(data !== ''){
            return {
                searchList:{
                  ...state.searchList,
                  from:data
                },
                errorList:{
                  ...state.errorList,
                  errorFrom:false
                }
            }
        }
        return state;
    })
  },

  destinaionClick:(data:string) => {
    set((state)=>{
        if(data !== ''){
            return {
                searchList:{
                  ...state.searchList,
                  to:data
                },
                errorList:{
                  ...state.errorList,
                  errorTo:false
                }
            }
        }
        return state;
    })
  },


  searchListBtn:() => {
    const data = get()
    set((state) => {
      if(data.searchList.from === ''){
        return {
          errorList:{
            ...state.errorList,
            errorFrom:true
          }
        }
      }else if(data.searchList.to === ''){
         return {
          errorList:{
            ...state.errorList,
            errorTo:true
          }
        }
      }else if(data.searchList.date.toDateString() === new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 0, 0, 0, 0)).toDateString()){
         return {
            errorList:{
              ...state.errorList,
              errorDate:true
            }
          }
      }else if(data.searchList.nationality === ''){
         return {
            errorList:{
              ...state.errorList,
              errorNationality:true
            }
          }
      }
      return state;
    })
  }

}));

export default useSearch;
