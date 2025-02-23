import "./Card.css";
import { makeUpper } from "../../lib/utils";

export default function Card({ spriteUrl, name, types, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-image" src={spriteUrl} width={"200px"} />
      <div className="card-body">
        <div className="ball-button"></div>
        <h2>{makeUpper(name)}</h2>
        <div className="types">
          {types.map((type) => (
            <p className="type-badge" key={type}>
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
