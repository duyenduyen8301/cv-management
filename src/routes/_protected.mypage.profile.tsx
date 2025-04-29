import ProfilePage from '@/pages/mypage/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/mypage/profile')({
  component: ProfilePage,
})
