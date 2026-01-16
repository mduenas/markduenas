import { getProjectById } from '@/lib/projects'
import ProjectDetailPage from '@/components/ProjectDetailPage'

export default function WindulePage() {
  const project = getProjectById('windule')

  return <ProjectDetailPage project={project} projectId="windule" />
}
