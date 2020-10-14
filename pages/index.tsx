import * as React from "react";
import Head from "next/head";
import Login from "../components/auth/Login";

const Home = () => {
   
  return (
    <div className="w-100 h-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex screen  center">
        <Login />
      </main>
    </div>
  );
};

export default Home;
