import { Project } from "@/types/project"

const projects: Project[] = [
  {
    id: "process-monitoring-dashboard",
    title: "Real Time Process Monitoring Dashboard",
    description:
      "Graphical dashboard that displays real-time process states, CPU usage, and memory consumption with low-latency updates.",
    longDescription:
      "A high-performance desktop application built in C++ that renders real-time system metrics using OpenGL. The dashboard monitors running processes, visualises CPU and memory consumption through dynamic graphs, and provides a responsive interface powered by GLFW. Designed for minimal overhead so it can run alongside production workloads without impacting system performance.",
    images: [
      "/projects/process-monitoring-dashboard.png"
    ],
    technologies: ["C++", "OpenGL", "GLFW"],
    category: "Desktop",
    status: "completed",
    liveUrl: "https://github.com/Pradum-codes/Real-Time-Process-Monitoring-Dashboard",
    githubUrl: "https://github.com/Pradum-codes/Real-Time-Process-Monitoring-Dashboard",
    highlights: [
      "Real-time CPU & memory graphs rendered with OpenGL",
      "Low-latency process state tracking",
      "Lightweight footprint suitable for production environments"
    ],
  },
  {
    id: "project-tracker-app",
    title: "Project Tracker App",
    description:
      "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    longDescription:
      "A native Android application built with Kotlin and Jetpack Compose that enables teams to create, assign, and track tasks in real time. Features include project boards, task assignments with due dates, progress tracking, and push notifications for updates. The modern Material Design 3 UI ensures a smooth, intuitive experience on all screen sizes.",
    images: [
      "/projects/project-tracker.jpg", "/projects/project-tracker.jpg"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android", "Material Design 3"],
    category: "Mobile",
    status: "completed",
    liveUrl: "https://github.com/Pradum-codes/Project-Tracker-App",
    githubUrl: "https://github.com/Pradum-codes/Project-Tracker-App",
    highlights: [
      "Real-time task synchronisation across team members",
      "Material Design 3 UI with Jetpack Compose",
      "Push notifications for task updates and deadlines"
    ],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Responsive weather dashboard with location-based forecasts, interactive charts, and alerting.",
    longDescription:
      "A responsive single-page web application that fetches real-time weather data from the OpenWeather API and presents it through clean, interactive visualisations. Users can search by city or allow geolocation access for automatic forecasts. The dashboard includes hourly and 5-day forecasts, temperature and humidity charts, and severe weather alerts.",
    images: [
      "/projects/weather-app.png"
    ],
    technologies: ["React", "OpenWeather API", "CSS3", "Chart.js"],
    category: "Web",
    status: "completed",
    liveUrl: "https://github.com/Pradum-codes/Weather-App",
    githubUrl: "https://github.com/Pradum-codes/Weather-App",
    highlights: [
      "Geolocation-based automatic weather detection",
      "Interactive temperature and humidity charts",
      "5-day forecast with hourly breakdowns"
    ],
  },
  {
    id: "cook-clever",
    title: "CookClever",
    description:
      "Modern recipe finder built with a fast search flow and clean discovery experience.",
    longDescription:
      "A modern recipe discovery platform built with Next.js and styled with Tailwind CSS. CookClever features a lightning-fast search engine, smooth Framer Motion animations, and a curated recipe browsing experience. Deployed on Vercel for instant global access, it provides recipe details, ingredient lists, and step-by-step cooking instructions in a beautiful, minimal interface.",
    images: [
      "/projects/cook-clever.png"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Web",
    status: "completed",
    liveUrl: "https://github.com/Pradum-codes/CookClever",
    githubUrl: "https://github.com/Pradum-codes/CookClever",
    highlights: [
      "Lightning-fast recipe search with instant results",
      "Smooth page transitions with Framer Motion",
      "Deployed on Vercel with edge caching"
    ],
  },
]

export default projects
