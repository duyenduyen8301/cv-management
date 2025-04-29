import ContactPage from '@/pages/contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/contact')({
  component: ContactPage,
})

