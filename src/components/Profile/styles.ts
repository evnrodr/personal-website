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
`;

export const Picture = styled(Image)`
  border-radius: 9999px;
`;
