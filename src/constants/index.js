import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  express,
  java,
  cpp,
  android,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AR Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    title: "React JS",
    iconBg: "#383E56",
    icon: reactjs,
  },
  {
    title: "Node JS",
    iconBg: "#383E56",
    icon: nodejs,
  },
  {
    title: "Express JS",
    iconBg: "#383E56",
    icon : express
  },
  {
    title: "MongoDB",
    iconBg: "#383E56",
    icon: mongodb,
  },

  {
    title: "Redux Toolkit",
    iconBg: "#383E56",
    icon: redux,
  },

  {
    title: "Android Studio",
    iconBg: "#383E56",
    icon: android,
  },

  {
    title: "Tailwind CSS",
    iconBg: "#383E56",
    icon: tailwind,
  },

  {
    title: "HTML 5",
    iconBg: "#383E56",
    icon: html,
  },
  {
    title: "CSS 3",
    iconBg: "#383E56",
    icon: css,
  },
  {
    title: "JavaScript",
    iconBg: "#383E56",
    icon: javascript,
  },

  {
    title: "C++",
    iconBg: "#383E56",
    icon: cpp,
  },
  {
    title: "Java",
    iconBg: "#383E56",
    icon: java,
  },
  {
    title: "git",
    iconBg: "#383E56",
    icon: git,
  },
];

const projects = [
  {
    name: "E-Commerce Web application ",
    description:
      "A full stack web application that has all the basic features and functions such as product-list, cart, order checkout, user profile, admin panel. The application also comes with user authentication, payment gateway and email system along with invoice. ",
    tags: [
      {
        name: "M E R N stack",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Passport JWT,auth",
        color: "blue-text-gradient",
      },
      {
        name: "Payment using Stripe",
        color: "green-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Priyanshuxchaudhary",
  },
  {
    name: "Augmented Reality Demonstrator Android Application",
    description:
      "This is an android application that has the ability to render 3-D models in reality, anchor videos on augmented images and render videos in 2-D environment space.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Google Sceneform SDK ",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Priyanshuxchaudhary/AugmentedReality_Demonstrator_Android_Application",
  },
  {
    name: "Tour and Travels Web Application",
    description:
      "This is a simple front-end project with tour and travels description along with user authentication",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Priyanshuxchaudhary/Tour-and-Travels-Web-application",
  },
  {
    name: "Brick-breaker Ball Game ",
    description:
      "This is a simple game where bricks are constructed in random quantity. These player has to break the bricks using a ball and sliding bar. ",
    tags: [
      {
        name: "Java Swing",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Priyanshuxchaudhary/SimpleBrickBreakerGame",
  },
];

export { services, technologies, projects };
