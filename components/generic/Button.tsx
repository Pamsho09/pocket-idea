import * as React from "react";
import styled from "styled-components";

interface IProps {
  label?: string;
  action?: () => void | null;
  type?: string;
  radius?: string;
  customStyle?: any;
}
const typeButton: any = {
  primary: {
    background: "#272829",
    color: "#FFFFFF",
  },
  secondary: {
    background: "#FFFFFF",
    color: "#272829",
  },
};
const ButtonC = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background: ${(props: IProps) =>
    typeButton[props.type || "primary"].background};
  border-radius: 50px;
  font-family: Roboto;

  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 1.08px;
  text-transform: uppercase;

  color: ${(props: IProps) => typeButton[props.type || "primary"].color};
  outline: none;
  ${(props: IProps) =>
    props.type === "secondary" &&
    `
    background:transparent;
    border: 2px solid #fff;
box-sizing: border-box;
border-radius: 50px;
color: #fff;

`}
  curso: pointer;
  ${(props: IProps) => props.radius && `border-radius: 4px;`}
  ${(props: IProps) => props?.customStyle}
`;

function Button({ label, type, radius, action,customStyle }: IProps) {
  return (
    <ButtonC type={type} radius={radius} onClick={action} customStyle={customStyle||''}>
      {label}
    </ButtonC>
  );
}

export default React.memo(Button);
