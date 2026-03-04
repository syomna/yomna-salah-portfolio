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
import { 
  CodeRounded, 
  TerminalRounded, 
  CloudQueueRounded, 
  ArchitectureRounded,
} from "@mui/icons-material";

export const skillCategories = [
  {
    title: "Core Development",
    icon: <CodeRounded />,
    skills: ["Flutter", "Dart", "SwiftUI (Native iOS)", "JavaScript", "React.js", "Node.js"],
  },
  {
    title: "Architecture & Tools",
    icon: <ArchitectureRounded />,
    skills: ["Clean Architecture", "MVVM", "BLoC", "Provider", "SOLID Principles", "Dependency Injection", "Unit Testing"],
  },
  {
    title: "Cloud & Backend",
    icon: <CloudQueueRounded />,
    skills: ["API Integration","Firebase", "Firestore", "Google Cloud APIs", "OpenAI / Gemini", "Stripe", "RevenueCat"],
  },
  {
    title: "DevOps & Workflow",
    icon: <TerminalRounded />,
    skills: ["Git/GitHub", "Codemagic CI/CD", "App Store Deployment", "Jira", "Figma"],
  },
];

export const certifications = [
  {
    label: "Meta iOS UI Development",
    href: "https://coursera.org/verify/specialization/QNVYNKVZNBWA",
  },
  {
    label: "Meta Front-End Developer",
    href: "https://coursera.org/verify/professional-cert/KCBQGDKJR9X5",
  }
];

export const experiences = [
  {
    company: "Stone Street Syndicate",
    role: "Flutter Developer",
    period: "08/2025 — Present",
    location: "Remote, United States",
    link: "https://www.stonestreetsyndicate.com/", // Real company link
    description: [
      "Refactored legacy Flutter codebase, improving performance and maintainability while delivering production features.",
      "Built 'Casting Calls' feature with Stripe/RevenueCat monetization and automated releases via Codemagic CI/CD.",
      "Engineered 'Travel Boards' with location-based discovery for booking photographers.",
    ],
  },
  {
    company: "Upwork",
    role: "Mobile & Web Developer",
    period: "08/2021 — 08/2025",
    location: "Remote, International",
    link: "https://www.upwork.com/freelancers/~0155980773e7307264", // Your Upwork profile
    description: [
      "Architected 15+ Flutter & React.js apps, ensuring quality and scalability for international clients.",
      "Oversaw full project lifecycle for 10+ clients, integrating cloud APIs for 10K+ users.",
      "Maintained production apps on both Google Play and App Store.",
    ],
  },
  {
    company: "Information Technology Institute (ITI)",
    role: "Front-end & Cross-Platform Development Trainee",
    period: "03/2023 — 07/2023",
    location: "Hybrid, Egypt",
    link: "https://iti.gov.eg/", 
    description: [
      "Completed 4-month intensive program in Flutter, React, Angular, and React Native.",
      "Collaborated in a 5-member team on the IPark graduation project.",
    ],
  },
];

export const WebProjects = [
  {
    img: ShopManagment,
    title: "Shop Managment",
    subTitle:
      "A web app that allows users to easily add, edit, remove, and manage their shops, providing a seamless way to organize and update shop information.",
    tech: ["react", "material ui", "typescript", "redux", "firebase", "google-cloud"],
    demo: "https://drive.google.com/file/d/1qDVfS7peqUMQ3iJJ8kgewB7wutWEQvIg/view?usp=drivesdk",
    github: "https://github.com/syomna/shop-crud",
  },
  {
    img: BostaClone,
    title: "Bosta Clone",
    subTitle:
      "A user-friendly web app that allows users to quickly retrieve and track shipment details in real-time.",
    tech: ["react", "material ui", "redux", "react-hooks", "api-integration", "localization"],
    demo: "https://drive.google.com/file/d/1GAigfbeURc8FDcbZYMeGrApJc9ZXaOm0/view?usp=sharing",
    github: "https://github.com/syomna/Bosta_Task",
  },
  {
    img: artigen,
    title: "ArtiGen",
    subTitle:
      "A web app that uses AI to generate images from text or speech, offering a simple interface for creating and downloading custom images.",
    tech: ["react", "material ui", "eden ai", "react-speech-recongization"],
    demo: "https://drive.google.com/file/d/1SayBubqkMEQ7JUx-kW-MgoSf0BrckSuF/view?usp=drive_link",
    github: "https://github.com/syomna/ArtiGen",
  },
  {
    img: chatty,
    title: "Chatty",
    subTitle:
      "A dynamic web app for real-time communication, featuring secure login, emojis, profile editing, and customizable dark/light modes",
    tech: ["react", "mui", "nodejs", "mongodb", "socket.io"],
    demo: "https://drive.google.com/file/d/1rShsU0jDZ5OSrDKByA67yWjBIbRGOIQ4/view?usp=drive_link",
    github: "https://github.com/syomna/Chatty-Reactjs-Nodejs-app",
  },
  {
    img: ipark,
    title: "IPark",
    subTitle:
      "A web and mobile app offering parking solutions, allowing users to find, reserve, and pay for parking spots while managing reservations.",
    tech: ["react", "react-native", "redux-toolkit", "firebase", "stripe", "mui", "google-cloud"],
    demo: "https://drive.google.com/drive/folders/1Uq7eTYdla0i_A9y6TSm7du9MjH2trya6?usp=drive_link",
    github: "https://github.com/Nader-CS/parking-system",
  },
];

