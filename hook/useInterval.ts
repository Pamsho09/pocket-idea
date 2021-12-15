import  {useRef,useEffect }from "react";

export const useInterval = (callback:()=>void, delay:number|null) => {
    const intervalId:any = useRef(null);
    const savedCallback = useRef(callback);
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      const tick = () => savedCallback.current();
  
      if (typeof delay === "number") {
        intervalId.current = window.setInterval(tick, delay);
  
        return () => window.clearInterval(intervalId.current);
      }
    }, [delay]);
  
    return intervalId.current;
  };
  