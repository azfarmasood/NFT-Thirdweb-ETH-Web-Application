import { ThirdwebNftMedia, Web3Button, useAddress, useClaimedNFTSupply, useContract, useContractMetadata, useOwnedNFTs, useTotalCount } from "@thirdweb-dev/react";
import HeroCard from "@/src/components/widgets/NFTS/HeroCard";
import { ERC_721_CONTRACT_ADDRESS } from "@/constant/addresses";
import Wrapper from "@/src/components/shared/Wrapper";
import Link from "next/link";


const ERC721 = () => {
    const address = useAddress();
    const { contract } = useContract(ERC_721_CONTRACT_ADDRESS, "signature-drop");
    const { data: contractMetadata, isLoading: contractMetadaIsLoading } = useContractMetadata(contract);
    const {data: totalSupply, isLoading: totalSupplyIsLoading} = useTotalCount(contract);
    
    const {data: totalClaimedSupply, isLoading: totalClaimedSypplyIsLoading} = useClaimedNFTSupply(contract);

    const {data: ownedNFTs, isLoading: ownedNFTsIsLoading} = useOwnedNFTs(contract,address);

  return (
    <main>
      <Wrapper>
      <div className="w-full">
      <HeroCard
      isLoading={contractMetadaIsLoading}
      title={contractMetadata?.name!}
      description={contractMetadata?.description!}
      image={contractMetadata?.image!}
      />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center md:place-items-start place-items-center mt-10">
        <div className="bg-zinc-900 w-4/5 py-11 md:mx-48 h-auto px-4 ">
          <h3 className="md:text-xl font-bold text-lg underline mt-3">Purchase ERC-721:</h3>
          <p className="md:text-lg font-medium text-base mt-3">Purchase ERC-721 NFT For Free</p>
          <Web3Button
          contractAddress={ERC_721_CONTRACT_ADDRESS}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => alert("NFT Purchased Successfully!")}
          className="!mt-3 !px-6 !py-2 !bg-primary !text-white"
          >
            Purchase NFTS
          </Web3Button>
        </div>
        <div className="bg-zinc-900 w-4/5 py-14 md:mx-48 h-auto px-4 md:mt-0 mt-4">
          <h3 className="md:text-xl font-bold text-lg underline">NFTS State:</h3>
          {totalSupplyIsLoading ? (
            <p className="md:text-lg font-medium text-base mt-3">Loading...</p>
          ):(
            <p className="md:text-lg font-medium text-base mt-3">Total Remaning: {totalSupply?.toNumber()} </p>
          )}
          {
            totalClaimedSypplyIsLoading ? (
                <p className="md:text-lg font-medium text-base mt-3">Loading...</p>
            ):(
                <p className="md:text-lg font-medium text-base mt-3">Total Purchased: {totalClaimedSupply?.toNumber()} </p>
            )
          }
        </div>
        <div className="bg-zinc-900 w-4/5 py-17 md:mx-48 h-auto px-4 md:mt-0 mt-4">
        <h3 className="md:text-xl font-bold text-lg underline">Your Total NFTS:</h3>
        <p className="md:text-lg font-medium text-base mt-3">{ownedNFTsIsLoading ? (
            <span className="md:text-lg font-medium text-base">Loading...</span>
        ):(
            <span className="md:text-lg font-medium text-base">Total Purchase NFTS: {ownedNFTs?.length}</span>
        )}</p>
        </div>
        </div>
        <div className="mt-10 md:mx-48">
        <h3 className="md:text-3xl md:text-start text-center font-bold text-2xl underline">Owned NFTS:</h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-4 items-center gap-6 w-full">
            {ownedNFTsIsLoading ? (
                <p className="md:text-lg font-medium text-base mt-3">Loading...</p>
            ):(
                ownedNFTs?.map((NFTS) => (
                    <div className="mt-4 w-full transition duration-500 ease-in-out md:hover:scale-110 cursor-pointer"  key={NFTS.metadata.id}>
                        <Link href="/">
                        <ThirdwebNftMedia
                        metadata={NFTS.metadata}
                        className="!w-full !h-full"
                        />
                        <div className="bg-zinc-900 py-2 rounded-tl-md rounded-tr-md">
                       <h3 className="md:text-2xl font-bold text-lg px-3">{NFTS.metadata.name}</h3>
                        </div>
                        
                            <button className="bg-white text-black md:text-lg text-base font-bold rounded-bl-md rounded-br py-2 w-full">
                                STAKE NFT
                            </button>
                        </Link>
                    </div>
                ))
            )}
        </div>
        </div>
      </div>
      </Wrapper>
    </main>
  )
}

export default ERC721;