export const MobileProjects = [
  {
    img: StoneStreet,
    title: "Stone Street: Book photos",
    subTitle:
      "A professional photography and booking platform. I led the architectural refactor to improve performance and implemented core new features.",
    tech: ["flutter", "firebase", "stripe", "cloud-functions", "provider", "revenue-cat", "code-magic"],
    playStore: "https://play.google.com/store/apps/details?id=stone.street.app&hl=en",
    appStore: "https://apps.apple.com/us/app/stone-street-book-photos/id6557076325",
  },
  {
    img: PenPoints,
    title: "PenPoints - interactive spelling coach",
    subTitle:
      "An AI-powered spelling coach for children. Uses Cloud Vision API to analyze handwriting, highlighting errors with confidence scores.",
    tech: ["flutter", "firebase", "google-vision-api", "cloud-functions", "open-ai-api", "firebase-analytics", "bloc"],
    playStore: "https://play.google.com/store/apps/details?id=com.mickaelrobin.wright&hl=en&pli=1",
    appStore: "https://apps.apple.com/eg/app/penpoints-fun-spelling-coach/id6737171584",
  },
  {
    img: AKM,
    title: "AKM - العبد الكريم للخرسانة",
    subTitle:
      "A construction industry app to place concrete orders, track real-time delivery status, and ensure quality control.",
    tech: ["flutter", "firebase", "api-integration", "google-cloud", "localization", "fcm", "bloc"],
    playStore: "https://play.google.com/store/apps/details?id=com.sti.akm",
    appStore: "https://apps.apple.com/sa/app/akm-للخرسانة/id6476569574?l=ar",
  },
  {
    img: MyEyes,
    title: "MyEyes - helps vision impaired people",
    subTitle:
      "A mobile app designed to empower vision-impaired individuals by enhancing their independence and accessibility in navigating environments.",
    tech: ["flutter", "gemini-ai", "firebase-crashlytics", "google-analytics", "text-to-speech", "provider"],
    demo: "https://www.youtube.com/shorts/S7HYC4YXEwA",
    github: "https://github.com/syomna/my-eyes",
  },
  {
    img: NannyFinder,
    title: "NannyFinder",
    subTitle:
      "A comprehensive mobile app for nanny job applications, advanced profile filtering, and seamless family communication.",
    tech: ["flutter", "firebase", "dynamic-links", "flutter-web", "hosting", "bloc"],
    playStore: "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
    appStore: "https://apps.apple.com/app/id6443669769",
  },
  {
    img: Azkari,
    title: "أذكاري | Azkari",
    subTitle:
      "Your daily companion for supplications (Azkar) and prayers (Ad'iyah) to elevate worship and strengthen spiritual connection.",
    tech: ["flutter", "notifications", "provider", "clean-architecture", "unit-testing", "code-magic"],
    playStore: "https://play.google.com/store/apps/details?id=com.yomna.azkar_app",
    appStore: "https://apps.apple.com/eg/app/أذكــــاري-azkari/id6479560831",
  },
  {
    img: GhanaFootball,
    title: "Ghana Football",
    subTitle:
      "The ultimate mobile app for football enthusiasts featuring live matches, latest news, scores, and highlights.",
    tech: ["flutter", "firebase", "api-integration", "google-analytics", "bloc"],
    playStore: "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
    appStore: "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
  },
];