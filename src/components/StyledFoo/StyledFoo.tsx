import * as React from "react";
import Slider from "@mui/material/Slider";
import { experimentalStyled as styled } from "@mui/material/styles";

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }

  & .MuiSlider-thumb {
    border-radius: 1px;
  }
`;

interface StyledFooProps {

}

export default function StyledFoo (props: StyledFooProps) {
  return <>
    <Slider defaultValue={30} />
    <CustomizedSlider defaultValue={30} />
  </>;
}