import { EmailButton, EmailInput, EmailText, EmailWrapepr, MainContainer, MainTitle, TextWrapper } from "./style";
import PlaceholderImg from "./imgs/Placeholder Image.png"

export default function PageHero() {
  return (
    <MainContainer>
      <TextWrapper>
        <MainTitle>Resonate with the visitor's problem</MainTitle>
        <p>Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.</p>
        <EmailWrapepr>
            <label htmlFor="">
                <EmailInput placeholder="Enter your email" type="email" name="asdfghj" id="sdfghjk" />
            </label>
          <EmailButton>Try it for free</EmailButton>
        </EmailWrapepr>
          <EmailText>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</EmailText>
      </TextWrapper>
      <img src={PlaceholderImg} alt="placeholder-img" />
    </MainContainer>
  );
}
