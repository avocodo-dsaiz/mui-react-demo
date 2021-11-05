// option 1: using emotion/css
// https://emotion.sh/docs/typescript
import { css } from '@emotion/css'
import { Typography } from "@mui/material";
import * as React from 'react';

const subtitleStyle = css({
  background: '#A5D8FF',
  color: '#36393B',
  padding: '0 2rem'
})

const subsubStyle = css`
  background: #D6EDFF;
  color: #2B85B6;
  padding: 0 2rem
`

interface HeaderProps {

}

export default function Header (props: HeaderProps) {
  return <>
    <Typography variant="h4" component="h1" gutterBottom>
      Hands on Material UI &amp; Emotion with React
    </Typography>
    <div className={css({ background: '#36393B', color: 'white', lineHeight: '2.5rem', padding: '0 2rem' })} >Hello Emotion</div>
    <div className={subtitleStyle} >Hello Emotion</div>
    <div className={subsubStyle} >Hello Emotion</div>
  </>;
}