import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/template';
import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import Plant from './components/plant';
import AddPlant from "./components/addplant";
import Recommend from "./components/recommend";

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFFFFF;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/plant/:id" element={<Plant/>}/>
					<Route path="/addplant" element={<AddPlant/>}/>
          <Route path="/recommend" element={<Recommend/>}/>
        </Routes>
        </BrowserRouter>
      </Template>
    </>
  )
}

export default App;