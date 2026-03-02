"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import projects from "@/data/projects"
import { Project } from "@/types/project"
import { getProjectImages } from "@/lib/project-images"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Code2, Filter } from "lucide-react"
import { ProjectDialogContent } from "@/components/project-dialog"

type Filters = {
  category: string
  technology: string
  status: string
}

const categoryColors: Record<string, string> = {
  Web: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  Mobile: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Desktop: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  DevOps: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  AI: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
}

const statusColors: Record<string, string> = {
  completed: "bg-green-500/10 text-green-400 border-green-500/20",
  "in-progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  archived: "bg-muted text-muted-foreground border-border",
}

function getCategoryClass(category: string) {
  return categoryColors[category] ?? "bg-muted text-muted-foreground border-border"
}

function getStatusClass(status: string) {
  return statusColors[status] ?? "bg-muted text-muted-foreground border-border"
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const [filters, setFilters] = useState<Filters>({
    category: "All",
    technology: "All",
    status: "All",
  })

  const getUniqueValues = (key: "category" | "technology" | "status"): string[] => {
    if (key === "technology") {
      const allTech = projects.flatMap((p) => p.technologies)
      return ["All", ...new Set(allTech)]
    }
    return [
      "All",
      ...new Set(
        projects.map((p) => p[key as keyof Project] as string).filter(Boolean)
      ),
    ]
  }

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (
        (filters.category === "All" || project.category === filters.category) &&
        (filters.technology === "All" ||
          project.technologies.includes(filters.technology)) &&
        (filters.status === "All" || project.status === filters.status)
      )
    })
  }, [filters])

  const activeFilterCount = Object.values(filters).filter((v) => v !== "All").length

  function clearFilters() {
    setFilters({ category: "All", technology: "All", status: "All" })
  }

  const FilterSection = ({
    title,
    options,
    filterKey,
  }: {
    title: string
    options: string[]
    filterKey: keyof Filters
  }) => (
    <div className="mb-5">
      <p className="text-xs text-accent uppercase tracking-widest font-semibold mb-2">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const active = filters[filterKey] === option
          return (
            <button
              key={option}
              onClick={() =>
                setFilters((prev) => ({ ...prev, [filterKey]: option }))
              }
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
                active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/40 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )

  const stats = [
    { label: "Total", value: projects.length },
    {
      label: "Categories",
      value: new Set(projects.map((p) => p.category)).size,
    },
    {
      label: "Technologies",
      value: new Set(projects.flatMap((p) => p.technologies)).size,
    },
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Code2 className="w-5 h-5 text-primary" />
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                A showcase of things I&apos;ve built and shipped
              </p>
            </div>

            <div className="flex items-center gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-bold text-primary leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between">
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="inline-flex items-center gap-2 text-sm border rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-0.5 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
              >
                {/* <X className="w-3 h-3" /> */}
                Clear filters
              </button>
            )}
          </div>

          {/* Sidebar */}
          <aside
            className={`md:block md:w-48 shrink-0 ${showFilters ? "block" : "hidden"}`}
          >
            <div className="sticky top-8 space-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Filter by
                </span>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    {/* <X className="w-3 h-3" /> */}
                    Clear
                  </button>
                )}
              </div>

              <FilterSection
                title="Category"
                options={getUniqueValues("category")}
                filterKey="category"
              />
              <FilterSection
                title="Technology"
                options={getUniqueValues("technology")}
                filterKey="technology"
              />
              <FilterSection
                title="Status"
                options={getUniqueValues("status")}
                filterKey="status"
              />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="text-foreground font-medium">
                  {filteredProjects.length}
                </span>{" "}
                of {projects.length}
              </p>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Code2 className="w-10 h-10 text-muted-foreground/40 mb-3" />
                <p className="text-muted-foreground text-sm">
                  No projects match the selected filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-xs text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project) => {
                  const images = getProjectImages(project.images)
                  return (
                  <Card
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 rounded-xl overflow-hidden bg-card/60"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden bg-muted/30">
                        <img
                          src={images[0]}
                          alt={project.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span
                          className={`absolute top-2 right-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border capitalize ${getStatusClass(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="p-3">
                        <p className="text-sm font-semibold leading-tight line-clamp-2 mb-1">
                          {project.title}
                        </p>
                        <p className="text-xs text-muted-foreground mb-2.5 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium border ${getCategoryClass(project.category)}`}
                          >
                            {project.category}
                          </span>
                          {project.technologies.slice(0, 2).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-[10px] px-1.5 py-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="text-[10px] text-muted-foreground">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )})}
              </div>
            )}
          </div>
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <ProjectDialogContent
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </Dialog>
      </div>
    </div>
  )
}
