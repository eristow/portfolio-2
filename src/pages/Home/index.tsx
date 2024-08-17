import Button from "src/components/button";
import ButtonContainer from "src/components/button-container";
import { useNavigate } from "react-router-dom";

// TODO: add icons to all buttons
export default function Home() {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="grid h-screen w-screen justify-center">
      <div className="mb-10 text-center">
        <h1>My Info</h1>
        <ButtonContainer>
          <a href="https://www.linkedin.com/in/evan-ristow/">
            <Button>LinkedIn</Button>
          </a>
          <a href="https://drive.google.com/file/d/1A57MxbzaK4MYmK6ZMULxY9CnHK2qBWYj/view?usp=sharing">
            <Button>Resume</Button>
          </a>
        </ButtonContainer>
      </div>
      <div className="text-center">
        <h1>My Work</h1>
        <h2>Web DAW</h2>
        <ButtonContainer>
          <a href="https://web-daw-frontend.herokuapp.com/">
            <Button>Web DAW Site</Button>
          </a>
          <a href="https://github.com/eristow/web-daw">
            <Button>Web DAW Front-End Code</Button>
          </a>
          <a href="https://github.com/eristow/web-daw-backend">
            <Button>Web DAW Back-End Code</Button>
          </a>
        </ButtonContainer>
        <h2>Date Night Questions</h2>
        <ButtonContainer>
          <a href="https://master.d7vp4hauoyn5j.amplifyapp.com/">
            <Button>Date Night Site</Button>
          </a>
          <a href="https://github.com/eristow/date-night-coding-challenge">
            <Button>Date Night Code</Button>
          </a>
        </ButtonContainer>
        <h2>Other</h2>
        <ButtonContainer>
          <a href="https://habbit-rabbit.netlify.app">
            <Button>Habbit Rabbit</Button>
          </a>
          <a>
            <Button onClick={() => handleRedirect("/stocks")}>Stock App</Button>
          </a>
          <a>
            <Button onClick={() => handleRedirect("/radio")}>
              Radio (WIP)
            </Button>
          </a>
          <a>
            <Button onClick={() => handleRedirect("/recipe-calculator")}>
              Recipe Calculator
            </Button>
          </a>
          <a>
            <Button onClick={() => handleRedirect("/tic-tac-toe")}>
              Tic Tac Toe
            </Button>
          </a>
        </ButtonContainer>
      </div>
    </div>
  );
}
