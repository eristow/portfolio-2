import ButtonContainer from "src/components/ButtonContainer";
import ContentContainer from "src/components/ContentContainer";
import HomeButton from "./HomeButton";
import {
  FaChartLine,
  FaGithubAlt,
  FaQuestion,
  FaRegCircle,
} from "react-icons/fa";
import H2 from "src/components/H2";
import { ImCross, ImSpoonKnife } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import H1 from "src/components/H1";

export default function MyWork() {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <ContentContainer>
      <H1 className="underline">My Work</H1>
      <div className="text-left">
        <H2>Featured Projects</H2>
        <ButtonContainer>
          <HomeButton path="https://github.com/eristow/portfolio-2">
            <FaGithubAlt style={{ margin: "auto" }} /> Portfolio Code
          </HomeButton>
          <HomeButton path="https://github.com/eristow/battleship">
            <FaGithubAlt style={{ margin: "auto" }} /> Battleship Code
          </HomeButton>
          <HomeButton path="https://github.com/eristow/resume-experience">
            <FaGithubAlt style={{ margin: "auto" }} /> Resume Experience Code
          </HomeButton>
        </ButtonContainer>
        <H2>Small Apps</H2>
        <ButtonContainer>
          <HomeButton onClick={() => handleRedirect("/tic-tac-toe")}>
            <ImCross style={{ margin: "auto" }} />
            Tic Tac Toe
            <FaRegCircle style={{ margin: "auto" }} />
          </HomeButton>
          <HomeButton onClick={() => handleRedirect("/recipe-calculator")}>
            <ImSpoonKnife style={{ margin: "auto" }} />
            Recipe Calculator
          </HomeButton>
          <HomeButton onClick={() => handleRedirect("/stocks")}>
            <FaChartLine style={{ margin: "auto" }} />
            Stock App
          </HomeButton>
        </ButtonContainer>
        <H2>Date Night Questions</H2>
        <ButtonContainer>
          <HomeButton path="https://master.d7vp4hauoyn5j.amplifyapp.com/">
            <FaQuestion style={{ margin: "auto" }} />
            Date Night Site
          </HomeButton>
          <HomeButton path="https://github.com/eristow/date-night-coding-challenge">
            <FaGithubAlt style={{ margin: "auto" }} /> Date Night Code
          </HomeButton>
        </ButtonContainer>
      </div>
    </ContentContainer>
  );
}
