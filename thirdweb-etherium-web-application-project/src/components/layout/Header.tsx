import Logo from "@/public/images/Logo.jpg";
import Image from "next/image";
import Wrapper from "@/src/components/shared/Wrapper";
import HeaderNavlinksData from "@/src/components/data/headerNavlinksData";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Data } from "@/src/components/data/headerNavlinksData";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-filter backdrop-blur-md z-10">
        <div className="bg-gradient-to-l py-2.5 from-slate-900 via-primary">
      <Wrapper>
          <div className="flex justify-between items-center">
           <div>
            <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="an-Image" className="w-16 h-16 rounded-full object-cover"/>
            <p className="md:text-lg font-bold -tracking-tight">NFT MARKET</p>
            </Link>
           </div>
           <ul className="flex items-center md:text-lg text-sm font-medium gap-6">
           {
            Data.map((data) => (
              <li key={data.id} className="hover:text-purple-300 duration-500">
              <HeaderNavlinksData href={data.href} title={data.title}/>
              </li>
            ))
           }
           <ConnectWallet 
            className={`!bg-gray-800 !font-medium !text-white hover:!bg-primary !duration-500 hover:!duration-500 !rounded-xl`} 
            btnTitle="Connect Your Wallet"/>
           </ul>
          </div>
       </Wrapper>
        </div>
    </header>
  )
}

export default Header
