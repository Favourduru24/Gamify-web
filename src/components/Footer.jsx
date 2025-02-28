import facebook from '/img/facebook.png'
 import github from '/img/github.png'
 import twitter from '/img/twitter.png'
 import discord from '/img/discord.png'
 
const Links = [
     {
        href: 'https://discord.com', icon:facebook, alt:'facebook'
     },
     {
        href:'https://github.com', icon:github, alt:'github'
     },
     {
        href:'https://twitter.com', icon:twitter, alt: 'twitter'
     },
     {
        href:'https://discord.com', icon:discord, alt: 'discord'
     }
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
         <div className='container flex flex-col mx-auto items-center justify-between gap-4 px-4 md:flex-row'>
      <p className='text-center text-sm md:text-left'>&copy; Nova 2024. All rights reserved </p>
       
       <div className='flex justify-center gap-4 md:justify-start'>
          {Links.map((link) => (
             <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white w-5 h-5'>
                   <img src={link.icon} alt={link.alt}/>
             </a>
          ))}
       </div>
         <a className='text-center text-sm hover:underline md:text-right' href='#privacy-policy'>
       Privacy Policy
         </a>
         </div>
    </footer>
  )
}

export default Footer