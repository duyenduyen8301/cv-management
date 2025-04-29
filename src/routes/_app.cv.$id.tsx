
import CVDetailPage from '@/pages/cvDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/cv/$id')({
  component: CVDetailPage,
})

