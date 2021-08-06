import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import { ChakraProvider } from "@chakra-ui/react";
import ContactUsPage from "./pages/ContactUsPage";
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/contact-us" component={ContactUsPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
