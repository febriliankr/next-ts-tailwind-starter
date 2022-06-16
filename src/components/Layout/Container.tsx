import React, { ReactElement } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Seo from "../SEO";
import classNames from "classnames";

interface Props {
  title?: string;
  children: ReactElement | string;
  className?: string;
}

function Container({ title, children, className = "" }: Props): ReactElement {
  return (
    <>
      <Seo title={title} />
      <Navbar />
      <div className={classNames("mt-44 sm:mt-40", className)}>{children}</div>
      <Footer />
    </>
  );
}

export default Container;
