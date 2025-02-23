import { useEffect, useState } from "react";
import Header from "./ui/header/Header";
import CardGrid from "./ui/card-grid/CardGrid";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  if (score > bestScore) {
    setBestScore(score);
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardGrid incrementScore={incrementScore} resetScore={resetScore} />
    </>
  );
}

export default App;
