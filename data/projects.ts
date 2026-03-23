import { Project } from "@/types/project"

const projects: Project[] = [
  {
    id: "process-monitoring-dashboard",
    title: "Real Time Process Monitoring Dashboard",
    description:
      "Graphical dashboard that displays real-time process states, CPU usage, and memory consumption with low-latency updates.",
    longDescription:
      "A high-performance desktop application built in C++ that renders real-time system metrics using OpenGL. The dashboard monitors running processes, visualises CPU and memory consumption through dynamic graphs, and provides a responsive interface powered by GLFW. Designed for minimal overhead so it can run alongside production workloads without impacting system performance.",
    images: "/projects/process-monitoring-dashboard.png",
    technologies: ["C++", "OpenGL", "GLFW"],
    category: "Desktop",
    status: "completed",
    isLive: false,
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
    images: "/projects/project-tracker.jpg , /projects/project-tracker.jpg",
    technologies: ["Kotlin", "Jetpack Compose", "Android", "Material Design 3"],
    category: "Mobile",
    status: "completed",
    isLive: false,
    liveUrl: "https://github.com/Pradum-codes/Project-Tracker-App",
    githubUrl: "https://github.com/Pradum-codes/Project-Tracker-App",
    highlights: [
      "Real-time task synchronisation across team members",
      "Material Design 3 UI with Jetpack Compose",
      "Push notifications for task updates and deadlines"
    ],
  },
  {
    id: "dropr",
    title: "dropr",
    description:
      "A peer-to-peer file sharing web application built with WebRTC that enables direct, serverless file transfers between users without storing data on any backend.",
      longDescription:
      "Packet Post is a secure, peer-to-peer file transfer application built using WebRTC, enabling users to send files directly between browsers without storing them on a server. Instead of routing data through a centralized backend, files are transmitted over encrypted data channels established via WebRTC. Supabase is used only for signaling and connection coordination, ensuring the actual file content never touches the server. The application supports real-time transfer progress tracking, connection state handling, and responsive UI across devices. By leveraging browser-native peer connections, Packet Post delivers fast, private, and decentralized file sharing.",
      images: "/projects/packet-post/1.png, /projects/packet-post/2.png, /projects/packet-post/3.png",
    technologies: ["NextJS", "WebRTC", "Supabase"],
    category: "Web",
    status: "completed",
    isLive: true,
    liveUrl: "https://dropr.pradum.dev",
    githubUrl: "https://github.com/Pradum-codes/packet-post",
    highlights: [
        "Direct browser-to-browser file transfer using WebRTC DataChannels",
        "Serverless architecture - files never stored on backend",
        "Secure encrypted P2P connections with ICE & SDP negotiation",
        "Real-time transfer progress tracking and connection state handling",
        "Signaling coordination implemented using Supabase"
    ],
  },
  {
    id: "cook-clever",
    title: "CookClever",
    description:
      "Modern recipe finder built with a fast search flow and clean discovery experience.",
    longDescription:
      "A modern recipe discovery platform built with Next.js and styled with Tailwind CSS. CookClever features a lightning-fast search engine, smooth Framer Motion animations, and a curated recipe browsing experience. Deployed on Vercel for instant global access, it provides recipe details, ingredient lists, and step-by-step cooking instructions in a beautiful, minimal interface.",
    images: "/projects/cook-clever.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Web",
    status: "completed",
    isLive: true,
    liveUrl: "https://cook-clever.pradum.dev/",
    githubUrl: "https://github.com/Pradum-codes/CookClever",
    highlights: [
      "Lightning-fast recipe search with instant results",
      "Smooth page transitions with Framer Motion",
      "Deployed on Vercel with edge caching"
    ],
  },
  {
		id: "ai-debate-partner",
		title: "AI Debate Partner",
		description:
			"An AI-powered debate assistant that challenges your ideas and sharpens reasoning through structured argument conversations.",

		longDescription:
			"AI Debate Partner is an intelligent debate application designed to help users refine critical thinking by engaging in structured debates with an AI opponent. Built using modern web technologies, the platform allows users to propose topics and receive logical counterarguments, rebuttals, and perspective-driven responses generated by AI. The system focuses on creating a natural debate flow where arguments evolve through multiple rounds, helping users analyze different viewpoints, strengthen reasoning skills, and explore complex topics interactively.",

		images: "/projects/ai-debate-partner.png",

		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"AI APIs",
		],
		category: "AI",
		status: "completed",
		isLive: true,
		liveUrl: "https://ai-debate-patner.vercel.app/",
		githubUrl: "https://github.com/Pradum-codes/ai-debate-patner",

		highlights: [
			"AI-driven debate generation with structured arguments and rebuttals",
			"Interactive conversational interface for real-time debate flow",
			"Encourages critical thinking by presenting opposing viewpoints",
		],
	},
	{
		id: "ip-under-the-hood",
		title: "IP Under The Hood",
		description:
			"An interactive web application that visually explains how IP addresses work and how internet communication happens behind the scenes.",
		longDescription:
			"IP Under The Hood is an educational web application designed to simplify the fundamentals of internet networking. The platform explains concepts such as IP addresses, request routing, and how devices communicate across the internet through an interactive and visually engaging interface. Built with modern web technologies and deployed on Vercel, the project helps learners understand what happens when a user enters a URL, how DNS resolves domains to IP addresses, and how requests travel across networks to reach servers. The goal of the project is to make complex networking concepts intuitive and accessible for students and developers.",
		images: "/projects/ip-under-the-hood.png",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Vercel"
		],
		category: "Educational",
		status: "completed",
		isLive: true,
		liveUrl: "https://ip-under-the-hood.vercel.app/",
		githubUrl: "https://github.com/Pradum-codes/ip-under-the-hood",
		highlights: [
			"Interactive visualization explaining how IP addresses work",
			"Simplifies networking concepts like DNS resolution and request routing",
			"Clean educational interface designed for students learning internet fundamentals"
		],
	}
]

export default projects
