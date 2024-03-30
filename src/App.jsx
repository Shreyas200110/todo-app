import { useState } from 'react'
import './App.css'
import OverallWrapper from './components/Overall_Wrapper/OverallWrapper'
import { RecoilRoot } from 'recoil'
function App() {

  return (
    <RecoilRoot>
      <div>
        <OverallWrapper></OverallWrapper>
      </div>
    </RecoilRoot>
  )
}

export default App
