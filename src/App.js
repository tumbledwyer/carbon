import './app.scss'
import { Content, Theme } from '@carbon/react'

import Shell from './components/Shell'
import Login from './components/Login/Login'

const App = () => {
  return (
    <Theme theme="g90">
      <Shell />
      <Content>
        <Login />
      </Content>
    </Theme>
  )
}

export default App
