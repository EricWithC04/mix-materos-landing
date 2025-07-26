import './App.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Features } from './components/Features/Features'
import { Ingredients } from './components/Ingredients/Ingredients'
import { Footer } from './components/Footer/Footer'
import { Benefits } from './components/Benefits/Benefits'
import { Contact } from './components/Contact/Contact'

function App() {

    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Features></Features>
            <Ingredients></Ingredients>
            <Benefits></Benefits>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default App
