import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode removed — it double-invokes useEffect in dev,
// which creates competing RAF loops and causes canvas flicker.
createRoot(document.getElementById('root')).render(<App />)
