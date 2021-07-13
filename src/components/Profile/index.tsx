import { Container, Content, Picture } from "./styles";

import photo from "../../../public/profile_picture.jpg";

export function Profile() {
  return (
    <Container>
      <Picture src={photo} width={250} height={250} />
      <Content>
        <h1>Evandro Rodrigues</h1>
        <strong>React Developer | Data Scientist</strong>
      </Content>
    </Container>
  );
}
