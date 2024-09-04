import React from "react";
import { Header } from "../components/Layout/Header";
import { CardSection } from "../components/Dashboard/CardSection";
import { BigCardSection } from "../components/Dashboard/BigCardSection";

export function Dashboard() {
  return(
    <>
      <div>
        <CardSection/>
        <BigCardSection/>
      </div>
    </>
  );
}

