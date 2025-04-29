import CVsPage from '@/pages/cvs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/cvs')({
  component: CVsPage,
})


