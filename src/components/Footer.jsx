import Github from "../assets/icons/github.jpg";
import Linkedin from "../assets/icons/linkedin.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sai-latha-tammana/"
            target="blank"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/sailathatammana" target="blank">
            <img src={Github} alt="github" />
          </a>
        </li>
      </ul>
      <p>2021 . Tastify</p>
    </footer>
  );
}
