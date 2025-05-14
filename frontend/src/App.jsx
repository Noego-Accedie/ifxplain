import { useState } from 'react'
import './App.css'

function App() {

  function analyse(){
    
  }

  return (
    <>
      <h2>ifxplain</h2>
      <div className='mainContent'>
        <div className='contentContainer'>
          <h3 className='codeBlockAnnotation'>Your code</h3>
          <div className='yourcodeContainer codeBlock'>
            <textarea className='yourCodeInput codeBlockInput' />
          </div>
          <button>Start analysis</button>
        </div>
        <div className='contentContainer'>
          <h3 className='codeBlockAnnotation'>Analysis</h3>
          <div className='analysisContainer codeBlock'></div>
        </div>
        <div className='contentContainer'>
          <h3 className='codeBlockAnnotation'>Playground</h3>
          <div className='playgroundContainer codeBlock'></div>
        </div>
      </div>
    </>
  )
}

export default App
