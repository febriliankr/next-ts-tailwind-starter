import React, { ReactElement } from "react";
import Container from "../components/Layout/Container";
import PageContainer from "../components/Layout/PageContainer";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <Container>
      <PageContainer className="flex items-center flex-col min-h-[500px] px-3">
        <h1 className="text-4xl font-extrabold text-slate-700 mb-8">
          Next Typescript Tailwind Starter
        </h1>
        <p className="text-slate-700">
          Created by <a href="https://github.com/febriliankr" className="border-b border-orange-500">Febrilian</a>
        </p>
      </PageContainer>
    </Container>
  );
}

export default Home;
