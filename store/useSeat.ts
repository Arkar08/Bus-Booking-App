import { SeatProps } from '@/utils/constant';
import { Seats } from '@/utils/dummy';
import { create } from 'zustand';



const useSeat = create<SeatProps>((set) => ({
    choiceSeat: [] as string[],
    allSeats:Seats ,
    modalVisiable:false,

    seatClick: (seat: string) => {
        set((state) => {
                const seatExists = state.choiceSeat.includes(seat);
                const updatedSeats = seatExists
                    ? state.choiceSeat.filter((s:string) => s !== seat)
                    : [...state.choiceSeat, seat];
                return {
                    choiceSeat: updatedSeats,
                };
            
            }
        );
    },

    openModal:() => {
        set((state) => {
            return {
                modalVisiable:true
            }
        })
    },
    closeModal:() => {
        set((state) => {
            return {
                modalVisiable:!state.modalVisiable
            }
        })
    }
}));


export default useSeat;