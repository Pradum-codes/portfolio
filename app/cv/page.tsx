import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_45%,_#000_80%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-6 top-12 h-48 w-48 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute right-6 top-24 h-56 w-56 rounded-full bg-indigo-400/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-10">
        {/* HEADER */}
        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-8 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur">
            <p className="text-xs tracking-[0.3em] uppercase text-sky-300 font-semibold">
              Digital CV
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              Pradum Kumar
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Full-stack engineer focused on clean architecture, performant UIs,
              and product-quality delivery.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-[13px] sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Phone size={14} /> +91-7209854942
              </span>

              <a
                href="mailto:pradumky803@gmail.com"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Mail size={14} /> pradumky803@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/pradum-kumar"
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-white"
                rel="noreferrer"
              >
                <Linkedin size={14} /> linkedin.com/in/pradum-kumar
              </a>

              <a
                href="https://github.com/Pradum-codes"
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-white"
                rel="noreferrer"
              >
                <Github size={14} /> github.com/Pradum-codes
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6 sm:px-8 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
            <p className="text-xs tracking-[0.3em] uppercase text-sky-200 font-semibold">
              Snapshot
            </p>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-sky-200">Current Focus</span>
                <span className="text-lg font-semibold">Android + Web</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sky-200">Primary Stack</span>
                <span className="text-lg font-semibold">Kotlin, React</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sky-200">Interest</span>
                <span className="text-lg font-semibold">Systems + UI</span>
              </div>
            </div>

            <a
              href="/PRADUM-KUMAR-CV.pdf"
              download
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
            >
              <Download size={16} />
              Download Original CV
            </a>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-10 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.25)] backdrop-blur space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
              Education
            </h2>
            <span className="text-xs text-slate-400">2020 — Present</span>
          </div>

          <div className="space-y-4">
            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <p className="font-semibold">Lovely Professional University</p>
              <p className="text-sm text-slate-300 sm:text-right">
                Aug 2023 — Present
              </p>
              <p className="text-sm text-slate-300">
                B.Tech in Computer Science and Engineering — CGPA: 8.13
              </p>
              <p className="text-sm text-slate-400 sm:text-right">
                Punjab, India
              </p>
            </div>

            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <p className="font-semibold">CS DAV</p>
              <p className="text-sm text-slate-300 sm:text-right">
                Apr 2021 — Mar 2023
              </p>
              <p className="text-sm text-slate-300">Intermediate — 76%</p>
              <p className="text-sm text-slate-400 sm:text-right">
                Bihar, India
              </p>
            </div>

            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <p className="font-semibold">Arya Vidyapith</p>
              <p className="text-sm text-slate-300 sm:text-right">
                Apr 2020 — Mar 2021
              </p>
              <p className="text-sm text-slate-300">Matriculation — 90%</p>
              <p className="text-sm text-slate-400 sm:text-right">
                Bihar, India
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-8 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.25)] backdrop-blur">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
              Technical Skills
            </h2>
            <div className="mt-5 space-y-2 text-[13px] sm:text-sm text-slate-200">
              <p>
                <span className="font-semibold">Languages:</span> C++, Java,
                JavaScript (ES6+), Python, Kotlin, SQL
              </p>
              <p>
                <span className="font-semibold">Backend:</span> Node.js,
                Express.js, RESTful API Design, JWT Authentication, Mongoose
              </p>
              <p>
                <span className="font-semibold">Databases:</span> MongoDB,
                SQLite (Room)
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
                <span className="font-semibold">Core CS:</span> Data Structures
                & Algorithms, Object-Oriented Programming, Operating Systems,
                Computer Networks, DBMS
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 px-6 sm:px-8 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.25)]">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
              Focus Areas
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Mobile-first UX",
                "API design",
                "Data modeling",
                "Realtime UI",
                "Testing discipline",
                "Deployment flow",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-10 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.25)] backdrop-blur space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
              Selected Projects
            </h2>
            <span className="text-xs text-slate-400">2025 — 2026</span>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 shadow-sm">
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <p className="font-semibold">
                  Moneko — AI Powered Personal Finance Tracker
                </p>
                <p className="text-sm text-slate-300 sm:text-right">
                  Feb 2026 — Present
                </p>
                <p className="text-sm text-slate-400 sm:col-span-2">
                  Kotlin, Jetpack Compose, Room (SQLite), Coroutines, Flow, Hilt
                </p>
              </div>
              <ul className="list-disc ml-5 mt-3 space-y-1 text-[13px] sm:text-sm text-slate-300">
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

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 shadow-sm">
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <p className="font-semibold">Process Monitoring Dashboard</p>
                <p className="text-sm text-slate-300 sm:text-right">
                  Jun 2025 — Jul 2025
                </p>
                <p className="text-sm text-slate-400 sm:col-span-2">
                  C, C++, OpenGL, GLFW, ImGui, Linux
                </p>
              </div>
              <ul className="list-disc ml-5 mt-3 space-y-1 text-[13px] sm:text-sm text-slate-300">
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

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 shadow-sm">
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <p className="font-semibold">
                  CookClever — Recipe Discovery and Meal Planning Platform
                </p>
                <p className="text-sm text-slate-300 sm:text-right">
                  Jun 2025 — Jul 2025
                </p>
                <p className="text-sm text-slate-400 sm:col-span-2">
                  React.js, Node.js, Express.js, MongoDB
                </p>
              </div>
              <ul className="list-disc ml-5 mt-3 space-y-1 text-[13px] sm:text-sm text-slate-300">
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
        <section className="rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-10 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.25)] backdrop-blur space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-[13px] sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
              Achievements & Certifications
            </h2>
            <span className="text-xs text-slate-400">Highlights</span>
          </div>

          <ul className="list-disc ml-5 space-y-2 text-[13px] sm:text-sm text-slate-300">
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
  )
}
