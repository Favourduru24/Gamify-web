import { useEffect, useRef, useState } from "react"
import Button from "./Button";

const Navbar = () => {

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null)

    const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']

    const toggleAudioIndicator = () => {
     setIsAudioPlaying((prev) => !prev)

     setIndicatorActive((prev) => !prev)
    }

    const [isAudioPlaying, setIsAudioPlaying]  = useState(false)

    const [isIndicatorActive, setIndicatorActive] = useState(false)

    useEffect(() => {
    if(isAudioPlaying) {
        audioElementRef.current.play()
    }else{
        audioElementRef.current.pause()
    }
    },[isAudioPlaying])

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2  w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
     <img src="/img/logo.png" alt="logo" className="w-10"/>
      <Button
      id="product-button"
      title="Products"
      containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
      />
    </div>
    <div className="flex h-full items-center">
      <div className="hidden md:block">
         {navItems.map((item) => (
            <a className="nav-hover-btn" key={item} href={`#${item.toLowerCase()}`}>{item}</a>
         ))}
      </div>
      <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
        <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop/>
             {[1, 2, 3, 4].map((bar) =>(
                <div className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} key={bar} style={{animationDelay: `${bar * 0.1}s`}}/>
             ))}
        
      </button>
    </div>
    </nav>
    </header>
    </div>
  )
}

export default Navbar