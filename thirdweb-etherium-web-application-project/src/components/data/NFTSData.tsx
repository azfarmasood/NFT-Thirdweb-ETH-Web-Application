import Link from "next/link";
import { MediaRenderer, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { ERC_20_CONTRACT_ADDRESS, ERC_721_CONTRACT_ADDRESS, ERC_1155_CONTRACT_ADDRESS, ERC_TIPJAR_CONTRACT_ADDRESS, ERC_PROFILESTATUS_CONTRACT_ADDRESS } from "@/constant/addresses";

interface ContractData {
    title: string;
    description: string;
    href: string;
    contractAddress: string;
}

const NFTSData = (props: ContractData) => {
    const { contract } = useContract(props.contractAddress);
    const { data: contractMetadata } = useContractMetadata(contract);
    return (
        <main className="flex flex-col items-center justify-center">
        <div className="bg-slate-800 w-2/3 relative rounded-lg object-contain shadow-2xl overflow-hidden mt-10">
            <Link href={`/NFTS/${props.href}`}>
                    <MediaRenderer src={contractMetadata?.image} className="transition duration-300 ease-in-out hover:scale-110 !w-full !h-full"/>
                    <div className="mt-4 px-3 py-4">
                        <h2 className="md:text-lg font-bold underline text-base">{props.title}</h2>
                        <p className="font-normal text-sm">{props.description}</p>
                    </div>
            </Link>
        </div>
        </main>
    )
};

export default NFTSData;

export interface DataContract {
    title: string;
    description: string;
    contractAddress: string;
    href: string;
}

export const NFTSdata: DataContract[] = [
    {
        contractAddress: ERC_20_CONTRACT_ADDRESS,
        title: "ERC-20",
        description: "Purchase ERC-20 Token",
        href: "erc20",
    },
    {
        contractAddress: ERC_721_CONTRACT_ADDRESS,
        title: "ERC-721",
        description: "Purchase ERC-721 Token",
        href: "erc721"
    },
    {
        contractAddress: ERC_1155_CONTRACT_ADDRESS,
        title: "ERC-1155",
        description: "Purchase ERC-1155 Token",
        href: "erc1155"
    },
    {
        contractAddress: ERC_TIPJAR_CONTRACT_ADDRESS,
        title: "ERC TIPJAR Token",
        description: "Leave a Tip on The Blockchain",
        href: "tipjar"
    },
    {
        contractAddress: ERC_PROFILESTATUS_CONTRACT_ADDRESS,
        title: "Profile Status",
        description: "Update Profile Status on Blockchain",
        href: "profilestatus"
    },
];