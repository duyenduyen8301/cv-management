import SettingsPage from '@/pages/mypage/settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/mypage/settings')({
  component: SettingsPage,
})
