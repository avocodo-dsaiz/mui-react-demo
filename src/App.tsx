import * as React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import Copyright from './components/Copyright/Copyright';
import Header from './components/Header/Header';
import StyledFoo from './components/StyledFoo/StyledFoo';
import StyledWProps from './components/StyledWProps/StyledFoo';
import StyledWTheme from './components/StyledWTheme/StyledFoo';
import {MainPage} from './pages/MainPage';

import HomeIcon from '@mui/icons-material/Home';
import AnchorIcon from '@mui/icons-material/Anchor';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';

import { Container, Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';

import styled from '@emotion/styled'

const Link = styled(NavLink)(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
}, props=>({color: props.color ? props.color : 'black'}))


// const linkStyle = css({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   textDecoration: 'none'
// })
// const linkStyles = css`
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   textDecoration: 'none'
// `;


const Navigation = () => {
  return <>
    <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
      <Link to="home"><HomeIcon /><div>Basic</div></Link>
      <Link to="anchor" color="pink"><AnchorIcon /><div>Styled</div></Link>
      <Link to="foo" color="lightgreen"><AutoFixHighIcon /><div>Styled with Props</div></Link>
      <Link to="flutter" color="skyblue"><FlutterDashIcon /><div>Styled with Theme</div></Link>
    </Stack>
  </>;
}

const Router = () => {
  return <>
    <Routes>
      <Route path="/">
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/home" element={<MainPage/>}></Route>
        <Route path="/anchor" element={<StyledFoo/>}></Route>
        <Route path="/foo" element={<StyledWProps/>}></Route>
        <Route path="/flutter" element={<StyledWTheme/>}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </>;
}


function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="md">
        <Box sx={{ m: 4 }}>
          <Header />
          <Box sx={{ m: 4 }}>
            <Navigation/>
          </Box>
          <Router />
          <Box sx={{ m: 4 }}>
            <Copyright />
          </Box>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
