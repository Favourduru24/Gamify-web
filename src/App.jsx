import About from "./components/About"
import Feartures from "./components/Feartures"
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
        <section className="z-0 min-h-screen bg-blue-500"/>
      </main>
   )
 }
 
 export default App