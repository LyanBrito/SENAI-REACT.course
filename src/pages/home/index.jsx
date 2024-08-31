import React from "react";
import PageHeader from "../../components/header";
import { PageBody } from "./style";
import PageHero from "../../components/main";
import PageCardContainer from "../../components/props/card/card";

export default function Home() {
  return (
    <PageBody>
      <PageHeader />
      <PageHero/>
      <PageCardContainer/>
    </PageBody>
  );
}
