import ChatPage from "@/pages/chat";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/chat")({
	component: ChatPage,
});
