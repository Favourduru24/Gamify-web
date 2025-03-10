import About from "./components/About"
import Contact from "./components/Contact"
import Feartures from "./components/Feartures"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Story from "./components/Story"

 const App = () => {

   return (
     <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar/>
       <Hero/>
       <About/>
       <Feartures/>
       <Story/>
      <Contact/>
      <Footer/>
      </main>
   )
 }
 
 export default App