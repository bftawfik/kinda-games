import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import type { typeSocialIcons } from "../../Types";

const socialIcons: typeSocialIcons = [
  {
    name: "Home",
    url: "/",
    type: "internal",
    icon: faGlobe,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    type: "external",
    icon: faInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    type: "external",
    icon: faFacebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    type: "external",
    icon: faTwitter,
  },
];

export default socialIcons;
