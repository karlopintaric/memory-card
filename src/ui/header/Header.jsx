import "./Header.css";

export default function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <div className="score">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
