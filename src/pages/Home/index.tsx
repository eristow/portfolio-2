import Button from "src/components/Button";
import ButtonContainer from "src/components/ButtonContainer";
import { Link, useNavigate } from "react-router-dom";
import H1 from "src/components/H1";
import H2 from "src/components/H2";
import { HTMLAttributes } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaChartLine, FaMusic, FaQuestion, FaRegCircle } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { IoMdRadio } from "react-icons/io";
import { ImCross, ImSpoonKnife } from "react-icons/im";
import AppContainer from "src/components/AppContainer";
import ContentContainer from "src/components/ContentContainer";

interface HomeButtonProps extends HTMLAttributes<HTMLButtonElement> {
  path?: string;
  onClick?: () => void;
}

function HomeButton(props: HomeButtonProps) {
  return (
    <Link to={props.path ? props.path : ""}>
      <Button onClick={props.onClick ? props.onClick : () => {}}>
        <div className="flex gap-1">{props.children}</div>
      </Button>
    </Link>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <AppContainer>
      <ContentContainer className="mx-auto mb-5 mt-2">
        <H1 className="underline">My Info</H1>
        <ButtonContainer>
          <HomeButton path="https://www.linkedin.com/in/evan-ristow/">
            <CiLinkedin style={{ margin: "auto" }} /> LinkedIn
          </HomeButton>
          <HomeButton path="https://drive.google.com/file/d/1A57MxbzaK4MYmK6ZMULxY9CnHK2qBWYj/view?usp=sharing">
            <IoDocumentTextOutline style={{ margin: "auto" }} />
            Resume
          </HomeButton>
        </ButtonContainer>
      </ContentContainer>
      <ContentContainer>
        <H1 className="underline">My Work</H1>
        <div className="text-left">
          <H2>Web DAW</H2>
          <ButtonContainer>
            <HomeButton path="https://web-daw-frontend.herokuapp.com/">
              <FaMusic style={{ margin: "auto" }} />
              Web DAW Site
            </HomeButton>
            <HomeButton path="https://github.com/eristow/web-daw">
              Web DAW Front-End Code
            </HomeButton>
            <HomeButton path="https://github.com/eristow/web-daw-backend">
              Web DAW Back-End Code
            </HomeButton>
          </ButtonContainer>
          <H2>Date Night Questions</H2>
          <ButtonContainer>
            <HomeButton path="https://master.d7vp4hauoyn5j.amplifyapp.com/">
              <FaQuestion style={{ margin: "auto" }} />
              Date Night Site
            </HomeButton>
            <HomeButton path="https://github.com/eristow/date-night-coding-challenge">
              Date Night Code
            </HomeButton>
          </ButtonContainer>
          <H2>Other</H2>
          <ButtonContainer>
            <HomeButton path="https://habbit-rabbit.netlify.app">
              <GiRabbit style={{ margin: "auto" }} />
              Habbit Rabbit
            </HomeButton>
            <HomeButton onClick={() => handleRedirect("/stocks")}>
              <FaChartLine style={{ margin: "auto" }} />
              Stock App
            </HomeButton>
            <HomeButton onClick={() => handleRedirect("/recipe-calculator")}>
              <ImSpoonKnife style={{ margin: "auto" }} />
              Recipe Calculator
            </HomeButton>
            <HomeButton onClick={() => handleRedirect("/tic-tac-toe")}>
              <ImCross style={{ margin: "auto" }} />
              Tic Tac Toe
              <FaRegCircle style={{ margin: "auto" }} />
            </HomeButton>
            <HomeButton onClick={() => handleRedirect("/radio")}>
              <IoMdRadio style={{ margin: "auto" }} />
              Radio (WIP)
            </HomeButton>
          </ButtonContainer>
        </div>
      </ContentContainer>
    </AppContainer>
  );
}
