import React, { ReactElement } from "react";
import Container from "../components/Layout/Container";
import PageContainer from "../components/Layout/PageContainer";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <Container>
      <PageContainer>
        <div className="flex items-center">
          <div className="pl-6">
            <p className="text-xl text-blue-500">
              Next Typescript Tailwind Starter
            </p>
          </div>
        </div>
      </PageContainer>
    </Container>
  );
}

export default Home;
