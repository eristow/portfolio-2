import Button from "src/components/button";
import ButtonContainer from "src/components/button-container";

// TODO: add icons to all buttons
// TODO: make buttons appear horizontally on desktop, vertically on mobile?
// TODO: add margin below buttons
export default function Home() {
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
      </div>
    </div>
  );
}
