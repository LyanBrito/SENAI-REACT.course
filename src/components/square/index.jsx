import "./styles.css"
import PlaceholderImg from "../main/imgs/Placeholder Image.png";
import {
  LearnButton,
  MainContainer,
  MainSubTitle,
  MainTitle,
  TextWrapper,
} from "./styles";

export default function Hero({alignment}) {
  return (
    <MainContainer className={`main-container main-container-${alignment}`}>
      <TextWrapper>
        <MainSubTitle>Feature one</MainSubTitle>
        <MainTitle>Describe benefit of feature one</MainTitle>
        <p>
          Highlight Unique Selling Proposition (USP) with a short summary of the
          key feature and how it benefits customers.
        </p>
        <LearnButton>Learn More</LearnButton>
      </TextWrapper>
      <img src={PlaceholderImg} alt="placeholder-img" />
    </MainContainer>
  );
}
