import { getProjectById, projects } from '@/lib/projects'
import ProjectDetailPage from '@/components/ProjectDetailPage'

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectById(id)
  
  return <ProjectDetailPage project={project} projectId={id} />
}