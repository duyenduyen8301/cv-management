import { useState } from "react";
import ChatList from "@/components/chat/chatList";
import ChatView from "@/components/chat/chatView";
import { Chat } from "@/interfaces";

// Find the initially selected chat
const getInitialSelectedChat = () => {
	// This would normally come from a database or API
	const mockChats = [
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
	];

	return mockChats.find((chat) => chat.selected);
};

export default function ChatJDPage() {
	const [selectedChat, setSelectedChat] = useState(getInitialSelectedChat());

	const handleSelectChat = (chat: Chat) => {
		setSelectedChat(chat);
	};

	return (
		<div className="h-screen w-full flex overflow-hidden p-4  container  sm:px-6 py-8 pt-20">
			<div className="flex flex-col w-64 bg-white rounded-2xl overflow-hidden drop-shadow-lg mr-4">
				<ChatList onSelectChat={handleSelectChat} />
			</div>
			<div className="flex-1  overflow-hidden ">
				<ChatView selectedChat={selectedChat} />
			</div>
		</div>
	);
}
