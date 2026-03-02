export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  images: string | string[]
  technologies: string[]
  category: string
  status: "completed" | "in-progress" | "archived"
  liveUrl: string
  githubUrl: string
  highlights: string[]
}
