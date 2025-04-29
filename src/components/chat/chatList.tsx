import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	PlusIcon,
	SearchIcon,
	MoreHorizontal,
	Edit2,
	Trash2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Chat } from "@/interfaces";
import EditTitleDialog from "@/components/modal/editTitleDialog";
import DeleteDialog from "../modal/deleteDialog";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import useDebounce from "@/hooks/useDebounce";
interface ChatListProp {
	onSelectChat: (chat: Chat) => void;
}

const initialMockChats: Chat[] = [
	{
		id: "1",
		title: "Create Html Game Environment",
		icon: "🎮",
		selected: false,
		messages: [
			{
				id: "1-1",
				role: "user",
				content: "How do I create an HTML game environment?",
				timestamp: "09:15 AM",
			},
			{
				id: "1-2",
				role: "assistant",
				content:
					"To create an HTML game environment, you'll need to use HTML5 Canvas or WebGL for rendering, JavaScript for game logic, and CSS for styling. Here's a step-by-step guide...",
				timestamp: "09:16 AM",
			},
		],
	},
	{
		id: "2",
		title: "Apply To Leave For Emergency",
		icon: "🚨",
		selected: false,
		messages: [
			{
				id: "2-1",
				role: "user",
				content: "I need to apply for emergency leave. What's the process?",
				timestamp: "10:20 AM",
			},
			{
				id: "2-2",
				role: "assistant",
				content:
					"For emergency leave, you should notify your manager as soon as possible. Here's a template email you can use...",
				timestamp: "10:21 AM",
			},
		],
	},
	{
		id: "3",
		title: "What Is UI UX Design?",
		icon: "🎨",
		selected: false,
		messages: [
			{
				id: "3-1",
				role: "user",
				content: "Can you explain what UI/UX design is?",
				timestamp: "11:05 AM",
			},
			{
				id: "3-2",
				role: "assistant",
				content:
					"UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design is concerned with the overall feel and usability of a product...",
				timestamp: "11:06 AM",
			},
		],
	},
	{
		id: "4",
		title: "Create POS System",
		icon: "💻",
		selected: false,
		messages: [
			{
				id: "4-1",
				role: "user",
				content: "How do I create a simple POS system?",
				timestamp: "01:30 PM",
			},
			{
				id: "4-2",
				role: "assistant",
				content:
					"To create a POS (Point of Sale) system, you'll need to consider inventory management, payment processing, and user interface. Here's how you can get started...",
				timestamp: "01:31 PM",
			},
		],
	},
	{
		id: "5",
		title: "What Is UX Audit?",
		icon: "🔍",
		selected: false,
		messages: [
			{
				id: "5-1",
				role: "user",
				content: "What is a UX audit and how do I conduct one?",
				timestamp: "02:45 PM",
			},
			{
				id: "5-2",
				role: "assistant",
				content:
					"A UX audit is an evaluation of a product's user experience to identify usability issues and improvement opportunities. To conduct one, you should...",
				timestamp: "02:46 PM",
			},
		],
	},
	{
		id: "6",
		title: "Create Chatbot GPT",
		icon: "🤖",
		selected: true,
		messages: [
			{
				id: "6-1",
				role: "user",
				content:
					"Create a chatbot gpt using python language what will be step for that",
				timestamp: "10:15 AM",
			},
			{
				id: "6-2",
				role: "assistant",
				content: `Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:

1. Install the required libraries: You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.

2. Load the pre-trained model: GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model. This loads the 1.3B parameter version of GPT-Neo, which is a powerful and relatively recent model.

3. Create a chatbot loop: You'll need to create a loop that takes user input, generates a response using the GPT model, and outputs it to the user. Here's an example loop that uses the input() function to get user input and the loop will keep running until the user exits the program or the loop is interrupted.

4. Add some personality to the chatbot: While GPT can generate text, it doesn't have any inherent personality or style. You can make your chatbot more interesting by adding custom prompts or context that reflect your desired personality. You can then modify the chatbot loop to use these prompts and responses when appropriate. This will make the chatbot seem more human-like and engaging.

These are just the basic steps to get started with a GPT chatbot in Python. Depending on your requirements, you may need to add more features or complexity to the chatbot. Good luck!`,
				timestamp: "10:16 AM",
			},
			{
				id: "6-3",
				role: "user",
				content: "What is use of that chatbot?",
				timestamp: "10:18 AM",
			},
			{
				id: "6-4",
				role: "assistant",
				content: `Chatbots can be used for a wide range of purposes, including:

Customer service chatbots can handle frequently asked questions, provide basic support, and help customers navigate websites or apps. They can operate 24/7, reducing wait times and freeing up human agents to handle more complex issues.

Sales and marketing chatbots can engage website visitors, qualify leads, recommend products, and even process orders. They can provide personalized recommendations based on user preferences and behavior.

Internal support chatbots can help employees find information, access resources, and complete common tasks like requesting time off or submitting expense reports.

Healthcare chatbots can provide basic medical information, help schedule appointments, send medication reminders, and even conduct initial symptom assessments.

Educational chatbots can deliver personalized learning experiences, answer student questions, provide feedback on assignments, and help with research.

Entertainment chatbots can engage users in conversations, tell jokes, play games, or provide recommendations for movies, music, and other content.

Therapy and mental health chatbots can provide support for people dealing with anxiety, depression, or other mental health issues. They can offer coping strategies, mindfulness exercises, and check-ins.

Personal assistant chatbots can help users manage their schedules, set reminders, create to-do lists, and find information.

The specific use case for your Python GPT chatbot would depend on your goals and the domain you're targeting. The steps I provided earlier would give you a basic framework that you could then customize for your specific application.`,
				timestamp: "10:19 AM",
			},
		],
	},
	{
		id: "7",
		title: "How Chat GPT Work?",
		icon: "❓",
		selected: false,
		messages: [
			{
				id: "7-1",
				role: "user",
				content: "How does ChatGPT actually work?",
				timestamp: "03:20 PM",
			},
			{
				id: "7-2",
				role: "assistant",
				content:
					"ChatGPT works using a transformer-based neural network architecture. It's trained on a large corpus of text data using a technique called unsupervised learning...",
				timestamp: "03:21 PM",
			},
		],
	},
	{
		id: "8",
		title: "Crypto Lending App Name",
		icon: "💰",
		selected: false,
		messages: [
			{
				id: "8-1",
				role: "user",
				content: "I need name ideas for a crypto lending app",
				timestamp: "04:10 PM",
			},
			{
				id: "8-2",
				role: "assistant",
				content:
					"Here are some name ideas for your crypto lending app: CryptoLend, BlockLoan, ChainCredit, TokenTrust, CoinFlow, LedgerLend...",
				timestamp: "04:11 PM",
			},
		],
	},
	{
		id: "9",
		title: "Operator Grammar Types",
		icon: "📝",
		selected: false,
		messages: [
			{
				id: "9-1",
				role: "user",
				content: "What are the different types of operator grammar?",
				timestamp: "05:30 PM",
			},
			{
				id: "9-2",
				role: "assistant",
				content:
					"Operator grammars are a type of formal grammar where operators have precedence relationships. The main types include...",
				timestamp: "05:31 PM",
			},
		],
	},
	{
		id: "10",
		title: "Mix Stokes For Binary DFA",
		icon: "🔄",
		selected: false,
		messages: [
			{
				id: "10-1",
				role: "user",
				content: "How do I mix Stokes theorem with binary DFA?",
				timestamp: "06:45 PM",
			},
			{
				id: "10-2",
				role: "assistant",
				content:
					"Stokes theorem and binary DFAs (Deterministic Finite Automata) come from different fields - calculus and computer science respectively. However, if you're looking at computational fluid dynamics...",
				timestamp: "06:46 PM",
			},
		],
	},
];

