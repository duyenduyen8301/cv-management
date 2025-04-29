import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Import the CreateCVPage component to reuse it
import CreateCVPage from "@/pages/mypage/cvManagemant/create";

export default function EditCVPage() {
	const id = window.location.pathname.split("/").pop();

	const [loading, setLoading] = useState(true);
	const [cvData, setCvData] = useState(null);

	useEffect(() => {
		// Simulate fetching CV data
		const fetchCV = async () => {
			// In a real app, you would fetch the CV data from an API
			// For demo purposes, we'll use a timeout to simulate loading
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Mock CV data
			const mockCV = {
				id: id,
				title: "Software Engineer CV",
				lastUpdated: "April 15, 2023",
				// This would contain all the CV data that would be passed to the CreateCVPage component
			};

			setCvData(mockCV);
			setLoading(false);
		};

		fetchCV();
	}, [id]);

	if (loading) {
		return (
			<>
				<div className="container py-8">
					<div className="mb-6 flex items-center justify-between">
						<div>
							<Skeleton className="h-8 w-64 mb-2" />
							<Skeleton className="h-4 w-96" />
						</div>
						<Skeleton className="h-10 w-32" />
					</div>

					<Card>
						<CardContent className="p-6">
							<div className="space-y-6">
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-3/4" />
								<Skeleton className="h-32 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-3/4" />
							</div>
						</CardContent>
					</Card>
				</div>
			</>
		);
	}

	// Once data is loaded, render the CreateCVPage component with the CV data
	return <CreateCVPage initialData={cvData} isEditing={true} />;
}
