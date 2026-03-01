"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ExternalLink, Github, Sparkles, X } from "lucide-react"
import { Project } from "@/types/project"

interface ProjectDialogProps {
  project: Project
  onClose?: () => void
}

export function ProjectDialogContent({ project, onClose }: ProjectDialogProps) {
  return (
    <DialogContent
      hideCloseButton
      className="max-w-[95vw] sm:max-w-3xl w-full overflow-visible rounded-2xl p-0 [&>button]:hidden"
    >
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl opacity-10 scale-110 pointer-events-none"
          style={{ backgroundImage: `url(${project.images[0]})` }}
        />

        <div className="relative z-10 p-4 sm:p-6">
          {onClose && (
            <div className="absolute top-4 right-4 z-20">
              <button
                aria-label="Close dialog"
                onClick={onClose}
                className="rounded-full p-2 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-muted/80 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <DialogHeader className="mb-4 pr-10 sm:pr-12">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
              <div className="flex-1 pr-2">
                <DialogTitle className="text-lg sm:text-xl leading-snug">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </DialogDescription>
              </div>
              <div className="flex flex-col gap-1.5 items-start sm:items-end">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border bg-muted/50">
                  {project.category}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border bg-muted/50 capitalize">
                  {project.status}
                </span>
              </div>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="rounded-xl border border-border/50 bg-muted/20">
              {project.images.length > 1 ? (
                <AspectRatio ratio={16 / 9} className="w-full h-full overflow-hidden">
                  <Carousel
                    className="h-full w-full"
                    opts={{ loop: true, align: "center", containScroll: "trimSnaps" }}
                  >
                    <CarouselContent className="h-full w-full gap-0">
                      {project.images.map((image, index) => (
                        <CarouselItem
                          key={`${project.id}-${index}`}
                          className="h-full w-full relative"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - ${index + 1}`}
                            fill
                            className="h-full w-full object-cover"
                            sizes="(min-width: 768px) 50vw, 100vw"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="!left-3 !h-8 !w-8 sm:!left-5" />
                    <CarouselNext className="!right-3 !h-8 !w-8 sm:!right-5" />
                  </Carousel>
                </AspectRatio>
              ) : (
                <AspectRatio ratio={16 / 9} className="w-full overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </AspectRatio>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <ScrollArea className="h-28 sm:h-32">
                <p className="text-sm leading-relaxed text-muted-foreground pr-2">
                  {project.longDescription}
                </p>
              </ScrollArea>

              {project.highlights.length > 0 && (
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Highlights
                  </p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="text-xs text-muted-foreground flex items-start gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <Button
                  className="flex-1 gap-2 h-10 sm:h-9 touch-manipulation"
                  asChild
                >
                  <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2 h-10 sm:h-9 touch-manipulation"
                  asChild
                >
                  <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
