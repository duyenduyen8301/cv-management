import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy, RotateCcw, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import useCustomToast from "@/hooks/useCustomToast";

interface ChatViewProps {
	selectedChat: any;
}

export default function ChatView({ selectedChat }: ChatViewProps) {
	const [messages, setMessages] = useState(selectedChat?.messages || []);
	const [inputValue, setInputValue] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const { showSuccessToast } = useCustomToast();

	const handleCopy = (content: string) => {
		navigator.clipboard.writeText(content);
		showSuccessToast("Copied to clipboard");
	};

	useEffect(() => {
		if (selectedChat?.messages) {
			setMessages(selectedChat.messages);
		} else {
			setMessages([]);
		}
	}, [selectedChat]);

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			const chatContainer = messagesEndRef.current.parentElement;
			if (chatContainer) {
				chatContainer.scrollTo({
					top: chatContainer.scrollHeight,
					behavior: "smooth",
				});
			}
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSendMessage = (message?: string) => {
		const messageToSend = message || inputValue;
		if (messageToSend.trim() && selectedChat) {
			const newMessage = {
				id: `${selectedChat.id}-${Date.now()}`,
				role: "user",
				content: messageToSend.trim(),
				timestamp: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			};

			const updatedMessages = [...messages, newMessage];
			setMessages(updatedMessages);
			setInputValue("");

			// In a real application, you would send the message to an AI service
			// and get a response. For now, we'll just simulate a response.
			setTimeout(() => {
				const responseMessage = {
					id: `${selectedChat.id}-${Date.now() + 1}`,
					role: "assistant",
					content: `This is a simulated response to: "${messageToSend.trim()}"`,
					timestamp: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				};
				setMessages((prev: any) => [...prev, responseMessage]);
			}, 1000);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const handleRegenerateMessage = (message: string) => {
		handleSendMessage(message);
	};

	if (!selectedChat) {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<h3 className="text-lg font-medium text-gray-700">
						No chat selected
					</h3>
					<p className="text-sm text-gray-500 mt-1">
						Select a chat from the sidebar or create a new one
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col h-full">
			<div
				// ref={messagesEndRef}
				className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide"
			>
				{messages.map((message: any, index: number) => (
					<div key={message.id} className="max-w-4xl mx-auto">
						<div className="flex items-start gap-4 group">
							<div className="flex-shrink-0 mt-1">
								<Avatar className="h-8 w-8">
									{message.role === "user" ? (
										<>
											<AvatarImage
												src="/vibrant-street-market.png"
												alt="User"
											/>
											<AvatarFallback>U</AvatarFallback>
										</>
									) : (
										<>
											<AvatarImage src="/abstract-ai-network.png" alt="AI" />
											<AvatarFallback>AI</AvatarFallback>
										</>
									)}
								</Avatar>
							</div>

							<div className="flex-1">
								<div className="flex items-center">
									<span className="text-xs text-gray-500">
										{message.role === "assistant"
											? "CHAT A.I+"
											: selectedChat.title}
									</span>
									{message.role === "assistant" && (
										<button className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M16 8L8 16M8 8L16 16"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									)}
								</div>

								<div
									className={cn(
										"mt-1 text-sm",
										message.role === "assistant"
											? "text-gray-800"
											: "text-gray-600"
									)}
								>
									{message.content}
								</div>

								{message.role === "assistant" && (
									<div className="flex items-center gap-2 mt-2">
										<Button
											variant="ghost"
											size="sm"
											className="h-8 w-8 p-0 rounded-full"
											onClick={() => handleCopy(message.content)}
										>
											<Copy className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											className="h-8 w-8 p-0 rounded-full"
											onClick={() =>
												handleRegenerateMessage(messages[index - 1].content)
											}
										>
											<RotateCcw className="h-4 w-4" />
										</Button>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			<div className="p-4 border-t">
				<div className="max-w-4xl mx-auto relative">
					<div className="flex items-center border rounded-full bg-white overflow-hidden">
						<input
							type="text"
							placeholder="What's in your mind..."
							className="flex-1 py-3 px-4 outline-none text-sm"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
						<Button
							size="sm"
							className="h-8 w-8 p-0 rounded-full bg-darkgreen hover:bg-darkgreen/80 text-white mr-2"
							onClick={() => handleSendMessage()}
						>
							<Send className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