export default function ChatList({ onSelectChat }: ChatListProp) {
	const [chats, setChats] = useState<Chat[]>(initialMockChats);
	const [editDialogOpen, setEditDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [currentChat, setCurrentChat] = useState<Chat | null>(null);
	const [editTitle, setEditTitle] = useState("");
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	// const debouncedSearchQuery = useDebounce(searchQuery, 500);
	const handleSelect = (id: string) => {
		const updatedChats = chats.map((chat) => ({
			...chat,
			selected: chat.id === id,
		}));
		setChats(updatedChats);

		const selectedChat = updatedChats.find((chat) => chat.id === id);
		if (selectedChat) {
			onSelectChat(selectedChat);
		}
	};

	const handleEditClick = (chat: any, e: any) => {
		e.stopPropagation();
		setCurrentChat(chat);
		setEditTitle(chat.title);
		setEditDialogOpen(true);
	};

	const handleDeleteClick = (chat: any, e: any) => {
		e.stopPropagation();
		setCurrentChat(chat);
		setDeleteDialogOpen(true);
	};

	const handleEditSave = () => {
		if (editTitle.trim()) {
			const updatedChats = chats.map((chat: any) =>
				chat.id === currentChat?.id ? { ...chat, title: editTitle } : chat
			);
			setChats(updatedChats);
			setEditDialogOpen(false);

			// If we're editing the selected chat, update the parent component
			if (currentChat?.selected) {
				const updatedChat = { ...currentChat, title: editTitle };
				onSelectChat(updatedChat);
			}
		}
	};

	const handleDelete = () => {
		const wasSelected = currentChat?.selected;
		const updatedChats = chats.filter((chat) => chat.id !== currentChat?.id);

		// If we deleted the selected chat, select the first one
		if (wasSelected && updatedChats.length > 0) {
			updatedChats[0].selected = true;
			onSelectChat(updatedChats[0]);
		}

		setChats(updatedChats);
		setDeleteDialogOpen(false);
	};

	const handleNewChat = () => {
		const newChat = {
			id: `new-${Date.now()}`,
			title: "New Chat",
			icon: "💬",
			selected: true,
			messages: [],
		};

		const updatedChats = [
			newChat,
			...chats.map((chat) => ({ ...chat, selected: false })),
		];

		setChats(updatedChats);
		onSelectChat(newChat);
	};

	return (
		<div className="flex flex-col h-full">
			<div className="p-4">
				<h1 className="text-xl font-bold tracking-tight">Recruitment Chat</h1>
			</div>

			<div className="px-4 pb-2 flex gap-2">
				<Button
					className="flex-1 bg-darkgreen hover:bg-darkgreen/80 text-white rounded-full flex items-center justify-center gap-2"
					onClick={handleNewChat}
				>
					<PlusIcon className="h-4 w-4" />
					New chat
				</Button>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full h-9 w-9 border-none bg-gray-200 hover:bg-gray-300"
					onClick={() => setIsOpenSearch(!isOpenSearch)}
				>
					<SearchIcon className="h-4 w-4" />
				</Button>
			</div>

			{isOpenSearch && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="px-4"
				>
					<Input
						type="text"
						placeholder="Search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="rounded-full"
					/>
				</motion.div>
			)}

			<div className="flex justify-between px-4 py-2 text-xs text-gray-500">
				<span>Your conversations</span>
				<button className="hover:text-gray-700">Clear All</button>
			</div>

			<div className="flex-1 overflow-y-auto">
				<div className="px-1">
					{chats.map((chat) => (
						<div
							key={chat.id}
							className={cn(
								"w-full text-left px-3 py-2 rounded-md flex items-center gap-3 text-sm mb-1 transition-colors group",
								chat.selected
									? "bg-gray-100 text-indigo-600 font-medium"
									: "hover:bg-gray-100 text-gray-700"
							)}
							onClick={() => handleSelect(chat.id)}
						>
							<span className="flex-shrink-0">{chat.icon}</span>
							<span className="truncate">{chat.title}</span>
							{chat.selected && (
								<div className="ml-auto flex items-center gap-1">
									<span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
								</div>
							)}

							<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
								<DropdownMenu>
									<DropdownMenuTrigger
										asChild
										onClick={(e) => e.stopPropagation()}
									>
										<Button variant="ghost" size="sm" className="h-7 w-7 p-0">
											<MoreHorizontal className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem onClick={(e) => handleEditClick(chat, e)}>
											<Edit2 className="mr-2 h-4 w-4" />
											<span>Edit</span>
										</DropdownMenuItem>
										<DropdownMenuItem
											onClick={(e) => handleDeleteClick(chat, e)}
											className="text-red-500 focus:text-red-500"
										>
											<Trash2 className="mr-2 h-4 w-4" />
											<span>Delete</span>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					))}
				</div>
			</div>

			<EditTitleDialog
				open={editDialogOpen}
				onOpenChange={setEditDialogOpen}
				titleValue={editTitle}
				onSave={handleEditSave}
			/>
			<DeleteDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				title={currentChat?.title || ""}
				description={`Are you sure you want to delete this chat? This action cannot be undone.`}
				handleDelete={handleDelete}
			/>
		</div>
	);
}
