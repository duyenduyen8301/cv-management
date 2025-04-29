import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Paperclip } from "lucide-react";

// Mock data for messages
const mockConversations = [
	{
		id: 1,
		name: "Tech Innovate",

		lastMessage:
			"Thank you for your application. We would like to schedule an interview.",
		time: "10:30 AM",
		unread: true,
	},
	{
		id: 2,
		name: "Global Solutions",

		lastMessage:
			"Your profile matches our requirements for the Full Stack Developer position.",
		time: "Yesterday",
		unread: false,
	},
	{
		id: 3,
		name: "NextWave",

		lastMessage:
			"We've reviewed your application and would like to discuss further.",
		time: "Yesterday",
		unread: false,
	},
	{
		id: 4,
		name: "Innovate Design",

		lastMessage: "Are you available for a call tomorrow at 2 PM?",
		time: "Monday",
		unread: false,
	},
];

// Mock data for current conversation
const mockMessages = [
	{
		id: 1,
		sender: "Tech Innovate",
		content:
			"Hello John, thank you for your application for the Senior Software Engineer position.",
		time: "10:15 AM",
		isMe: false,
	},
	{
		id: 2,
		sender: "Tech Innovate",
		content:
			"We were impressed with your experience and would like to schedule an interview with our technical team.",
		time: "10:16 AM",
		isMe: false,
	},
	{
		id: 3,
		sender: "Me",
		content:
			"Thank you for considering my application. I'm very interested in the position.",
		time: "10:20 AM",
		isMe: true,
	},
	{
		id: 4,
		sender: "Me",
		content:
			"I'm available for an interview anytime next week. What times work best for your team?",
		time: "10:21 AM",
		isMe: true,
	},
	{
		id: 5,
		sender: "Tech Innovate",
		content:
			"Great! How about next Tuesday at 2 PM EST? We'll send you a calendar invite with the meeting details.",
		time: "10:30 AM",
		isMe: false,
	},
];

export default function MessagesPage() {
	const [activeConversation, setActiveConversation] = useState(
		mockConversations[0]
	);
	const [messageInput, setMessageInput] = useState("");

	const handleSendMessage = () => {
		if (messageInput.trim()) {
			// In a real app, you would send the message to the server
			console.log("Sending message:", messageInput);
			setMessageInput("");
		}
	};

	return (
		<div className="p-8">
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-darkgreen">Messages</h1>
				<p className="text-darkgreen/70">
					Communicate with employers and recruiters
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
				{/* Conversations List */}
				<Card className="lg:col-span-1 overflow-hidden">
					<CardHeader className="px-4 py-3 border-b">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-darkgreen/50 h-4 w-4" />
							<Input
								placeholder="Search messages..."
								className="pl-9 border-darkgreen/20 focus:border-darkgreen"
							/>
						</div>
					</CardHeader>
					<CardContent className="p-0 overflow-auto h-[calc(100vh-16rem)]">
						<div className="divide-y divide-gray-100">
							{mockConversations.map((conversation) => (
								<div
									key={conversation.id}
									className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
										activeConversation.id === conversation.id
											? "bg-gray-50"
											: ""
									}`}
									onClick={() => setActiveConversation(conversation)}
								>
									<Avatar className="h-10 w-10 flex-shrink-0">
										{/* <AvatarImage src={conversation?.avatar} alt={conversation.name} /> */}
										<AvatarFallback className="bg-gradient-to-br from-darkgreen to-accent2 text-white">
											{conversation.name.substring(0, 2)}
										</AvatarFallback>
									</Avatar>
									<div className="flex-1 min-w-0">
										<div className="flex justify-between items-center mb-1">
											<h3 className="font-medium text-darkgreen truncate">
												{conversation.name}
											</h3>
											<span className="text-xs text-darkgreen/60">
												{conversation.time}
											</span>
										</div>
										<p className="text-sm text-darkgreen/70 truncate">
											{conversation.lastMessage}
										</p>
									</div>
									{conversation.unread && (
										<div className="w-2 h-2 bg-accent2 rounded-full flex-shrink-0"></div>
									)}
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Chat Area */}
				<Card className="lg:col-span-2 flex flex-col overflow-hidden">
					<CardHeader className="px-6 py-4 border-b flex-shrink-0">
						<div className="flex items-center">
							<Avatar className="h-10 w-10 mr-3">
								{/* <AvatarImage
                  src={activeConversation?.avatar || "/placeholder.svg?height=40&width=40"}
                  alt={activeConversation?.name}
                /> */}
								<AvatarFallback className="bg-gradient-to-br from-darkgreen to-accent2 text-white">
									{activeConversation?.name.substring(0, 2)}
								</AvatarFallback>
							</Avatar>
							<CardTitle className="text-lg text-darkgreen">
								{activeConversation?.name}
							</CardTitle>
						</div>
					</CardHeader>
					<CardContent className="p-6 overflow-auto flex-1 h-[calc(100vh-24rem)]">
						<div className="space-y-4">
							{mockMessages.map((message) => (
								<div
									key={message.id}
									className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
								>
									<div
										className={`max-w-[80%] rounded-lg p-3 ${
											message.isMe
												? "bg-darkgreen text-white rounded-tr-none"
												: "bg-gray-100 text-darkgreen rounded-tl-none"
										}`}
									>
										<p className="text-sm">{message.content}</p>
										<p
											className={`text-xs mt-1 ${message.isMe ? "text-white/70" : "text-darkgreen/60"}`}
										>
											{message.time}
										</p>
									</div>
								</div>
							))}
						</div>
					</CardContent>
					<div className="p-4 border-t flex items-center gap-2 flex-shrink-0">
						<Button
							variant="ghost"
							size="icon"
							className="text-darkgreen/70 hover:text-darkgreen hover:bg-darkgreen/5"
						>
							<Paperclip className="h-5 w-5" />
						</Button>
						<Input
							placeholder="Type a message..."
							className="border-darkgreen/20 focus:border-darkgreen"
							value={messageInput}
							onChange={(e) => setMessageInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleSendMessage();
								}
							}}
						/>
						<Button
							className="bg-darkgreen hover:bg-darkgreen/90"
							size="icon"
							onClick={handleSendMessage}
							disabled={!messageInput.trim()}
						>
							<Send className="h-5 w-5" />
						</Button>
					</div>
				</Card>
			</div>
		</div>
	);
}
