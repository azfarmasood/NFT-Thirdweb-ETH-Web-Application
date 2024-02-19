import Wrapper from '@/src/components/shared/Wrapper';
import Image from "next/image";
import card1 from "@/public/images/Image2.png";
import card2 from "@/public/images/Image3.png";

const Cards = () => {
  return (
    <main>
     <div>
        <Wrapper>
        <div className="flex md:flex-row flex-col md:text-start text-center justify-between md:gap-16 md:mt-0 mt-10">
            <div className={`bg-black group md:hover:bg-gradient-to-r md:hover:from-primary md:hover:via-slate-800 flex md:flex-row flex-col items-center md:gap-4 md:p-2 md:w-2/4 `}>
              <Image src={card1} alt="an Image" className='md:w-2/4 md:h-full'/>
              <div className="md:mt-0 mt-3">
              <h1 className='md:text-3xl text-xl font-bold underline'>Ethereal Vista</h1>
              <p className="font-medium mt-2 text-justify">This NFT card, perfect for the blockchain market, showcases a stunning landscape where the digital and natural worlds converge in an explosion of color and light. Each pixel pulsates with life, symbolizing the boundless possibilities of the blockchain universe.</p>
              </div>
            </div>
            <div className={`bg-black md:mt-0 mt-4 md:w-2/4 group md:hover:bg-gradient-to-r md:hover:from-primary md:hover:via-slate-800 flex md:flex-row flex-col items-center md:gap-4 md:p-2`}>
            <Image src={card2} alt="an Image" className='md:w-2/4 md:h-full'/>
            <div className="md:mt-0 mt-3">
              <h1 className='md:text-3xl text-xl font-bold underline'>Cryptic Odyssey</h1>
              <p className="font-medium mt-2 text-justify">This NFT card, a treasure for collectors and enthusiasts alike, features an intricate maze of cryptographic patterns and symbols. It represents the complex, yet intriguing world of blockchain technology, inviting viewers to delve into the depths of digital innovation and discovery.</p>
              </div>
            </div>
        </div>
     </Wrapper>
     </div>
    </main>
  )
}

export default Cards
