import { useState } from "react";
import toast from "react-hot-toast";
import {
  createData,
  deleteIdea,
  deletePocket,
  getIdeas,
  getPocket,
  getPockets,
  updateData,
} from "../firebase/config";
export interface IinitState {
  modal: IModal;
  pocket: IPocket[];
  pocketSelected: {
    pocket: IPocket;
    ideas: IIdea[];
    lastIdea?: IIdea|null;
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
  selected: boolean;
}
export interface IUseInitialState {
  state: IinitState;
  setModal: (payload: IModal) => void;
  setPocket: (payload: IPocket) => void;
  setPockets: (payload: string) => void;
  setIdeas: (payload: string) => void;
  setIdea: (payload: IIdea) => void;
  deleteIdeaState: (payload: string) => void;
  deletePocketState: (payload: string,userId:string) => void;
  setSelectedIdea: (payload: string) => void;
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
    lastIdea: null,
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
        selected: false,
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
  const deleteIdeaState = (payload: string) => {
    console.log("deleteIdeaState", payload);
    toast.promise(
      deleteIdea(payload).then(()=>{
        setIdeas(state.pocketSelected.pocket.id);
      }),
      {
        loading: "Saving...",
        success: "Idea deleted",
        error: "Error deleting idea",
      }
    );
   
  }
  const deletePocketState = (payload: string,userId:string) => {
    console.log("deletePocketState", payload);
    toast.promise(
      deletePocket(payload).then(()=>{
        setPockets(userId);
      }),
      {
        loading: "Saving...",
        success: "Pocket deleted",
        error: "Error deleting pocket",
      }
    );
   
  }
 const setSelectedIdea = (payload: string) => {
   console.log("setSelectedIdea", payload);
   toast.promise(
    updateData("ideas",payload,{
      selected:true
    }).then(()=>{
      setIdeas(state.pocketSelected.pocket.id);
    }),
    {
      loading: "Saving...",
      success: "Idea selected",
      error: "Error selecting idea",
    }
   )
    
   
  }
  return { state, setModal, setPocket, setPockets, setIdea, setIdeas,deleteIdeaState ,deletePocketState,setSelectedIdea};

  
};
