import Image from "next/image";
import Image1 from "@/public/images/Image1.png"
import Wrapper from '@/src/components/shared/Wrapper';

const Hero = () => {
    const HEADING = "Welcome To";
    const SPAN = "Block Chain\n";
    const HEADING2 = "NFT Market Place" 
    const PARAGRAPH1 = "An NFT Marketplace is a specialized digital platform where users can buy, sell, or trade NFTs, which are unique digital assets verified using blockchain technology.Unlike cryptocurrencies like Bitcoin or Ethereum, each NFT has a distinct, non-interchangeable identity."
  return (
    <main>
      <div className="relative">
        <div>
          <Image src={Image1} alt="an-Image" className="w-full h-97 absolute inset-0 object-cover"/>
        </div>
      <Wrapper>
      <div className="flex flex-row md:text-start text-center justify-center items-center  min-h-screen">
        <div className="relative flex-1">
          <h1 className="md:text-5xl text-3xl text-justify font-bold md:whitespace-pre-line">
            {HEADING}{" "}
            <span className="text-purple-700">{SPAN}</span>{" "}
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold md:whitespace-pre-line text-purple-700 mt-3">{HEADING2}</h1>
          <p className="md:text-xl text-justify md:w-1/13  font-bold text-base md:whitespace-pre-line mt-6">
          {PARAGRAPH1}
          </p>
        </div>
       </div>
      </Wrapper>
      </div>
    </main>
  )
}

export default Hero
