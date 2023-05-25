import Header from "./components/Header";
import Section from "./components/Section";
function App() {
  return (
    <>
      <Header />
      <Section
        h1={"Model S"}
        p={"Order Online For Touchless Delivery"}
        img={"model-s.jpg"}
        rightValue={"Test Drive"}
      />
      <Section
        h1={"Model X"}
        p={"Order Online For Touchless Delivery"}
        img={"model-x.jpg"}
        rightValue={"Test Drive"}
      />{" "}
      <Section
        h1={"Model 3"}
        p={"Order Online For Touchless Delivery"}
        img={"model-3.jpg"}
        rightValue={"Test Drive"}
      />
      <Section
        h1={"Model Y"}
        p={"Order Online For Touchless Delivery"}
        img={"model-y.jpg"}
        rightValue={"Test Drive"}
      />{" "}
      <Section
        h1={"Solar Panel"}
        p={"Order Online For Touchless Delivery"}
        img={"solar-panel.jpg"}
        rightValue={"Learn More"}
      />{" "}
      <Section
        h1={"Solar Roof"}
        p={"Order Online For Touchless Delivery"}
        img={"solar-roof.jpg"}
        rightValue={"Learn More"}
      />
    </>
  );
}

export default App;
