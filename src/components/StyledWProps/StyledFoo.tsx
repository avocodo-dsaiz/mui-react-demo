import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const CustomizedSlider = styled((props: any) => (
  <Slider componentsProps={{ thumb: { className: 'xxx' } }} {...props} />
))`
  color: #2222bb;

  :hover {
    color: #2e8b57;
  }

  & .xxx {
    border-radius: 1px;
  }
`;

export default function StyledFoo () {
  return (
    <div>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={50} />
    </div>
  );
}