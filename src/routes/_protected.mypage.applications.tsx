import ApplicationsPage from '@/pages/mypage/applications/applications'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/mypage/applications')({
  component: ApplicationsPage,
})
