import { SearchProps } from "@/utils/constant";
import { create } from "zustand";

const useSearch = create<SearchProps>((set,get) => ({
  seat: 1,
  isLocalChecked: false,
  isForeignChecked: false,
  dateData: {
    date: new Date(),
    showDate: false,
    textDate: "",
  },
  formPosition:'',
  toPosition:'',

  increaseSeat: () => {
    set((state) => {
      return { seat: state.seat + 1 };
    });
  },

  decreaseSeat: () => {
    set((state) => {
      return { seat: state.seat - 1 };
    });
  },

  localClick: () => {
    set((state) => {
      return {
        isForeignChecked: false,
        isLocalChecked: true,
      };
    });
  },

  foreignClick: () => {
    set((state) => {
      return {
        isForeignChecked: true,
        isLocalChecked: false,
      };
    });
  },

  departureTime: () => {
    set((state)=>{
        return {
            dateData:{
                ...state.dateData,
                showDate:!state.dateData.showDate
            }
        }
    })
  },
  dateChange: ({ type }: any, selectDate: any) => {
    set((state) => {
      if (type === "set") {
        return {
          dateData: {
            ...state.dateData,
            showDate: false,
            textDate: selectDate,
            date: selectDate,
          },
        };
      } else {
        console.log(state.dateData,'date')
          state.departureTime();
      }
      return state;
    });
  },
  sourceClick:(data:string) => {
    set((state)=>{
        if(data !== ''){
            return {
                formPosition:data
            }
        }
        return state;
    })
  },
  destinaionClick:(data:string) => {
    set((state)=>{
        if(data !== ''){
            return {
                toPosition:data
            }
        }
        return state;
    })
  }
}));

export default useSearch;
