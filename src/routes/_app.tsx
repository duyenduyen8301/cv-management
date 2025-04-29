import AppLayout from "@/components/layout/app-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
	component: AppLayout,
});
