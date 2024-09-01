import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Home />
  </>
)
