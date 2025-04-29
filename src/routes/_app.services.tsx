import ServicesPage from '@/pages/service'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/services')({
  component: ServicesPage,
})

