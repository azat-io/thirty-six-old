import React from 'react'

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { render } from 'react-dom'

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Yandex Sans';
    src:
      url('./fonts/yandex-sans.woff2') format('woff2'),
      url('./fonts/yandex-sans.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  ${normalize()};

  ::selection {
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryContrastColor};
  }

  html,
  body {
    font-family: 'Yandex Sans', 'Helvetica Neue', 'Segoe UI', Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 18px;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.textColor};

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  #app {
    height: 100%;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr;
  min-height: 100%;
`

const App = () => (
  <Router>
    <ThemeProvider
      theme={{
        primaryColor: '#54596e',
        primaryContrastColor: '#fff',
        textColor: 'rgba(0, 0, 0, 0.55)',
      }}
    >
      <Switch>
        <Route exact path={'/'} component={() => (
          <Container>
            <GlobalStyles />
            <div>{'It works!'}</div>
          </Container>
        )} />
        <Redirect to={'/'} />
      </Switch>
    </ThemeProvider>
  </Router>
)

render(<App />, document.getElementById('app'))
