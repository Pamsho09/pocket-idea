import { useState } from "react";
import toast from "react-hot-toast";
import { createData, getPockets } from "../firebase/config";
export interface IinitState {
  modal: IModal
  pocket: IPocket[]

}
export interface IPocket {
  id: string
  name: string
  colors: string
  numberOfIdeas: number
  userId?: string
}
export interface IModal {
  isOpen: boolean,
  content: string
}
export interface IuserId {
  id: string
  username: string
}
export interface IUseInitialState {
  state: IinitState
  setModal: (payload: IModal) => void
  setPocket: (payload: IPocket) => void
  setPockets: (payload: string) => void
}
const initialState: IinitState = {
  modal: {
    isOpen: false,
    content: "",
  },
  pocket: []
};
export const useInitialState = (): IUseInitialState => {
  const [state, setState] = useState(initialState);

  const setModal = (payload: IModal) => {
    console.log("setModal", payload);
    setState({
      ...state,
      modal: { ...payload },
    });
  };


  const setPocket = (payload: IPocket) => {
    toast.promise(
      createData('pocket', {
        ...payload,
      }),
      {
        loading: 'Saving...',
        success: 'Pocket created',
        error: 'Error creating pocket',
       }
     );
   

  }
const setPockets = (payload: string) => {
  getPockets(payload).then((res: any) => {
    setState({
      ...state,
      pocket: [...res]
    })
  })

}

return { state, setModal, setPocket, setPockets };
};
