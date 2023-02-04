import { SetStateAction, useEffect, useState } from "react";
import { jokes } from "../../lib/jokes";

export default function JokeCard() {
  const [joke, setJoke] = useState<IJoke>({
    part1: "place",
    part2: "holder",
    mature: false,
  });
  const [showAnswer, setShowAnswer] = useState<SetStateAction<boolean>>(false);

  useEffect(() => {
    sendJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface IJoke {
    part1: string;
    mature: boolean;
    part2: string;
  }

  const sendJoke = () => {
    const random = Math.floor(Math.random() * 1000) + 1;
    const chosenJoke: IJoke = jokes[random];
    setJoke(chosenJoke);
  };

  return (
    <>
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="[&_p]:drop-shadow-lg h-auto text-lg bg-gray hover:cursor-pointer max-w-[40rem] rounded-xl mx-auto"
      >
        {!showAnswer && (
          <p className="h-auto p-6 text-[rgb(74,74,74)] rounded-xl bg-[rgb(244,243,243)]">
            {joke.part1}
          </p>
        )}
        {showAnswer && (
          <p
            onClick={() => {
              setShowAnswer(!showAnswer), sendJoke();
            }}
            className="h-auto p-6 text-[rgb(74,74,74)] border-[rgb(202,202,247)]  border-2 rounded-xl bg-[rgb(244,243,243)] drop-shadow-2xl"
          >
            {joke.part2}
          </p>
        )}
      </div>
    </>
  );
}
