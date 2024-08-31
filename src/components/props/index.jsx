import "./style.css"

export default function Card({ type, num, name, sprite, imgAlt, height }) {
    return (
      <card>
        <img src={sprite} alt={imgAlt} />
        <div className="text-wrapper">
        <p>{num}</p>
        <p>{name}</p>
        </div>
        <p>{type}</p>
        <p>{height}</p>

      </card>
    );
  }