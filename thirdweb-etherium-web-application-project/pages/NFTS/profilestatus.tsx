import {  Web3Button, useAddress, useContract, useContractMetadata, useContractRead } from "@thirdweb-dev/react";
import HeroCard from "@/src/components/widgets/NFTS/HeroCard";
import { ERC_PROFILESTATUS_CONTRACT_ADDRESS } from "@/constant/addresses";
import Wrapper from "@/src/components/shared/Wrapper";
import { useState } from "react";
import Link from "next/link";

const ProfileStatus = () => {
    const address = useAddress();
    const { contract } = useContract( ERC_PROFILESTATUS_CONTRACT_ADDRESS );
    const { data: contractMetadata, isLoading: contractMetadaIsLoading } = useContractMetadata(contract);
    const { data: profileStatus, isLoading: profileStatusIsLoading } = useContractRead(contract, "userStatus" , [address]);

    const [status, setStatus] = useState("");

    const UpdateStatus = async () => {
        if(!profileStatus.exists) {
            await contract?.call("createStatus", [status]);
            setStatus("");
            return;
        }

        await contract?.call("UpdateStatus", [status]);

        setStatus("");
    }

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
          <h3 className="md:text-xl font-bold text-lg underline">Current Status:</h3>
          <p className={`md:text-lg font-light text-base mt-3 ${profileStatus && profileStatus.exists ? "text-green-500": "text-red-500"}`}>
            {
                profileStatusIsLoading
                ? "Loading..."
                : profileStatus && profileStatus.exists ? profileStatus.statusMessage : <span>No Status Yet</span>
            }
        </p>
        </div>
        <div className="bg-zinc-900 w-4/5 py-6 md:mx-48 h-auto px-4 md:mt-0 mt-4">
          <h3 className="md:text-xl font-bold text-lg underline">Update Your Status:</h3>
          <input 
            type="text" 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="flex flex-col mt-3 bg-slate-800 text-white rounded-md w-full py-1 outline-none"
            />
            <Web3Button
            contractAddress={ERC_PROFILESTATUS_CONTRACT_ADDRESS}
            action={UpdateStatus}
            className="!mt-3 !px-6 !py-2 !bg-primary !text-white"
            onSuccess={() => alert("Status Updated Successfully!")}
            >
            Update Status
            </Web3Button>
        </div>
        <div className="bg-zinc-900 w-4/5 py-6 md:mx-48 h-auto px-4 md:mt-0 mt-4">
        <h3 className="md:text-xl font-bold text-lg underline">Profile Status:</h3>
        <p className={`md:text-lg font-light text-base mt-3 ${profileStatus && profileStatus.exists ? "text-green-500": "text-red-500"}`}>
            {
                profileStatusIsLoading
                ? "Loading..."
                : profileStatus && profileStatus.exists
                ? "Active"
                : "In Active"
            }
        </p>
        </div>
        </div>
        </div>
    </Wrapper>
    </main>
  )
}

export default ProfileStatus;
