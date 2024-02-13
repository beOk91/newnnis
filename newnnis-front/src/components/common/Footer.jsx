import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/score">Score</Link>
      </nav>
    </>
  );
};
export default Footer;
