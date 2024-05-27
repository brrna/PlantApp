import './App.css'
import Header from '../src/component/header/Header.jsx'
import Footer from  "../src/component/footer/Footer.jsx"
import Home from './pages/Home.jsx'
import Main from './pages/main/Main.jsx'
import About from './pages/about/About.jsx'
import Developers from './pages/Developers/Developers.jsx'

function App() {

  return (
    <>
         <Home/>
        <About/>
        <Main />
        <Developers/>
        
    </>
  )
}

export default App
