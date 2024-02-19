import {  Web3Button, useAddress, useContract, useContractMetadata, useOwnedNFTs, useTotalCirculatingSupply, useTotalCount } from "@thirdweb-dev/react";
import HeroCard from "@/src/components/widgets/NFTS/HeroCard";
import { ERC_1155_CONTRACT_ADDRESS } from "@/constant/addresses";
import Wrapper from "@/src/components/shared/Wrapper";
import Link from "next/link";

const ERC1155 = () => {
    const address = useAddress();
    const { contract } = useContract(ERC_1155_CONTRACT_ADDRESS, "edition-drop");
    const { data: contractMetadata, isLoading: contractMetadaIsLoading } = useContractMetadata(contract);
    const { data: ContractNFTSupply, isLoading: ContractNFTSupplyIsLoading} = useTotalCount(contract);
    const { data:totalCirculatingSupply, isLoading: totalCirculatingSupplyIsLoading } = useTotalCirculatingSupply(contract, 0);
    const {data: ownedNFTS, isLoading: ownedNFTSIsLoading} = useOwnedNFTs(contract,address);
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
        <div className="bg-zinc-900 w-4/5 py-4 md:mx-48 h-auto px-4 ">
          <h3 className="md:text-xl font-bold text-lg underline">Purchase ERC-1155 Token:</h3>
          <p className="md:text-lg font-medium text-base mt-3">Purchase ERC-1155 NFTS For 10 Tokens To Get ERC-20 Tokens</p>
          <Web3Button
          contractAddress={ERC_1155_CONTRACT_ADDRESS}
          action={(contract) => contract.erc1155.claim(0,1)}
          onSuccess={() => alert("NFT Purchased Successfully!")}
          className="!mt-3 !px-6 !py-2 !bg-primary !text-white"
          >
            Purchase NFTS
          </Web3Button>
        </div>
        <div className="bg-zinc-900 w-4/5 py-9 md:mx-48 h-auto px-4 md:mt-0 mt-4">
          <h3 className="md:text-xl font-bold text-lg underline">NFTS Stats:</h3>
          <p className="md:text-lg font-medium text-base mt-3">Total NFTS: {ContractNFTSupplyIsLoading ? (<span>Loading...</span>):(<span>{ContractNFTSupply?.toNumber()}</span>)}</p>
          <p className="md:text-lg font-medium text-base mt-3">Total Supply: {totalCirculatingSupplyIsLoading ? (<span>Loading...</span>):(<span>{totalCirculatingSupply?.toNumber()}</span>)}</p>
        </div>
        <div className="bg-zinc-900 w-4/5 py-9 md:mx-48 h-auto px-4 md:mt-0 mt-4">
        <h3 className="md:text-xl font-bold text-lg underline">Owned NFTS:</h3>
        {ownedNFTSIsLoading ? <p className="md:text-lg font-medium text-base mt-3">Loading...</p> : (
          ownedNFTS?.map((data) => (
            <p key={data.metadata.id} className="md:text-lg font-medium text-base mt-3">Token#ID: {data.metadata.id}
            <span className="ml-4">Total Tokens Purchased: {data.quantityOwned}</span>
            </p>
          ))
        )}
        </div>
        </div>
        </div>
    </Wrapper>
    </main>
  )
}

export default ERC1155
