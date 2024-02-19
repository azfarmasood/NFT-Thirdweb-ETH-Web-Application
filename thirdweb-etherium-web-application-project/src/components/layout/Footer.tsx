import Link from "next/link";
import Logo from "@/public/images/Logo.jpg";
import Image from "next/image";
import Wrapper from '@/src/components/shared/Wrapper';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 text-white bg-gradient-to-l py-2.5 from-slate-900 via-primary mt-28">
      <Wrapper>
      <div className="flex md:flex-row flex-col items-center md:justify-between justify-center gap-y-4  py-16">
        <div>
            <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="an-Image" className="w-16 h-16 rounded-full object-cover"/>
            <p className="md:text-lg font-bold -tracking-tight">NFT MARKET</p>
            </Link>
        </div>
 
        <div className="max-w-md">
        <p className="md:text-lg text-base md:text-justify text-center font-medium">Ethereum, a decentralized, open-source blockchain platform known for its native cryptocurrency, Ether (ETH).</p>
        </div>

        <small className="duration-200 md:text-lg text-base font-bold">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

      </div>
        </Wrapper>
    </footer>
  );
}