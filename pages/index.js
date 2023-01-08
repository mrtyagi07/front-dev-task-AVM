import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React from "react";

import {
  AirQuality,
  Audio,
  Displays,
  Lighting,
  Temperature,
} from "../components";

import logo from "../public/logo.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend-Developer-Task</title>
        <meta name="description" content="Frontend-Developer-Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="container mx-auto px-5 py-24">
          <div className="flex w-full justify-center ">
            <Image
              src={logo}
              className="mb-12"
              alt="logo"
              height={150}
              width={150}
            />
          </div>
          <div className="grid grid-flow-row grid-rows-[200px,200px,200px] items-center lg:grid-cols-[350px,350px,350px] lg:px-[150px] ">
            <AirQuality />
            <Temperature />
            <Audio />
            <Displays />
            <Lighting />
          </div>
        </div>
      </section>
    </div>
  );
}
