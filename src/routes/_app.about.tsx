import AboutPage from '@/pages/about'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/about')({
  component: AboutPage,
})


