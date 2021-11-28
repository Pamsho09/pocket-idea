import { useState } from "react";
import toast from "react-hot-toast";
import {
  createData,
  getIdeas,
  getPocket,
  getPockets,
} from "../firebase/config";
export interface IinitState {
  modal: IModal;
  pocket: IPocket[];
  pocketSelected: {
    pocket: IPocket;
    ideas: IIdea[];
  };
}
export interface IPocket {
  id: string;
  name: string;
  colors: string;
  numberOfIdeas: number;
  userId: string;
}
export interface IModal {
  isOpen: boolean;
  content: string;
}
export interface IuserId {
  id: string;
  username: string;
}
export interface IIdea {
  id: string;
  title: string;
  description: string;
  pocketId: string;
}
export interface IUseInitialState {
  state: IinitState;
  setModal: (payload: IModal) => void;
  setPocket: (payload: IPocket) => void;
  setPockets: (payload: string) => void;
  setIdeas: (payload: string) => void;
  setIdea: (payload: IIdea) => void;
}
const initialState: IinitState = {
  modal: {
    isOpen: false,
    content: "",
  },
  pocket: [],
  pocketSelected: {
    pocket: {
      id: " ",
      name: "",
      colors: "",
      numberOfIdeas: 0,
      userId: "",
    },
    ideas: [],
  },
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
      createData("pocket", {
        ...payload,
      }).then(()=>{
        setPockets(payload.userId);
      }),
      {
        loading: "Saving...",
        success: "Pocket created",
        error: "Error creating pocket",
      }
    );
  };
  const setPockets = (payload: string) => {
    getPockets(payload).then((res: any) => {
      console.log("setPockets", res);
      setState({
        ...state,
        pocket: [...res],
        modal: {
          isOpen: false,
          content: "",
        },
      });
    });
  };
  const setIdeas = (payload: string) => {
    getPocket(payload).then((resPocket: any) => {
     
      getIdeas(payload).then((resIdeas: any) => {
        console.log("setIdeas", resIdeas);
        setState({
          ...state,
          pocketSelected: {
            pocket: {
              ...resPocket,
            },
           ideas: [ ...resIdeas],
          },
          modal: {
            isOpen: false,
            content: "",
          },
        });
      })})
  }

  const setIdea = (payload: IIdea) => {
    toast.promise(
      createData("ideas", {
        ...payload,
      }).then(()=>{
        setIdeas(payload.pocketId);
      }),
      {
        loading: "Saving...",
        success: "Idea created",
        error: "Error creating idea",
      }
    );
   
  };

  return { state, setModal, setPocket, setPockets, setIdea, setIdeas };
};
