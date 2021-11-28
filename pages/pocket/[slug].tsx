import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from "react";
import Container from "../../components/generic/Container";
import styled from "styled-components";
import Button from "../../components/generic/Button";
import CardsPocket from "../../components/CardsPocket";
import { AppContext } from "../../context/AppContext";
import { logout } from "../../firebase/config";
import useUser from "../../hook/useUser";
import { useRouter } from "next/router";
import CardsIdea from "../../components/CardsIdea";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"



// import Swiper core and required modules
import SwiperCore, {
  EffectCards
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);
const HomeC = styled.div<any>`
  width: 100%;
  height: 100vh;
  display: grid;
  color: #fff;
  gap: 2em;
  .logo {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 47px;
    line-height: 66px;
    /* or 140% */

    letter-spacing: 1px;
  }
  .user {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
    line-height: 43px;
  }
  .buttonContainer {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.2em;
  }



  .swiper {
  width: 100%;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
.swiper-slide-shadow{
  border-radius: 18px;
display: none;
}


`

function Index() {
  const { setModal, state, setIdeas }: any = useContext(AppContext);
  const user: any = useUser();
  const router = useRouter();
  const { slug } = router.query;
  const { pocketSelected } = state;
  useEffect(() => {
    const id = slug || " ";
    user && slug && setIdeas(id);
  }, [user, slug]);
  console.log(pocketSelected.pocket.colors);
  const refScroll = useRef(null);
  const [touchPosition, setTouchPosition] = useState(0);
  const handleScroll = (e: any) => {
    // console.log(e.touches[0].clientX);
  };
  const handleScrollStart = (e: any) => {
    console.log(e.touches);
    setTouchPosition(e.touches[0].clientX);
  };
  const [thumbsSwiper, setThumbsSwiper]:any = useState(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container bg={pocketSelected.pocket.colors}>
      <HomeC>
        {" "}
        <h2 className="logo">Pocket Idea</h2>
        <h3 className="user">{user && pocketSelected.pocket.name}</h3>
        <div className="buttonContainer">
          <Button
            action={() => {}}
            type="primary"
            label="Play"
            radius="true"
            customStyle={`
            background-color:#fff;
            color:${pocketSelected.pocket.colors};
            `}
          />
          <Button
            action={() => {
              console.log("click");
              setModal({ isOpen: true, content: "createIdea" });
            }}
            type="secondary"
            label="create idea"
            radius="true"
          />
        </div>
        <Swiper    effect={"cards"}  className="mySwiper">
    
    {pocketSelected.ideas.map((item: any) => (
            
            <SwiperSlide key={item.id} ><CardsIdea key={item.id} label={item.title}></CardsIdea>
            </SwiperSlide>           
              
        ))}
  </Swiper>

         
     
        <Button
          action={() => {
            logout();
          }}
          type="secondary"
          label="LOg out"
          radius="true"
        />
      </HomeC>
    </Container>
  );
}

export default React.memo(Index);
