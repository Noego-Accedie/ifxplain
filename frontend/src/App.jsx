import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[test, setTest] = useState('');

  useEffect(()=> {
    fetch('http://localhost:8080/api/hello')
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.error('API error:', err))
  }, []);

  console.log(test)
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
          <div className='analysisContainer codeBlock'>
            <p>{test}</p>
          </div>
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
