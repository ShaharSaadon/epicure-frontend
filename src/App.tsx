import { useState } from 'react'
import '../src/Assets/Styles/global.scss'
import {AppHeader} from './Components/AppHeader'
import {AppFooter} from './Components/AppFooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <AppHeader/>
  <AppFooter/>
    </>
  )
}

export default App
