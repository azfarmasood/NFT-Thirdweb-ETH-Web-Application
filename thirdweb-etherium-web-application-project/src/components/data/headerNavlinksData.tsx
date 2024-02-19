import Link from "next/link"

interface Iprop {
    title: string;
    href: string;
}

const HeaderNavlinksData:React.FC<Iprop> = ({title, href}) => {
  return (
    <Link href={href}>
      {title}
    </Link>
  )
}

export default HeaderNavlinksData

type NavData = {
    id: number;
    title: string;
    href: string;
}

export const Data:NavData[] = [
 {
    id: 1,
    title: "Home",
    href: "/"
 },
 {
    id: 2,
    title: "NFTS",
    href: "/NFTS"
 },
]