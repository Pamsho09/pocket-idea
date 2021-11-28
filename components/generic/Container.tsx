import React,{useContext} from 'react'
import { Toaster } from 'react-hot-toast'
import styled ,{
createGlobalStyle}from 'styled-components'
import { AppContext } from '../../context/AppContext'
import Modal from '../modal/Modal'
const ContainerC = styled.div<any>`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 33px;
overflow: scroll;
background:${props => props.bg||''};
`
const GlobalStyle = createGlobalStyle`
padding: 0;
margin: 0;
font-family: 'Roboto', sans-serif;
`
function Container({children,bg}:any) {
    console.log(bg)
  const {state}:any= useContext(AppContext)
    return (
        <ContainerC bg={bg}>
            {
                children
            }
            {
state.modal.isOpen && <Modal/>
            }
            <Toaster/>
            <GlobalStyle></GlobalStyle>
        </ContainerC>
    )
}

export default Container
