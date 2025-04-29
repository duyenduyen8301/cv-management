import MessagesPage from '@/pages/mypage/messages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/mypage/messages')({
  component: MessagesPage,
})
