"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import projects from "@/data/projects"
import { Project } from "@/types/project"
import { ProjectDialogContent } from "@/components/project-dialog"
import { getProjectImages } from "@/lib/project-images"

export function Projects() {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 })
  const projectsAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={titleAnimation.ref}>
              <div className="flex items-center justify-between mb-12">
                <h2
                  className={`text-3xl sm:text-4xl font-semibold transition-all duration-700 ${
                    titleAnimation.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  Selected Work
                </h2>
                <Button asChild size="sm" variant="outline" className="flex items-center gap-2">
                  <Link href="/projects">
                    View all projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
          </div>

          <div
            ref={projectsAnimation.ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => {
              const images = getProjectImages(project.images)
              return (
              <Dialog key={project.title}>
                <DialogTrigger asChild>
                  <div
                    className={`group cursor-pointer border border-border/70 bg-card/50 rounded-2xl overflow-hidden transition-[transform,box-shadow] duration-500 hover:shadow-lg hover:-translate-y-1 ${
                      projectsAnimation.isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="relative h-36 w-full">
                      <Image
                        src={images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-3 left-3 text-xs font-mono text-white bg-black/50 rounded-full px-2 py-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <ProjectDialogContent project={project} />
              </Dialog>
            )})}
          </div>

        </div>
      </div>
    </section>
  )
}
