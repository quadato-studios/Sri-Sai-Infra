import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages";
import ProjectsPage from "./pages/ProjectsPage";
import { ChakraProvider } from "@chakra-ui/react";
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/projects" component={ProjectsPage} exact />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
