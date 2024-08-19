import Button from "src/components/button";
import ButtonContainer from "src/components/button-container";
import Header from "src/components/header";
import { useNavigate } from "react-router-dom";

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
    const color = "zinc-900";
    const borderColor = "zinc-800";

    return (
      <a href={props.path ? props.path : ""}>
        <Button
          color={color}
          borderColor={borderColor}
          onClick={props.onClick ? props.onClick : () => {}}
        >
          {props.text}
        </Button>
      </a>
    );
  }

  return (
    <>
      <Header />
      <div className="grid h-screen w-screen justify-center">
        <div className="mb-10 text-center">
          <h1>My Info</h1>
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
          <h1>My Work</h1>
          <h2>Web DAW</h2>
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
          <h2>Date Night Questions</h2>
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
          <h2>Other</h2>
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
    </>
  );
}
