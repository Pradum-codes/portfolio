import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 text-neutral-900">
      <div className="bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/10 px-6 sm:px-10 py-8 sm:py-10 space-y-10 dark:bg-white dark:text-neutral-900">
        {/* HEADER */}
        <section className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Pradum Kumar
          </h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 text-[13px] sm:text-sm text-neutral-700">
            <span className="inline-flex items-center justify-center gap-2">
              <Phone size={14} /> +91-7209854942
            </span>

            <a
              href="mailto:pradumky803@gmail.com"
              className="inline-flex items-center justify-center gap-2 hover:text-black"
            >
              <Mail size={14} /> pradumky803@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/pradum-kumar"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 hover:text-black"
            >
              <Linkedin size={14} /> linkedin.com/in/pradum-kumar
            </a>

            <a
              href="https://github.com/Pradum-codes"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 hover:text-black"
            >
              <Github size={14} /> github.com/Pradum-codes
            </a>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4 border-b border-black/60 pb-1">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Education
            </h2>
          </div>

          <div className="space-y-4">
            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <p className="font-semibold">Lovely Professional University</p>
              <p className="text-sm text-neutral-700 sm:text-right">
                Aug 2023 — Present
              </p>
              <p className="text-sm text-neutral-700">
                B.Tech in Computer Science and Engineering — CGPA: 8.13
              </p>
              <p className="text-sm text-neutral-600 sm:text-right">
                Punjab, India
              </p>
            </div>

            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <p className="font-semibold">CS DAV</p>
              <p className="text-sm text-neutral-700 sm:text-right">
                Apr 2021 — Mar 2023
              </p>
              <p className="text-sm text-neutral-700">Intermediate — 76%</p>
              <p className="text-sm text-neutral-600 sm:text-right">
                Bihar, India
              </p>
            </div>

            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <p className="font-semibold">Arya Vidyapith</p>
              <p className="text-sm text-neutral-700 sm:text-right">
                Apr 2020 — Mar 2021
              </p>
              <p className="text-sm text-neutral-700">Matriculation — 90%</p>
              <p className="text-sm text-neutral-600 sm:text-right">
                Bihar, India
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4 border-b border-black/60 pb-1">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Technical Skills
            </h2>
          </div>

          <div className="space-y-2 text-[13px] sm:text-sm text-neutral-800">
            <p>
              <span className="font-semibold">Languages:</span> C++, Java,
              JavaScript (ES6+), Python, Kotlin, SQL
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js,
              Express.js, RESTful API Design, JWT Authentication, Mongoose
            </p>
            <p>
              <span className="font-semibold">Databases:</span> MongoDB, SQLite
              (Room)
            </p>
            <p>
              <span className="font-semibold">Frontend:</span> React.js,
              Tailwind CSS, HTML5, CSS3, Jetpack Compose
            </p>
            <p>
              <span className="font-semibold">Tools & Platforms:</span> Git,
              GitHub, Docker, Linux, Vercel, Gradle, Android Studio
            </p>
            <p>
              <span className="font-semibold">Core CS:</span> Data Structures &
              Algorithms, Object-Oriented Programming, Operating Systems,
              Computer Networks, DBMS
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4 border-b border-black/60 pb-1">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Projects
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <p className="font-semibold">
                  Moneko — AI Powered Personal Finance Tracker
                </p>
                <p className="text-sm text-neutral-700 sm:text-right">
                  Feb 2026 — Present
                </p>
                <p className="text-sm text-neutral-600 sm:col-span-2">
                  Kotlin, Jetpack Compose, Room (SQLite), Coroutines, Flow, Hilt
                </p>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-[13px] sm:text-sm text-neutral-700">
                <li>
                  Architected a scalable Android finance tracker with MVVM
                  separation across UI, business logic, and data layers.
                </li>
                <li>
                  Optimized Room persistence with indexed queries for efficient
                  transaction aggregation and category filtering.
                </li>
                <li>
                  Implemented reactive data flows using Coroutines and Flow for
                  responsive, lifecycle-aware updates.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <p className="font-semibold">Process Monitoring Dashboard</p>
                <p className="text-sm text-neutral-700 sm:text-right">
                  Jun 2025 — Jul 2025
                </p>
                <p className="text-sm text-neutral-600 sm:col-span-2">
                  C, C++, OpenGL, GLFW, ImGui, Linux
                </p>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-[13px] sm:text-sm text-neutral-700">
                <li>
                  Designed a real-time Linux process monitor showing active
                  processes, CPU usage, memory usage, and process states.
                </li>
                <li>
                  Built a high-performance native UI using OpenGL, GLFW, and
                  ImGui to render monitoring panels with minimal overhead.
                </li>
                <li>
                  Integrated directly with the Linux /proc filesystem and
                  system utilities such as ps, top, and htop.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <p className="font-semibold">
                  CookClever — Recipe Discovery and Meal Planning Platform
                </p>
                <p className="text-sm text-neutral-700 sm:text-right">
                  Jun 2025 — Jul 2025
                </p>
                <p className="text-sm text-neutral-600 sm:col-span-2">
                  React.js, Node.js, Express.js, MongoDB
                </p>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-[13px] sm:text-sm text-neutral-700">
                <li>
                  Developed a full-stack MERN application enabling recipe
                  discovery and ingredient-based meal plan generation.
                </li>
                <li>
                  Implemented secure authentication and authorization with JWT
                  and bcrypt plus profile management.
                </li>
                <li>
                  Designed RESTful APIs and optimized MongoDB queries for
                  faster backend performance and responsiveness.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4 border-b border-black/60 pb-1">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Achievements & Certifications
            </h2>
          </div>

          <ul className="list-disc ml-5 space-y-2 text-[13px] sm:text-sm text-neutral-700">
            <li>
              Solved <strong>400+ problems</strong> on LeetCode with a maximum
              rating of <strong>1695</strong>.
            </li>
            <li>
              Achieved a maximum rating of <strong>1162</strong> on Codeforces.
            </li>
            <li>
              AWS Academy — Cloud Architecting Certificate (Nov 2025 — Jan
              2026).
            </li>
            <li>MERN Stack Training — Cipher School (Jun 2025 — Jul 2025).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
