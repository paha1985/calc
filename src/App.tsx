<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
import './App.css'
import {ConfigProvider} from 'antd';
import {ANT_THEME_CONFIG} from 'src/constants/configTheme.ts';
import {CommonLayout} from 'src/components/CommonLayout';
import {Calculator} from 'src/components/Calculator';

function App() {

  return (
    <ConfigProvider theme={ANT_THEME_CONFIG}>
      <CommonLayout>
        <Calculator />
      </CommonLayout>
    </ConfigProvider>
>>>>>>> development
  )
}

export default App
