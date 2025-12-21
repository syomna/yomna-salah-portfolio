import Iti from "../assets/iti.png";
import Upwork from "../assets/upwork.svg";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import flutter from "../assets/flutter.png";
import dart from "../assets/dart.png";
import firebase from "../assets/firebase.png";
import threejs from "../assets/threejs.svg";
import artigen from "../assets/projects/artigen.jpeg";
import chatty from "../assets/projects/chatty.jpeg";
import ipark from "../assets/projects/ipark.jpeg";
import AKM from "../assets/projects/AKM.jpeg";
import PenPoints from "../assets/projects/PenPoints.jpeg";
import StoneStreet from "../assets/projects/StoneStreet.jpeg";
import MyEyes from "../assets/projects/MyEyes.jpeg";
import NannyFinder from "../assets/projects/NannyFinder.jpeg";
import Azkari from "../assets/projects/Azkari.jpeg";
import GhanaFootball from "../assets/projects/GhanaFootball.jpeg";
import ShopManagment from "../assets/projects/ShopManagment.jpeg";
import BostaClone from "../assets/projects/BostaClone.jpeg";

export const MainColor = "rgba(123, 50, 255, 0.5)";
export const Grey = "#d4d0d9";
export const Skillss = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  
];

export const WorkingExperience = [
  {
    img: Upwork,
    title: "Flutter Developer",
    place: "Stone Street Syndicate",
    date: "Aug 2025 - Present",
    description: [
      "• Optimize legacy codebases and engineer new features to improve performance and scalability across mobile and web platforms.",

"• Drive UI/UX enhancements by proposing and implementing user-centric solutions that streamline complex workflows and increase overall app engagement.",

"• Provide ongoing post-release maintenance and technical support, ensuring high app stability and rapidly addressing user-reported issues.",


"• Manage a 'Casting Calls' board integration featuring Stripe/RevenueCat payments and oversee automated CI/CD pipelines via Codemagic for seamless releases."
    ],
  },
  {
    img: Upwork,
    title: "Software Developer",
    place: "Upwork",
    date: "Aug 2021 - Present",
    description: [
      "• Developed 15+ mobile applications from scratch using Flutter, delivering end-to-end solutions for diverse clients.",

      "• Collaborate closely with clients to architect seamless mobile experiences and develop highly responsive web interfaces.",

      "• Architect robust app functionality by leveraging Firebase services and integrate complex external APIs to extend app capabilities.",

      "• Partner with backend developers and UI/UX designers for user-friendly mobile and web solutions.",
    ],
  },
  {
    img: Iti,
    title: "Front-end & Cross-platform Intern",
    place: "Information Technology Institute (ITI) , Cairo University",
    date: "Mar 2023 - Jun 2023",
    description: [
      "• Worked on real-world projects, collaborating with a team of developers",
      "• Enhanced technical skills in front-end web development (HTML, CSS, JavaScript, TypeScript)",
      "• Familiarity with frameworks like Angular, React (with Redux)",
      "• Proficient in Node.js, Express.js, MongoDB",
      "• Knowledge of UI/UX principles using Figma",
      "• Experienced in cross-platform mobile app development (React Native, Flutter)",
    ],
  },
];

