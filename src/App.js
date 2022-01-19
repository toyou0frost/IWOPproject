import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import MainPage from './components/page/MainPage';
import Lecture from './components/page/Lecture';
import LectureProduction from './components/page/LectureProduction';

const AppStyle = styled.div`
  padding: 0;
  margin: 0;
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: black;
  }
`

function App() {
  return (
    <AppStyle>
      <Router>
        <Routes>
          <Route exact path='/' element={ <MainPage /> }/>
          <Route exact path='/LectureProduction' element={ <LectureProduction /> }/>
          <Route exact path='/Lecture:idx' element={ <Lecture />} />
        </Routes>
      </Router>
    </AppStyle>
  );
}

export default App;
