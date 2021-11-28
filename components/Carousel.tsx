import React, { useEffect, useState,useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { isNull } from "util";
import CardsIdea from "./CardsIdea";
const CarouselContainer = styled.div<any>`
  overflow-x: scroll;
  display: flex;
  gap: 2em;
  height: 330px;

    align-items: center;

  .container{
    width: auto;
    display: flex;
  gap: 2em;
  ${(props) => props.customStyle}
  }

`;
function CarouselComponent({ ideas, show }: any) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(ideas.length);
  const [isRepeating, setIsRepeating] = useState(ideas.length > show);
  const [touchPosition, setTouchPosition] = useState(null);
  const [translate, setTranslate] = useState('');
  const [ideasState, setIdeas] = useState(ideas);

  useEffect(() => {
    setLength(ideas.length);
    setIsRepeating(ideas.length > show);
  }, [ideas, show]);

  const handleTouchStart = (e: any) => {
    setTouchPosition(e.touches[0].clientX);
    console.log(e)
  };
  const next = () => {
    index < length - show && setIndex(index + 1);
  };
  const prev = () => {
    index > 0 && setIndex(index - 1);
  };
  const scrollRef:any = useRef(null);
  const handleTouchMove = (e: any) => {
    if (touchPosition) {
      if(e.target.offsetLeft >1000){
        console.log(e.touches[0].clientX)
        console.log('estoy en el final')
      setIdeas([...ideasState, ...ideasState]);
      }
      let diff = touchPosition - e.touches[0].clientX;
      if (diff>5) {
        next();
      }
      if (diff<-5) {
        prev();
      }
      setTouchPosition(null);
    }
  };
  const handleTransitionEnd = () => {
    
      if (index === 0) {
        setIndex(length);
      } else if (index === length + show) {
        setIndex(show);
      }
    
  };
  const renderExtraPrev = () => {
    let output = [];
    for (let indexLocal = 0; indexLocal < show; indexLocal++) {
      output.push(ideas[length - 1 - indexLocal]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let indexLocal = 0; indexLocal < show; indexLocal++) {
      output.push(ideas[indexLocal]);
    }
    return output;
  };
console.log(ideas)
  return (
    <CarouselContainer
     customStyle={translate}
      
    >
    <Carousel >
    {ideasState.map((item: any) => {
    
    return <CardsIdea key={item.id} label={item.title}></CardsIdea>;
  })}
    </Carousel>
    </CarouselContainer>
  );
}

export default CarouselComponent;
