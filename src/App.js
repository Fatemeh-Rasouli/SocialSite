import React from 'react'
import{Navbar,Header,Features,Download,Subscribe,Faq,Footer} from './Components'

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Header/>
      </header>
        <Features/>
        <Download/>
        <Subscribe/>
        <Faq/>
        <Footer/>
    </main>
  )
}

export default App
