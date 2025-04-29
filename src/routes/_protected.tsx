import ProtectedLayout from "@/components/layout/protected-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
	component: ProtectedLayout,
});
