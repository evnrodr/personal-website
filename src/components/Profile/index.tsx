import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Container, Content, Links, Picture } from "./styles";

import photo from "../../../public/profile_picture.jpg";

export function Profile() {
  return (
    <Container>
      <Picture
        src={photo}
        alt="Foto de Evandro Rodrigues"
        width={250}
        height={250}
      />
      <Content>
        <h1>Evandro Rodrigues</h1>
        <strong>React Developer | Data Scientist</strong>
      </Content>
      <Links>
        <a href="#">
          <FaLinkedin />
          <p>LinkedIn</p>
        </a>
        <a href="#">
          <FaGithub />
          <p>GitHub</p>
        </a>
        <a href="#">
          <FaTwitter />
          <p>Twitter</p>
        </a>
      </Links>
    </Container>
  );
}
