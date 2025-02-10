import AppContainer from "src/components/AppContainer";
import MyWork from "./MyWork";
import MyInfo from "./MyInfo";
import AboutMe from "./AboutMe";

export default function Home() {
  return (
    <AppContainer>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <AboutMe />
        <MyInfo />
        <MyWork />
      </div>
    </AppContainer>
  );
}
