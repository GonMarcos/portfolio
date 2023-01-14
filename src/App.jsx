import react, {useState} from 'react'
import "./App.css"
import Header from './components/Header';
import Skills from './components/Skills'
import ChatBot from './components/ChatBot';


function App() {

  const [darkMode, setDarkMode] = useState(false)


  return (
    <div className={`${darkMode ? "App Dark" : "App"}`}>
      <Header dark={() => setDarkMode(!darkMode)}/>
      <Skills/>
      <ChatBot/>
    </div>
  )
}

export default App
