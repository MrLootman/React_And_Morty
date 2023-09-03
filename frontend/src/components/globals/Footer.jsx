import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <ul className="footer">
      <li>
        <FiFacebook />
      </li>
      <li>
        <AiOutlineInstagram />
      </li>
      <li>
        <CiTwitter />
      </li>
    </ul>
  )
};