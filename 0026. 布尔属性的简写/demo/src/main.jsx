import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App boolProp />{/* 这是一种布尔属性的简写形式，相当于 boolProp={true} */}
    <App boolProp={true} />
    <App boolProp={false} />
  </StrictMode>,
)
