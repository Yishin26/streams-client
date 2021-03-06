import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui " style={{ margin: "20pt" }}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
          <Route path="/streams-client/" exact component={StreamList} />
          {/*<Route path="/" exact component={PageOne} /> HTML宣告兩個就會產生兩個併排*/}
          <Route
            path="/streams-client/streams/new"
            exact
            component={StreamCreate}
          />
          <Route
            path="/streams-client/streams/edit/:id"
            exact
            component={StreamEdit}
          />
          <Route
            path="/streams-client/streams/delete/:id"
            exact
            component={StreamDelete}
          />
          <Route
            path="/streams-client/streams/:id"
            exact
            component={StreamShow}
          />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
