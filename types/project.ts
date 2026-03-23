export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  images: string | string[]
  technologies: string[]
  category: string
  status: "completed" | "in-progress" | "archived"
  isLive: boolean
  liveUrl: string
  githubUrl: string
  highlights: string[]
}