export const WebProjects = [
  {
    img: ShopManagment,
    title: "Shop Managment",
    subTitle:
      "A web app that allows users to easily add, edit, remove, and manage their shops, providing a seamless way to organize and update shop information.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "material ui",
        color: "#ffc8ae",
      },
      {
        name: "typescript",
        color: "#a5d6a7",
      },
      {
        name: "redux",
        color: "#ffcc80",
      },
      {
        name: "firebase",
        color: "#a5d6a7",
      },
      {
        name: "google-cloud",
        color: "#ffc8ae",
      },
    ],
    demo: "https://drive.google.com/file/d/1qDVfS7peqUMQ3iJJ8kgewB7wutWEQvIg/view?usp=drivesdk",
    github: "https://github.com/syomna/shop-crud",
  },
  {
    img: BostaClone,
    title: "Bosta Clone",
    subTitle:
      "A user-friendly web app that allows users to quickly retrieve and track shipment details in real-time.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "material ui",
        color: "#ffc8ae",
      },
      {
        name: "redux",
        color: "#ffcc80",
      },
      {
        name: "react-hooks",
        color: "#a1e9ff",
      },
      {
        name: "api-integration",
        color: "#a5d6a7",
      },
      {
        name: "localization",
        color: "#ffc8ae",
      },
    ],
    demo: "https://drive.google.com/file/d/1GAigfbeURc8FDcbZYMeGrApJc9ZXaOm0/view?usp=sharing",
    github: "https://github.com/syomna/Bosta_Task",
  },
  {
    img: artigen,
    title: "ArtiGen",
    subTitle:
      "A web app that uses AI to generate images from text or speech, offering a simple interface for creating and downloading custom images.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "material ui",
        color: "#ffc8ae",
      },
      {
        name: "eden ai",
        color: "#ffcc80",
      },
      {
        name: "react-speech-recongization",
        color: "#a5d6a7",
      },
    ],
    demo: "https://drive.google.com/file/d/1SayBubqkMEQ7JUx-kW-MgoSf0BrckSuF/view?usp=drive_link",
    github: "https://github.com/syomna/ArtiGen",
  },
  {
    img: chatty,
    title: "Chatty",
    subTitle:
      "A dynamic web app for real-time communication, featuring secure login, emojis, profile editing, and customizable dark/light modes",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "mui",
        color: "#ffc8ae",
      },
      {
        name: "nodejs",
        color: "#ffcc80",
      },
      {
        name: "mongodb",
        color: "#a5d6a7",
      },
      {
        name: "socket.io",
        color: "#ffe082",
      },
    ],
    demo: "https://drive.google.com/file/d/1rShsU0jDZ5OSrDKByA67yWjBIbRGOIQ4/view?usp=drive_link",
    github: "https://github.com/syomna/Chatty-Reactjs-Nodejs-app",
  },

  {
    img: ipark,
    title: "IPark",
    subTitle:
      "A web and mobile app offering parking solutions, allowing users to find, reserve, and pay for parking spots while managing reservations. An admin dashboard is included for managing garage approvals.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "react-native",
        color: "#a1e9ff",
      },
      {
        name: "redux-toolkit",
        color: "#ffcc80",
      },
      {
        name: "firebase",
        color: "#ffc8ae",
      },
      {
        name: "stripe",
        color: "#ffcc80",
      },
      {
        name: "mui",
        color: "#a5d6a7",
      },
      {
        name: "google-cloud",
        color: "#ffe082",
      },
    ],
    demo: "https://drive.google.com/drive/folders/1Uq7eTYdla0i_A9y6TSm7du9MjH2trya6?usp=drive_link",
    github: "https://github.com/Nader-CS/parking-system",
  },
];

