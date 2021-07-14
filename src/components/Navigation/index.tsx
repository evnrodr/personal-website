import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Page } from "./styles";

export function Navigation() {
  const [currentPage, setCurrentPage] = useState("about");
  const router = useRouter();

  function handleChangePage(pageName: string) {
    setCurrentPage(pageName === "/" ? "about" : pageName);
    router.push(pageName);
  }

  return (
    <Container>
      <Page selected={currentPage} onClick={() => handleChangePage("/")}>
        About
      </Page>
      <Page selected={currentPage} onClick={() => handleChangePage("skills")}>
        Skills
      </Page>
      <Page selected={currentPage} onClick={() => handleChangePage("projects")}>
        Projects
      </Page>
      <Page selected={currentPage} onClick={() => handleChangePage("other")}>
        Other
      </Page>
    </Container>
  );
}
