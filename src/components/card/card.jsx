import Card from ".";
import { CardWrapper } from "./styles";

export default function PageCardContainer() {
  return (
    <CardWrapper>
      <Card
        img="https://github.com/user-attachments/assets/f02647a0-0ac3-458f-8776-29fae925674b"
        title="Highlight benefit one"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      />
      <Card
        img="https://github.com/user-attachments/assets/f02647a0-0ac3-458f-8776-29fae925674b"
        title="Highlight benefit two"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      />
      <Card
        img="https://github.com/user-attachments/assets/f02647a0-0ac3-458f-8776-29fae925674b"
        title="Highlight benefit three"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      />
    </CardWrapper>
  );
}
