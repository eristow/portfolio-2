import Button from "src/components/button";
import ButtonContainer from "src/components/button-container";
import { Link, useNavigate } from "react-router-dom";
import H1 from "src/components/h1";
import H2 from "src/components/h2";

type HomeButtonProps = {
  text: string;
  path?: string;
  onClick?: () => void;
};

// TODO: add icons to all buttons
export default function Home() {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  function HomeButton(props: HomeButtonProps) {
    return (
      <Link to={props.path ? props.path : ""}>
        <Button onClick={props.onClick ? props.onClick : () => {}}>
          {props.text}
        </Button>
      </Link>
    );
  }

  return (
    <>
      <div className="flex w-screen flex-grow flex-col justify-start">
        <div className="mb-5 mt-2 text-center">
          <H1 className="underline">My Info</H1>
          <ButtonContainer>
            <HomeButton
              text="LinkedIn"
              path="https://www.linkedin.com/in/evan-ristow/"
            />
            <HomeButton
              text="Resume"
              path="https://drive.google.com/file/d/1A57MxbzaK4MYmK6ZMULxY9CnHK2qBWYj/view?usp=sharing"
            />
          </ButtonContainer>
        </div>
        <div className="text-center">
          <H1 className="underline">My Work</H1>
          <div className="text-left">
            <H2>Web DAW</H2>
            <ButtonContainer>
              <HomeButton
                text="Web DAW Site"
                path="https://web-daw-frontend.herokuapp.com/"
              />
              <HomeButton
                text="Web DAW Front-End Code"
                path="https://github.com/eristow/web-daw"
              />
              <HomeButton
                text="Web DAW Back-End Code"
                path="https://github.com/eristow/web-daw-backend"
              />
            </ButtonContainer>
            <H2>Date Night Questions</H2>
            <ButtonContainer>
              <HomeButton
                text="Date Night Site"
                path="https://master.d7vp4hauoyn5j.amplifyapp.com/"
              />
              <HomeButton
                text="Date Night Code"
                path="https://github.com/eristow/date-night-coding-challenge"
              />
            </ButtonContainer>
            <H2>Other</H2>
            <ButtonContainer>
              <HomeButton
                text="Habbit Rabbit"
                path="https://habbit-rabbit.netlify.app"
              />
              <HomeButton
                text="Stock App"
                onClick={() => handleRedirect("/stocks")}
              />
              <HomeButton
                text="Radio (WIP)"
                onClick={() => handleRedirect("/radio")}
              />
              <HomeButton
                text="Recipe Calculator"
                onClick={() => handleRedirect("/recipe-calculator")}
              />
              <HomeButton
                text="Tic Tac Toe"
                onClick={() => handleRedirect("/tic-tac-toe")}
              />
            </ButtonContainer>
          </div>
        </div>
      </div>
    </>
  );
}
