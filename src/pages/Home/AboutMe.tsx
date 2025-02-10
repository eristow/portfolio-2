import { HTMLAttributes } from "react";
import ContentContainer from "src/components/ContentContainer";
import H1 from "src/components/H1";

type LiProps = HTMLAttributes<HTMLLIElement>;

function Li(props: LiProps) {
  return <li className="mb-2 text-left">{props.children}</li>;
}

export default function AboutMe() {
  return (
    <ContentContainer>
      <H1 className="underline">About Me</H1>
      <div className="grid w-full grid-cols-1 gap-4 p-2">
        <img
          src="https://portfolio-eristow.s3.us-east-1.amazonaws.com/evan_ristow_pic.jpg"
          alt="Evan Ristow"
          className="m-auto block max-h-64 rounded-full"
        />
        <div className="ml-4">
          <ul className="list-disc">
            <Li>
              Software Engineer with 3+ years of professional experience in
              full-stack development, DevOps, and platform engineering.
            </Li>
            <Li>
              Skilled in TypeScript, Ruby on Rails, Python, and cloud platforms
              (AWS, GCP).
            </Li>
            <Li>
              Expertise in deployment automation, API development,
              infrastructure as code, and container orchestration.
            </Li>
            <Li>
              Passionate about building efficient, scalable solutions that
              improve and simplify how people get things done.
            </Li>
            <Li>
              Hobbies:
              <ul className="ml-4 list-disc">
                <li>Music (creating and listening)</li>
                <li>Movies</li>
                <li>Video games</li>
              </ul>
            </Li>
          </ul>
        </div>
      </div>
    </ContentContainer>
  );
}
