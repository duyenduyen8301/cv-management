import PricingPage from '@/pages/pricing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/pricing')({
  component: PricingPage,
})


