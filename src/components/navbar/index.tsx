import Image from 'next/image'
import * as React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-transparent border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '250px',
            height: 'auto',
          }}
          width={120}
          height={40}
        />
      </div>
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li>Home</li>
        <li>Pricing</li>
        <li>News Room</li>
        <li>Features</li>
        <li>Contact us</li>
      </ul>
      <Link
        href="/dashboard"
        className="bg-orange px-4 py-2 rounded-sm text-white"
      >
        Free Trial
      </Link>
    </div>
  )
}
// function NavBar() {
//   return (
//     <nav className="w-full border-b border-zinc-200">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             src="/images/logo.png"
//             alt="LOGO"
//             width={140}
//             height={40}
//             className="object-contain"
//           />
//         </div>

//         {/* Menu */}
//         <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-700 font-normal">
//           <li className="cursor-pointer hover:text-orange">Home</li>
//           <li className="cursor-pointer hover:text-orange">Pricing</li>
//           <li className="cursor-pointer hover:text-orange">News Room</li>
//           <li className="cursor-pointer hover:text-orange">Features</li>
//           <li className="cursor-pointer hover:text-orange">Contact us</li>
//         </ul>

//         {/* CTA */}
//         <Link
//           href="/dashboard"
//           className="bg-orange px-4 py-2 rounded-md text-white text-sm font-semibold"
//         >
//           Free Trial
//         </Link>

//       </div>
//     </nav>
//   )
// }


export default NavBar
