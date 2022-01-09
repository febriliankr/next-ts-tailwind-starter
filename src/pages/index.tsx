import React, { ReactElement } from "react";
import Container from "../components/Layout/Container";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <Container>
      <div className="max-w-6xl mx-auto">
        <main className="max-w-5xl mx-auto my-10 mr-0">
          <div className="flex items-center">
            <div className="pl-6">
              <p className="text-xl text-blue-500">
                Next Typescript Tailwind Starter
              </p>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
}

export default Home;
