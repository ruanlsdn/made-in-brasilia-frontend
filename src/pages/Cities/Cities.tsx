import { Alphabet, CitiesCard, Navbar } from "../../components";
import "./cities.css";

type CityData = {
  title: string;
  history: string;
};

const CITIES_DATA: CityData[] = [
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    history:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    history:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!",
  },
  {
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    history:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore asperiores dolores in facilis ex distinctio quia qui deserunt. Asperiores, quibusdam! Autem tempora facere pariatur debitis. Fugit commodi ullam quo!",
  },
];

const Cities = () => {
  const ALFHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <div className="gradient-bg">
        <Navbar />
        <Alphabet path="" />
      </div>
      <div className="cities-content">
        {CITIES_DATA.map((city, index) => (
          <CitiesCard
            key={index}
            index={index}
            title={city.title}
            history={city.history}
          />
        ))}
      </div>
    </>
  );
};

export default Cities;
