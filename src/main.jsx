
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import { TaskProvider } from './components/Context/Context';


createRoot(document.getElementById('root')).render(<TaskProvider><App /></TaskProvider>)
