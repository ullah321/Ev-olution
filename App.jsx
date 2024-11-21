import { useEffect, useState } from "react";
import Background from './Components/Background/Background';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"},
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {return count === 2 ? 0 : count + 1})
    }, 3000);
  }, []);

  return (
    <div>
      <Background isPlay={isPlay} heroCount={heroCount} />
      <Navbar />
      <Hero
        setIsPlay={setIsPlay}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        isPlay={isPlay}
      />
    </div>
  );
}

export default App
