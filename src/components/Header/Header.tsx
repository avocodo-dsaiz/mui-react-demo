import { Typography } from "@mui/material";
import * as React from 'react';

interface HeaderProps {

}

export default function Header (props: HeaderProps) {
  return <>
    <Typography variant="h4" component="h1" gutterBottom>
      Hands on Material UI with React
    </Typography>
  </>;
}