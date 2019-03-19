import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne <a href="/pagetwo">PageTwo</a>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      <a href="/">PageOne</a> PageTwo
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
