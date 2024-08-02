import { CardGameList, NavigationBar } from "@/components/common";
import { getRandomNumbers, shuffleArray } from "@/utils/helper";
import { gamesList } from "@data/lists";

const GameListPage = () => {
  const randomNumber = getRandomNumbers(4, gamesList.length);
  const shuffledGamesList = shuffleArray(gamesList);

  return (
    <div className="max-w-[1320px] mx-auto">
      <NavigationBar />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 animated animatedFadeInUp fadeInUp">
        {shuffledGamesList.map((item: any, index: number) => {
          return (
            <div key={index}>
              <CardGameList
                img={item.img}
                shake={randomNumber.includes(index + 1)}
                link={item.link}
                name={item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameListPage;
