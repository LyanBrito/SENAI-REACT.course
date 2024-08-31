import React from "react";
import PageHeader from "../../components/header";
import { PageBody } from "./style";
import PageHero from "../../components/main";

export default function Home() {
  return (
    <PageBody>
      <PageHeader />
      <PageHero/>
    </PageBody>
  );
}
