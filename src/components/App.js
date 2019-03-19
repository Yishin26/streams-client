import React from "react";
import { BrowserRouter, Route ,Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne {/*<a href="/pagetwo">PageTwo</a>*/}  
      <Link to='/pagetwo'>PageTwo</Link>
    </div>
  );
};
//Bad to use anchor tag
const PageTwo = () => {
  return (
    <div>
      <Link to="/">PageOne</Link> PageTwo
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          {/*<Route path="/" exact component={PageOne} /> HTML宣告兩個就會產生兩個併排*/}
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
