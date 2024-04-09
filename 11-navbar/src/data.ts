import React from "react";
import { IconType } from "react-icons";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface Link {
  id: number;
  url: string;
  text: string;
}

export const links: Link[] = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export interface Social {
  id: number;
  url: string;
  icon: IconType;
}

export const social: Social[] = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: FaFacebook,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: FaTwitter,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
  {
    id: 4,
    url: "https://www.behance.net",
    icon: FaBehance,
  },
];