export const MobileProjects = [
  {
    img: StoneStreet,
    title: "Stone Street: Book photos",
    subTitle:
"A professional photography and booking platform. I led the architectural refactor to improve performance and implemented core new features to enhance the user booking experience.",    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },

      {
        name: "stripe",
        color: "#ffcc80",
      },
      {
        name: "cloud-functions",
        color: "#a5d6a7",
      },
      {
        name: "provider",
        color: "#a5d6a7",
      },
      {
        name: "revenue-cat",
        color: "#ffc8ae",
      },
      {
        name: "code-magic",
        color: "#a5d6a7",
      },

    ],
    isApp: true,
    playStore:
      "https://play.google.com/store/apps/details?id=stone.street.app&hl=en",
    appStore:
      "https://apps.apple.com/us/app/stone-street-book-photos/id6557076325",
  },
  {
    img: PenPoints,
    title: "PenPoints - interactive spelling coach",
    subTitle:
      "An AI-powered spelling coach for children. Kids write words, upload photos, and our app uses Cloud Vision API to analyze handwriting, highlighting errors with confidence scores. Empowers parents and teachers for effective learning.",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },

      {
        name: "google-vision-api",
        color: "#ffcc80",
      },
      {
        name: "cloud-functions",
        color: "#a5d6a7",
      },
      {
        name: "open-ai-api",
        color: "#a5d6a7",
      },
      {
        name: "firebase-analytics",
        color: "#ffc8ae",
      },

      {
        name: "bloc",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore:
      "https://play.google.com/store/apps/details?id=com.mickaelrobin.wright&hl=en&pli=1",
    appStore:
      "https://apps.apple.com/eg/app/penpoints-fun-spelling-coach/id6737171584",
  },
  
  {
    img: AKM,
    title: "AKM - العبد الكريم للخرسانة",
    subTitle:
      "A powerful and user-friendly app designed for the construction industry. The app enables users to easily place orders for concrete, track real-time delivery status, and ensure the quality of received concrete.",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },
      {
        name: "api-integration",
        color: "#ffc8ae",
      },
      {
        name: "google-cloud",
        color: "#ffcc80",
      },
      {
        name: "localization",
        color: "#a5d6a7",
      },
      {
        name: "fcm",
        color: "#a1e9ff",
      },
      {
        name: "bloc",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore: "https://play.google.com/store/apps/details?id=com.sti.akm",
    appStore: "https://apps.apple.com/sa/app/akm-للخرسانة/id6476569574?l=ar",
  },
  {
    img: MyEyes,
    title: "MyEyes - helps vision impaired people",
    subTitle:
      "A mobile app designed to empower vision-impaired individuals by enhancing their independence and accessibility, helping them navigate their environment and access information with ease.",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "gemini-ai",
        color: "#ffcc80",
      },
      {
        name: "firebase-crashlytics",
        color: "#ffc8ae",
      },
      {
        name: "google-analytics",
        color: "#ffcc80",
      },
      {
        name: "text-to-speech",
        color: "#a5d6a7",
      },
      {
        name: "provider",
        color: "#a5d6a7",
      },
    ],
    demo: "https://www.youtube.com/shorts/S7HYC4YXEwA",
    github: "https://github.com/syomna/my-eyes",
  },
  {
    img: NannyFinder,
    title: "NannyFinder",
    subTitle:
      "A comprehensive mobile app for easy nanny job applications, advanced profile filtering, and seamless communication, with a user-friendly web version and an intuitive admin dashboard for efficient recruitment.",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },
      {
        name: "dynamic-links",
        color: "#ffc8ae",
      },
      {
        name: "flutter-web",
        color: "#ffcc80",
      },
      {
        name: "hosting",
        color: "#a5d6a7",
      },
      {
        name: "bloc",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore:
      "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
    appStore: "https://apps.apple.com/app/id6443669769",
  },

  {
    img: Azkari,
    title: "أذكــــاري | Azkari",
    subTitle:
      "Your daily companion on your path towards closeness to Allah. The app offers you a variety of supplications (Azkar) snd prayers (Ad'iyah) to elevate your worship and strengthen your relationship with Allah.",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "notifications",
        color: "#ffc8ae",
      },
      {
        name: "provider",
        color: "#a5d6a7",
      },
      {
        name: "clean-architecture",
        color: "#ffcc80",
      },
      {
        name: "unit-testing",
        color: "#a1e9ff",
      },
      {
        name: "code-magic",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore:
      "https://play.google.com/store/apps/details?id=com.yomna.azkar_app",
    appStore: "https://apps.apple.com/eg/app/أذكــــاري-azkari/id6479560831",
  },

  // {
  //   img: whosapp,
  //   title: "Whosapp",
  //   subTitle:
  //     "Whosapp is an innovative mobile app that revolutionizes how you discover and connect with nearby service providers. Seamlessly explore a wide range of services as providers showcase their expertise, ensuring you find the perfect match for your needs. ",
  //   tech: [
  //     {
  //       name: "flutter",
  //       color: "#a1e9ff",
  //     },
  //     {
  //       name: "firebase",
  //       color: "#ffcc80",
  //     },
  //     {
  //       name: "fcm",
  //       color: "#ffc8ae",
  //     },
  //     {
  //       name: "google-cloud",
  //       color: "#ffcc80",
  //     },
  //     {
  //       name: "bloc",
  //       color: "#a5d6a7",
  //     },
  //   ],
  //   isApp: true,
  //   playStore: "https://play.google.com/store/apps/details?id=com.whos.whosapp",
  //   appStore: "https://apps.apple.com/eg/app/whosapp-app/id1642543173",
  // },

  {
    img: GhanaFootball,
    title: "Ghana Football",
    subTitle:
      "An ultimate mobile app for football enthusiasts. Immerse yourself in live football matches and never miss a moment of the action. Stay up-to-date with the latest news, scores, and highlights, all in one convenient platform. ",
    tech: [
      {
        name: "flutter",
        color: "#a1e9ff",
      },
      {
        name: "firebase",
        color: "#ffcc80",
      },
      {
        name: "api-integration",
        color: "#ffc8ae",
      },
      {
        name: "google-analytics",
        color: "#ffcc80",
      },
      {
        name: "bloc",
        color: "#a5d6a7",
      },
    ],
    isApp: true,
    playStore:
      "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
    appStore: "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
  },
];
