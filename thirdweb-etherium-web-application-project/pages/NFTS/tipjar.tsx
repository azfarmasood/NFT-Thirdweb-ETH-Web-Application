import {  Web3Button, useAddress, useContract, useContractMetadata, useContractRead } from "@thirdweb-dev/react";
import HeroCard from "@/src/components/widgets/NFTS/HeroCard";
import { ERC_TIPJAR_CONTRACT_ADDRESS } from "@/constant/addresses";
import Wrapper from "@/src/components/shared/Wrapper";
import Link from "next/link";
import { ethers } from "ethers";

const TIPJAR = () => {
    const address = useAddress();
    const { contract } = useContract(ERC_TIPJAR_CONTRACT_ADDRESS);
    const { data: contractMetadata, isLoading: contractMetadaIsLoading } = useContractMetadata(contract);
    const { data: tipJarBalance, isLoading: tipJarBalanceIsLoading } = useContractRead(contract, "getbalance");
    const { data: owner, isLoading: ownerIsLoading } = useContractRead(contract, "owner");
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
        <div className="bg-zinc-900 w-4/5 py-6 md:mx-48 h-auto px-4 ">
          <h3 className="md:text-xl font-bold text-lg underline">Leave a Tip:</h3>
          <p className="md:text-lg font-medium text-base mt-3">Note: <span className="text-primary">Tips in MATIC Tokens and Record it on the Block Chain</span></p>
          <Web3Button
          contractAddress={ERC_TIPJAR_CONTRACT_ADDRESS}
          action={(contract) => contract.call(
            "tip",
            [],
            {
                value: "1000000000000000",
            }
          )}
          className="!mt-3 !px-6 !py-2 !bg-primary !text-white"
          onSuccess={() => alert("Tip Success Fully Received")}
          >
            {`Tip (0.001 MATIC)`}
          </Web3Button>
        </div>
        <div className="bg-zinc-900 w-4/5 py-16 md:mx-48 h-auto px-4 md:mt-0 mt-4">
          <h3 className="md:text-xl font-bold text-lg underline">Tip Jar Balance:</h3>
          <p className="md:text-lg font-medium text-base mt-3">{tipJarBalanceIsLoading ? "Loading..." : `Total Tips: ${ethers.utils.formatEther(tipJarBalance)} MATIC`}</p>
        </div>
        <div className="bg-zinc-900 md:w-11/12 w-4/5 py-14 md:mx-48 h-auto px-4 md:mt-0 mt-4">
        <h3 className="md:text-xl font-bold text-lg underline">Withdraw Tips From Tip Jar Balance:</h3>
        {ownerIsLoading ? <p className="md:text-lg font-medium text-base mt-3">Loading...</p> : owner === address ? (
            <Web3Button
            contractAddress={ERC_TIPJAR_CONTRACT_ADDRESS}
            action={(contract) => contract.call(
                "withdrawTips",
            )}
            onSuccess={() => alert("Tips Withdraw Successfully!")}
            className="!mt-3 !px-6 !py-2 !bg-primary !text-white"
            >
            Withdraw Tips
            </Web3Button>
        ):(
            <p className="md:text-lg font-medium text-base mt-3">Only The Owner Can Withdraw His Balance</p>
        )}
        </div>
        </div>
        </div>
    </Wrapper>
    </main>
  )
}

export default TIPJAR;
