import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AppContext } from "../context/AppContext";
import { useInterval } from "../hook/useInterval";
import CardsIdea from "./CardsIdea";

const CarouselContainer = styled.div<any>`
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  padding: 10px;
  .container {
    position: relative;
    width: 100%;
    height: 60vh;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 10px;
    transition: all 1s ease;
    .close {
      position: absolute;
      width: 40px;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    .carousel {
      width: 100%;
      display: flex;
      gap: 30px;
      align-items: center;
      justify-content: center;
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;

      .button {
        width: 30px;
        height: auto;

        img {
          width: 100%;
        }
      }
    }
  }
`;
interface IProps{
  action:()=>void
}
function CarouselComponent({action}:IProps) {
  const { state ,setSelectedIdea}: any = useContext(AppContext);
  const [ideas,setIdeas]:any = useState(null);
  const [item, setItem]:any = useState(null);
  const [count, setCount]: any = useState(0);
  const [random, setRandom]: any = useState(null);
  const [isOpen, setIsOpen]: any = useState(true);
  const [timer, setTimer]: any = useState(0);
  useEffect(() => {
    setIdeas(state.pocketSelected.ideas.filter((item:any) => !item.selected));
  } ,[state])
  if (random === null && ideas) {
    setRandom(Math.floor(Math.random() * (ideas.length - 1)));
  }
  useInterval(
    () => {
      setItem(ideas[count]);

      if (count === ideas.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
      if (timer >= 5000 && count === random) {
        setTimer(0);
        setIsOpen(false);
      } else {
        setTimer(timer + 300);
      }
    },
    isOpen ? 100 : null
  );
  useEffect(() => {
  
  }, [])
  console.log({
    random: random,
    pocketSelected: ideas,
    count: count,
  });
  const handleSelected = () => {

    setSelectedIdea(ideas[count].id);
    action();
  }
  const ಠ_ರೃ = () => {
    setRandom(null);
    setTimer(0);
    setIsOpen(true);
  };
  return (
    <CarouselContainer>
      <div className="container">
        <div className="carousel">
          {item && (
            <CardsIdea
              key={item.id}
              id={item.id}
              label={item.title}
            ></CardsIdea>
          )}
        </div>
        {!isOpen && (
          <div className="buttons">
            <div className="button">
              <img src="/icons/retry.svg" alt="" onClick={ಠ_ರೃ} />
            </div>
            <div>
              <div className="button" onClick={handleSelected}>
                <img src="/icons/check.svg" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </CarouselContainer>
  );
}

export default CarouselComponent;
