import { Web3Button, useAddress, useContract, useContractMetadata, useTokenBalance, useTokenSupply } from "@thirdweb-dev/react";
import HeroCard from "@/src/components/widgets/NFTS/HeroCard";
import { ERC_20_CONTRACT_ADDRESS } from "@/constant/addresses";
import Wrapper from "@/src/components/shared/Wrapper";
import Link from 'next/link';

const Erc20= () => {
    const address = useAddress();
    const { contract } = useContract(ERC_20_CONTRACT_ADDRESS, "token");
    const { data: contractMetadata, isLoading: contractMetadaIsLoading } = useContractMetadata(contract);
    const {data: tokenSupply, isLoading: tokenSupplyIsLoading} = useTokenSupply(contract);
    const {data: tokenBalance, isLoading: tokenBalanceIsLoading} = useTokenBalance(contract,address);
  return (
    <main>
      <Wrapper>
      <div>
      <HeroCard
      isLoading={contractMetadaIsLoading}
      title={contractMetadata?.name!}
      description={contractMetadata?.description!}
      image={contractMetadata?.image!}
      />


      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center md:place-items-start place-items-center mt-10">
        <div className="bg-zinc-900 w-4/5 py-15 md:mx-48 h-auto px-4 ">
          <h3 className="md:text-xl font-bold text-lg underline">Token State:</h3>
          {
            tokenSupplyIsLoading ? (
              <p className="md:text-lg font-medium text-base">Loading Tokens...</p>
            ):(
              <p className="md:text-lg font-medium text-base">Total Tokens {tokenSupply?.displayValue} {tokenSupply?.symbol}</p>
            )
          }
        </div>
        <div className="bg-zinc-900 w-4/5 py-7 md:mx-48 h-auto px-4 md:mt-0 mt-4">
          <h3 className="md:text-xl font-bold text-lg underline">Token Balance:</h3>
          {tokenBalanceIsLoading ? (
            <p className="md:text-lg font-medium text-base">Loading Balance...</p>
          ):(
             <p className="md:text-lg font-medium text-base">Balance: {tokenBalance?.displayValue} {tokenBalance?.symbol}</p>
          )}
          <div>
          <Web3Button contractAddress={ERC_20_CONTRACT_ADDRESS} action={(contract) => contract.erc20.burn(10)} className="!mt-4 !text-white !px-6 !py-2 !bg-primary">
            Burn 10 Tokens
          </Web3Button>
          </div>
        </div>
        <div className="bg-zinc-900 w-4/5 py-4 md:mx-48 h-auto px-4 md:mt-0 mt-4">
        <h3 className="md:text-xl font-bold text-lg underline">Earn More Tokens:</h3>
        <p className="md:text-lg font-medium text-base">Earn More Tokens By Steaking an ERC-721 NFT</p>
        <div className="flex mt-3 gap-4">
          <Link href={"/"}>
            <button className="px-6 py-2 bg-primary">Stake ERC-721</button>
          </Link>
          <Link href={"/"}>
            <button className="px-6 py-2 bg-primary">Claim ERC-721</button>
          </Link>
        </div>
        </div>
      </div>
      </div>
      </Wrapper>
    </main>
  )
}

export default Erc20;
