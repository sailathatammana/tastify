import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";

// this links can be items created using a extenral json or an object from here
export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="https://www.facebook.com/" target="blank">
            <img src={Facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="blank">
            <img src={Instagram} alt="instagram" />
          </a>
        </li>
      </ul>
      <p>2021 . Tastify</p>
    </footer>
  );
}
