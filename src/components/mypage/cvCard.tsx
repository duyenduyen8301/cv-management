import { Edit, Eye, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";

interface CVCardProps {
	id: string;
	title: string;
	candidate: string;
	uploadDate: string;
	status: string;
	type: string;
	skills: string[];
}

export default function CVCard({
	cv,
	onDelete,
}: {
	cv: CVCardProps;
	onDelete: (id: string) => void;
}) {
	return (
		<div className="w-full h-full">
			<div
				key={cv.id}
				className="flex flex-col border border-gray-100 shadow-md rounded-lg overflow-hidden bg-white"
			>
				<div className="h-40 bg-gray-100 flex items-center justify-center">
					<FileText className="h-16 w-16 text-darkgreen/30" />
				</div>
				<div className="flex-1 flex flex-col justify-between p-4">
					<div>
						<div className="flex justify-between items-center mb-2 gap-2">
							<h3 className="font-medium text-darkgreen text-overflow-ellipsis overflow-hidden whitespace-nowrap">
								{cv.title}
							</h3>
							<span
								className={`text-xs px-2 py-1 rounded-full ${
									cv.status === "active"
										? "bg-green-100 text-green-600"
										: "bg-gray-100 text-gray-600"
								}`}
							>
								{cv.status === "active" ? "Active" : "Inactive"}
							</span>
						</div>
						<p className="text-sm text-darkgreen/60 mb-2">
							<span className="font-medium">Candidate:</span> {cv.candidate}
						</p>
						<p className="text-sm text-darkgreen/60 mb-3">
							Uploaded: {cv.uploadDate}
						</p>

						<div className="flex flex-wrap gap-1 mb-4">
							{cv.skills.slice(0, 1).map((skill: string, idx: number) => (
								<Badge
									key={idx}
									variant="outline"
									className="bg-darkgreen/5 text-darkgreen border-darkgreen/20"
								>
									{skill}
								</Badge>
							))}
							{cv.skills.length > 1 && (
								<Badge
									variant="outline"
									className="bg-darkgreen/5 text-darkgreen border-darkgreen/20"
								>
									+{cv.skills.length - 1} more
								</Badge>
							)}
						</div>
					</div>
					<div className="flex space-x-2">
						<Link href={`/cv-detail/${cv.id}`} className="flex-1">
							<Button
								variant="outline"
								size="sm"
								className="w-full flex-1 text-xs border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
							>
								<Eye className="mr-1 h-3 w-3" />
							</Button>
						</Link>
						<Link href={`/mypage/edit-cv/${cv.id}`} className="flex-1">
							<Button
								variant="outline"
								size="sm"
								className="w-full flex-1 text-xs border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
							>
								<Edit className="mr-1 h-3 w-3" />
							</Button>
						</Link>
						<Button
							variant="outline"
							size="sm"
							className="flex-1 text-xs border-darkgreen/20 text-darkgreen hover:bg-red-600 hover:text-white hover:border-red-600"
							onClick={() => onDelete(cv.id)}
						>
							<Trash2 className="mr-1 h-3 w-3" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
