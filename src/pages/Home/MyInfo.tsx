import ButtonContainer from "src/components/ButtonContainer";
import ContentContainer from "src/components/ContentContainer";
import H1 from "src/components/H1";
import HomeButton from "./HomeButton";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import H2 from "src/components/H2";

export default function MyInfo() {
  return (
    <ContentContainer className="mx-auto mb-5 mt-2">
      <H1 className="underline">My Info</H1>
      <ButtonContainer>
        <HomeButton path="https://github.com/eristow">
          <FaGithub style={{ margin: "auto" }} /> GitHub
        </HomeButton>
        <HomeButton path="https://www.linkedin.com/in/evan-ristow/">
          <CiLinkedin style={{ margin: "auto" }} /> LinkedIn
        </HomeButton>
        <HomeButton path="https://portfolio-eristow.s3.us-east-1.amazonaws.com/evan_ristow_resume.pdf">
          <IoDocumentTextOutline style={{ margin: "auto" }} />
          Resume
        </HomeButton>
      </ButtonContainer>
      <H2>Certifications</H2>
      <div className="flex justify-center md:grid-cols-2">
        <a href="https://www.credly.com/badges/990b3c40-4b8d-4549-b89c-4f7a515eb562/public_url">
          <img
            src="https://portfolio-eristow.s3.us-east-1.amazonaws.com/hashicorp-certified-terraform-associate-003.png"
            alt="HashiCorp Certified: Terraform Associate (003)"
            className="size-48"
          />
        </a>
      </div>
    </ContentContainer>
  );
}
