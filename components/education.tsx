"use client";

import { Clock, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Education() {
  const sectionAnimation = useScrollAnimation({ threshold: 0.15 });

  const education = [
    {
      school: "Lovely Professional University",
      location: "Jalandhar, Punjab, India",
      degree: "B.Tech in Computer Science",
      duration: "2023 — 2027",
      score: "8.1 CGPA",
      highlight:
        "Focus on backend engineering, distributed systems, and AI foundations",
      index: "01",
    },
    {
      school: "CS DAV Public School",
      location: "Motihari, Bihar, India",
      degree: "Higher Secondary · Class XII",
      duration: "2021 — 2023",
      score: "80%",
      highlight: "Science stream with Mathematics and Information Practices",
      index: "02",
    },
    {
      school: "Arya Vidyapith",
      location: "Motihari, Bihar, India",
      degree: "Secondary School · Class X",
      duration: "2019 — 2021",
      score: "90%",
      highlight: "",
      index: "03",
    },
  ];

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto" ref={sectionAnimation.ref}>

          {/* ── header ── */}
          <div
            className={`mb-16 transition-all duration-700 ${
              sectionAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="mb-2 font-mono text-xs tracking-[0.25em] uppercase text-primary/70">
              Background
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Education
            </h2>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              My academic journey that built the foundation for my work in
              software engineering and systems design.
            </p>
          </div>

          {/* ── timeline cards ── */}
          <div className="relative">
            {/* vertical rule */}
            <div className="absolute left-[18px] top-0 bottom-0 hidden w-px lg:block">
              <div className="h-full w-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            </div>

            <div className="space-y-6 lg:space-y-8">
              {education.map((edu, i) => (
                <div
                  key={i}
                  style={{ transitionDelay: `${i * 120}ms` }}
                  className={`relative lg:pl-14 transition-all duration-700 ${
                    sectionAnimation.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  {/* dot */}
                  <span className="absolute left-[11px] top-8 hidden h-[15px] w-[15px] rounded-full border-2 border-primary bg-background lg:block" />
                  {/* short connector */}
                  <span className="absolute left-[25px] top-[38px] hidden h-px w-6 bg-primary/30 lg:block" />

                  <div className="group relative rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5">
                    
                    {/* top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* subtle inner gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

                    <div className="relative p-6 sm:p-7">
                      {/* top row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          {/* index badge */}
                          <span className="flex-none font-mono text-[10px] tracking-widest text-primary/60 bg-primary/8 border border-primary/20 rounded-full px-2.5 py-0.5">
                            {edu.index}
                          </span>
                          <h3 className="font-semibold text-lg leading-snug">
                            {edu.school}
                          </h3>
                        </div>

                        {/* score pill */}
                        <span className="flex-none rounded-full border border-primary/25 bg-primary/8 px-3 py-1 font-mono text-xs font-medium text-primary">
                          {edu.score}
                        </span>
                      </div>

                      {/* degree */}
                      <p className="text-sm font-medium text-foreground/80 mb-2">
                        {edu.degree}
                      </p>

                      {/* meta row */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 opacity-60" aria-hidden="true" />
                          {edu.duration}
                        </span>
                        <span className="text-muted-foreground/40 text-xs">·</span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 opacity-60" aria-hidden="true" />
                          {edu.location}
                        </span>
                      </div>

                      {/* highlight */}
                      {edu.highlight && (
                        <div className="flex items-center gap-2.5 rounded-xl bg-muted/40 border border-border/40 px-4 py-3">
                          <span className="h-1.5 w-1.5 flex-none rounded-full bg-primary/60" />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {edu.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
