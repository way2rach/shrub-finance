import TopNav from "./components/TopNav";
import { Router } from "@reach/router";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./components/ConnectWallet";
import React from "react";
import Store from "./components/Store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import HomeView from "./pages/HomeView";
import PaperView from "./pages/PaperView";
import LeaderBoardView from "./pages/LeaderBoardView";
import AdoptionCenterView from "./pages/AdoptionCenterView";
import MyPaperGardenView from "./pages/MyPaperGardenView";

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_SUBGRAPH_QUERY,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.REACT_APP_ENVIRONMENT === "development",
  });

  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <ApolloProvider client={client}>
          <Store>
            <TopNav />
            <Router>
              <HomeView path="/" />
              <HomeView path="/claim" />
              <LeaderBoardView path="leaderboard" />
              <PaperView path="/nft/paper-seed/:tokenId" />
              <AdoptionCenterView path="/adoption" />
              <MyPaperGardenView path="/my-garden" />
            </Router>
          </Store>
        </ApolloProvider>
      </Web3ReactProvider>
    </div>
  );
}

export default App;