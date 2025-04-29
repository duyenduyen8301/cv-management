import NotificationsPage from '@/pages/mypage/notifications'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/mypage/notifications')({
  component: NotificationsPage,
})
