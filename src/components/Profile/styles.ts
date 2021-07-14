import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 25rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-weight: 300;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
  gap: 2.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    color: inherit;
    transition: 0.2s;

    &:hover {
      color: #0077e4;
    }
  }
`;

export const Picture = styled(Image)`
  border-radius: 9999px;
`;
