import { useState } from "react";
const initialState = {
  modal: {
    isOpen: true,
    content: "",
  },
  pocket: [
    {
      id: 1,
      title: "title",
      total: 10,
      complated: 5,
      bg: "red",
    },

    {
      id: 2,
      title: "projects for stream",
      total: 10,
      compalted: 5,
      bg: "blue",
    },
    {
      id: 3,
      title: "video tiktok",
      total: 10,
      compalted: 5,
      bg: "green",
    },
  ],
};
export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setModal = (payload: { isOpen: boolean; content: string }) => {
    setState({
      ...state,
      modal: payload,
    });
  };
  return { state,setModal };
};
