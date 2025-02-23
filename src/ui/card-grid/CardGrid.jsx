import { useEffect, useState } from "react";
import Card from "./Card";
import getRandomPokes from "../../lib/getRandomPoke";
import { shuffleArray } from "../../lib/utils";
import "./CardGrid.css";

export default function CardGrid({ incrementScore, resetScore }) {
  const [gameNumber, setGameNumber] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const newItems = await getRandomPokes({ numPoke: 12 });
      setItems(newItems);
    }

    getItems();
  }, [gameNumber]);

  function handleClick(id) {
    if (!clickedCardIds.includes(id)) {
      setClickedCardIds([...clickedCardIds, id]);
      incrementScore();
      return;
    }

    resetScore();
    setClickedCardIds([]);
    setGameNumber(gameNumber + 1);
  }

  const shuffledItems = shuffleArray(items);

  return (
    <main>
      {shuffledItems.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          spriteUrl={item.spriteUrl}
          types={item.types}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </main>
  );
}
