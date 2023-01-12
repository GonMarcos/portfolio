import react, {useState} from 'react'
import Header from './components/Header';
import Skills from './components/Skills'
import "./App.css"


function App() {

  const [darkMode, setDarkMode] = useState(false)


  return (
    <div className={`${darkMode ? "App Dark" : "App"}`}>
      <Header dark={() => setDarkMode(!darkMode)}/>
      <Skills/>
    </div>
  )
}

export default App
