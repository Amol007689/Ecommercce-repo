
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Login } from './components/login';
import { Route, Routes } from 'react-router-dom'
export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/Login" element={<Login />} ></Route>
    </Routes>
      
  </>

    )}
    export default App
