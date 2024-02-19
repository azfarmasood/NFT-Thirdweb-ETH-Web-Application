import NFTSData from "@/src/components/data/NFTSData";
import Wrapper from '@/src/components/shared/Wrapper';
import { NFTSdata } from '@/src/components/data/NFTSData';
const NFTSPage = () => {
  return (
    <main>
      <Wrapper>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {NFTSdata.map((data) => (
              <div key={data.href}>
                <NFTSData
                  href={data.href}
                  contractAddress={data.contractAddress}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
      </Wrapper>
    </main>
  );
};

export default NFTSPage;
