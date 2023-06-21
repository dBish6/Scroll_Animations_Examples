import "./footer.css";
import externalIcon from "../../../assets/icons/external-link.svg";

const Footer = () => {
  return (
    <footer>
      <p>
        Created By:{" "}
        <a
          href="https://github.com/dBish6"
          target="_blank"
          rel="noopener noreferrer"
        >
          David Bishop <img src={externalIcon} alt="External" />
        </a>
      </p>
      <small>Special thanks to Open Peeps for the illustrations!</small>
    </footer>
  );
};

export default Footer;
