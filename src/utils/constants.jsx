import { Box, Cloud, Code, Terminal } from "lucide-react";
import AKM from "../assets/projects/AKM.jpeg";
import artigen from "../assets/projects/artigen.jpeg";
import Azkari from "../assets/projects/Azkari.jpeg";
import BostaClone from "../assets/projects/BostaClone.jpeg";
import chatty from "../assets/projects/chatty.jpeg";
import ipark from "../assets/projects/ipark.jpeg";
import MyEyes from "../assets/projects/MyEyes.jpeg";
import NannyFinder from "../assets/projects/NannyFinder.jpeg";
import PenPoints from "../assets/projects/PenPoints.jpeg";
import ShopManagment from "../assets/projects/ShopManagment.jpeg";
import StoneStreet from "../assets/projects/StoneStreet.jpeg";

export // ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
const CERTS = [
  {
    label: "iOS UI Development",
    sub: "Coursera / Meta",
    href: "https://coursera.org/verify/specialization/QNVYNKVZNBWA",
  },
  {
    label: "Front-End Developer",
    sub: "Coursera / Meta",
    href: "https://coursera.org/verify/professional-cert/KCBQGDKJR9X5",
  },
];

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code size={16} />,
    skills: [
      "Flutter",
      "Dart",
      "SwiftUI",
      "JavaScript",
      "TypeScript",
      "React.js",
    ],
  },
  {
    title: "Architecture & State",
    icon: <Box size={16} />,
    skills: [
      "Clean Architecture",
      "BLoC",
      "Cubit",
      "Provider",
      "MVVM",
      "OOP",
      "SOLID Principles",
      "Dependency Injection",
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Cloud size={16} />,
    skills: [
      "REST APIs",
      "Firebase",
      "Authentication",
      "Firestore",
      "Cloud Functions",
      "FCM",
      "Firebase Analytics",
    ],
  },
  {
    title: "Testing",
    icon: <Terminal size={16} />,
    skills: ["Unit Testing", "Widget Testing"],
  },
  {
    title: "Integrations",
    icon: <Cloud size={16} />,
    skills: [
      "Stripe",
      "RevenueCat",
      "OpenAI API",
      "Gemini API",
      "Google Cloud Vision",
      "Google Maps",
      "Google Places",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal size={16} />,
    skills: [
      "Git",
      "GitHub",
      "CI/CD (Codemagic)",
      "App Store Connect",
      "Google Play Console",
      "Figma",
      "Jira",
    ],
  },
];

export const experiences = [
  {
    company: "Stone Street Syndicate",
    role: "Flutter Developer",
    period: "Aug 2025 — Present",
    location: "Remote, United States",
    link: "https://www.stonestreetsyndicate.com/", // Real company link
    description: [
      "Served as the sole Flutter developer, taking ownership of a partially built app and partnering directly with the founder to architect, maintain, and scale a production photography booking platform across iOS, Android, and Flutter Web.",
      "Architected and deployed a multi-stage “Casting Calls” marketplace engine with integrated Stripe payments and RevenueCat subscriptions, extending the Flutter web admin panel with job post moderation and an email blast feature for all users.",
      "Implemented a complete push notification system using Node.js Cloud Functions with deep linking, weekly scheduled notifications, and automated re-engagement triggers.",
      "Built Travel Boards, where creatives post their travel availability and clients discover and book them by location using the Google Places API.",
    ],
  },
  {
    company: "Upwork",
    role: "Freelance Flutter Developer",
    period: "Aug 2021 — Present",
    location: "Remote, International",
    link: "https://www.upwork.com/freelancers/~0155980773e7307264", // Your Upwork profile
    description: [
      "Delivered 15+ production applications for clients across the US, UAE, France, and South Africa, using Flutter, React, and Firebase.",
      "Handled full project lifecycles, from requirement analysis and UI implementation through REST API integration, authentication, push notifications, payment systems, and production store deployment.",
      "Collaborated closely with clients to translate business requirements into production-ready mobile applications.",
    ],
  },
  {
    company: "Information Technology Institute (ITI)",
    role: "Front-End & Mobile Development Trainee",
    period: "Mar 2023 — Jul 2023",
    location: "Hybrid, Egypt",
    link: "https://iti.gov.eg/",
    description: [
      "Completed a 4-month intensive technical program specializing in cross-platform mobile and web frontend ecosystems, covering Flutter, React, Angular, and mobile application development.",
      "Co-developed “IPark”, a smart parking mobile solution, with a 5-member Agile team as a graduation project.",
    ],
  },
];

export const WebProjects = [
  {
    img: ShopManagment,
    title: "Shop Managment",
    subtitle: "Shop Management Web App",
    subTitle:
      "A web app that allows users to easily add, edit, remove, and manage their shops, providing a seamless way to organize and update shop information.",
    tech: [
      "react",
      "material ui",
      "typescript",
      "redux",
      "firebase",
      "google-cloud",
    ],
    demo: "https://drive.google.com/file/d/1qDVfS7peqUMQ3iJJ8kgewB7wutWEQvIg/view?usp=drivesdk",
    github: "https://github.com/syomna/shop-crud",
  },
  {
    img: BostaClone,
    title: "Bosta Clone",
    subtitle: "Shipment Tracking Web App",
    subTitle:
      "A user-friendly web app that allows users to quickly retrieve and track shipment details in real-time.",
    tech: [
      "react",
      "material ui",
      "redux",
      "react-hooks",
      "api-integration",
      "localization",
    ],
    demo: "https://drive.google.com/file/d/1GAigfbeURc8FDcbZYMeGrApJc9ZXaOm0/view?usp=sharing",
    github: "https://github.com/syomna/Bosta_Task",
  },
  {
    img: artigen,
    title: "ArtiGen",
    subtitle: "AI Image Generation Web App",
    subTitle:
      "A web app that uses AI to generate images from text or speech, offering a simple interface for creating and downloading custom images.",
    tech: ["react", "material ui", "eden ai", "react-speech-recongization"],
    demo: "https://drive.google.com/file/d/1SayBubqkMEQ7JUx-kW-MgoSf0BrckSuF/view?usp=drive_link",
    github: "https://github.com/syomna/ArtiGen",
  },
  {
    img: chatty,
    title: "Chatty",
    subtitle: "Real-Time Chat Application",
    subTitle:
      "A dynamic web app for real-time communication, featuring secure login, emojis, profile editing, and customizable dark/light modes",
    tech: ["react", "mui", "nodejs", "mongodb", "socket.io"],
    demo: "https://drive.google.com/file/d/1rShsU0jDZ5OSrDKByA67yWjBIbRGOIQ4/view?usp=drive_link",
    github: "https://github.com/syomna/Chatty-Reactjs-Nodejs-app",
  },
  {
    img: ipark,
    title: "IPark",
    subtitle: "Smart Parking Solution",
    subTitle:
      "A web and mobile app offering parking solutions, allowing users to find, reserve, and pay for parking spots while managing reservations.",
    tech: [
      "react",
      "react-native",
      "redux-toolkit",
      "firebase",
      "stripe",
      "mui",
      "google-cloud",
    ],
    demo: "https://drive.google.com/drive/folders/1Uq7eTYdla0i_A9y6TSm7du9MjH2trya6?usp=drive_link",
    github: "https://github.com/Nader-CS/parking-system",
  },
];

export const MobileProjects = [
  {
    img: StoneStreet,
    title: "Stone Street",
    subtitle: "Photography Booking Platform",
    period: "Aug 2025 — Present",
    subTitle:
      "A photography booking platform live on the App Store and Google Play. I joined when the app was partially built and took it to a fully working product, owning the mobile app, web admin panel, and backend integrations end-to-end.",
    tech: [
      "flutter",
      "provider",
      "firebase",
      "stripe",
      "revenue-cat",
      "cloud-functions",
      "code-magic",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=stone.street.app&hl=en",
    appStore:
      "https://apps.apple.com/us/app/stone-street-book-photos/id6557076325",
  },
  {
    img: PenPoints,
    title: "PenPoints",
    subtitle: "AI-Powered Spelling Coach for Children",
    period: "Sep 2024 — Aug 2025",
    subTitle:
      "An AI-powered spelling coach for children that analyzes handwritten words using Cloud Vision API, highlights errors with confidence scores, and lets kids practice independently at their own pace.",
    tech: [
      "flutter",
      "flutter-web",
      "bloc",
      "firebase",
      "cloud-functions",
      "google-vision-api",
      "open-ai-api",
      "text-to-speech",
      "qr-code",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.mickaelrobin.wright&hl=en&pli=1",
    appStore:
      "https://apps.apple.com/eg/app/penpoints-fun-spelling-coach/id6737171584",
  },
  {
    img: NannyFinder,
    title: "NannyFinder",
    subtitle: "Family & Nanny Matching Platform",
    period: "May 2022 — Sep 2024",
    subTitle:
      "A comprehensive mobile app for nanny job applications, advanced profile filtering, and seamless family communication.",
    tech: [
      "flutter",
      "flutter-web",
      "firebase",
      "storage",
      "dynamic-links",
      "hosting",
      "bloc",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
  },
  {
    img: AKM,
    title: "AKM",
    subtitle: "Concrete Order Tracking Platform",
    period: "Oct 2023 — Apr 2024",
    subTitle:
      "A construction industry app to place concrete orders, track real-time delivery status, and ensure quality control.",
    tech: [
      "flutter",
      "api-integration",
      "firebase",
      "fcm",
      "google-analytics",
      "google-cloud",
      "location-tracking",
      "localization",
      "bloc",
    ],
    appStore: "https://apps.apple.com/sa/app/akm-للخرسانة/id6476569574?l=ar",
  },
  {
    img: Azkari,
    title: "أذكاري | Azkari",
    subtitle: "Azkar & Ad'iyah Companion",
    subTitle:
      "Your daily companion for supplications (Azkar) and prayers (Ad'iyah) to elevate worship and strengthen spiritual connection.",
    tech: [
      "flutter",
      "notifications",
      "provider",
      "clean-architecture",
      "unit-testing",
      "code-magic",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.yomna.azkar_app",
    appStore: "https://apps.apple.com/eg/app/أذكــــاري-azkari/id6479560831",
  },
  {
    img: MyEyes,
    title: "MyEyes",
    subtitle: "Accessibility App for Vision-Impaired Users",
    subTitle:
      "A mobile app designed to empower vision-impaired individuals by enhancing their independence and accessibility in navigating environments.",
    tech: [
      "flutter",
      "gemini-ai",
      "firebase-crashlytics",
      "google-analytics",
      "text-to-speech",
      "provider",
    ],
    demo: "https://www.youtube.com/shorts/S7HYC4YXEwA",
    github: "https://github.com/syomna/my-eyes",
  },

  // {
  //   img: GhanaFootball,
  //   title: "Ghana Football",
  //   subtitle: "Live Scores, News & Highlights",
  //   subTitle:
  //     "The ultimate mobile app for football enthusiasts featuring live matches, latest news, scores, and highlights.",
  //   tech: [
  //     "flutter",
  //     "firebase",
  //     "api-integration",
  //     "google-analytics",
  //     "bloc",
  //   ],
  //   playStore:
  //     "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
  //   appStore: "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
  // },
];
