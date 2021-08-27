import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../../assets/styles/globalStyles";
import { Detail } from "../../views/Detail";
import { Home } from "../../views/Home";
import { Layout } from "../Layout/Layout";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/pokemon/:id" exact component={Detail} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
};
