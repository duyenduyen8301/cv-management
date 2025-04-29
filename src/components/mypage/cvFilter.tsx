import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface CVFiltersProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	statusFilter: string;
	setStatusFilter: (status: string) => void;
	skillFilter: string;
	setSkillFilter: (skill: string) => void;
	typeFilter: string;
	setTypeFilter: (type: string) => void;
	allSkills: string[];
}

export default function CVFilters({
	searchQuery,
	setSearchQuery,
	statusFilter,
	setStatusFilter,
	skillFilter,
	setSkillFilter,
	typeFilter,
	setTypeFilter,
	allSkills,
}: CVFiltersProps) {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-6">
			<div className="flex flex-col gap-4 md:flex-row md:items-center">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
					<Input
						placeholder="Search by name or position..."
						className="pl-9 border-gray-200"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
				<div className="flex gap-3 flex-wrap">
					<Select value={statusFilter} onValueChange={setStatusFilter}>
						<SelectTrigger className="w-[140px] border-gray-200">
							<Filter className="h-4 w-4 mr-2" />
							<span>Status</span>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Statuses</SelectItem>
							<SelectItem value="active">Active</SelectItem>
							<SelectItem value="inactive">Inactive</SelectItem>
						</SelectContent>
					</Select>

					<Select value={typeFilter} onValueChange={setTypeFilter}>
						<SelectTrigger className="w-[140px] border-gray-200">
							<Filter className="h-4 w-4 mr-2" />
							<span>Type</span>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Types</SelectItem>
							<SelectItem value="developer">Developer</SelectItem>
							<SelectItem value="designer">Designer</SelectItem>
							<SelectItem value="manager">Manager</SelectItem>
							<SelectItem value="engineer">Engineer</SelectItem>
							<SelectItem value="scientist">Scientist</SelectItem>
						</SelectContent>
					</Select>

					<Select value={skillFilter} onValueChange={setSkillFilter}>
						<SelectTrigger className="w-[180px] border-gray-200">
							<Filter className="h-4 w-4 mr-2" />
							<span>Skills</span>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Skills</SelectItem>
							{allSkills.map((skill) => (
								<SelectItem key={skill} value={skill}>
									{skill}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
}
