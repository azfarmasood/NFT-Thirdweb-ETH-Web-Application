import Wrapper from "@/src/components/shared/Wrapper";
import { MediaRenderer } from '@thirdweb-dev/react';

type NFTSHeroData = {
    isLoading: boolean;
    title: string;
    description: string;
    image: string;
};

const HeroCard = (props: NFTSHeroData) => {
    return (
        <main>
            <Wrapper>
                {props.isLoading ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="loader">loading...</div>
                    </div>
                ) : (
                    <div className="flex bg-slate-900 md:h-98 md:flex-row flex-col md:mx-40 items-center gap-4  mt-10 ">
                        <MediaRenderer 
                            src={props.image}
                            className="!h-full md:!w-2/3 md:!object-cover !w-full"
                            alt={`Image for ${props.title}`}
                        />
                        <div className="md:text-start text-center md:py-0 py-4">
                            <h1 className="md:text-3xl font-extrabold  text-xl underline">{props.title}</h1>
                            <p className="md:text-xl font-bold text-lg md:mt-4 md:text-justify mt-3">{props.description}</p>
                        </div>
                    </div>
                )}
            </Wrapper>
        </main>
    );
}

export default HeroCard;
