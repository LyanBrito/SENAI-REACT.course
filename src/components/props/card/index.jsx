import { CardContainer, CardTexts } from "./styles";


export default function Card({ title, imgAlt, text, img }) {
  return (
    <CardContainer>
      <img src={img} alt={imgAlt} />
      <CardTexts>
        <h1>{title}</h1>
        <p>{text}</p>
      </CardTexts>
    </CardContainer>
  );
}
