import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationCustomProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function PaginationCustom({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationCustomProps) {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
						className={
							currentPage === 1
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>

				{Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
					let pageNumber: number;

					// Logic to show correct page numbers when there are many pages
					if (totalPages <= 5) {
						pageNumber = index + 1;
					} else if (currentPage <= 3) {
						pageNumber = index + 1;
						if (index === 4)
							return (
								<PaginationItem key={index}>
									<PaginationEllipsis />
								</PaginationItem>
							);
					} else if (currentPage >= totalPages - 2) {
						pageNumber = totalPages - 4 + index;
						if (index === 0)
							return (
								<PaginationItem key={index}>
									<PaginationEllipsis />
								</PaginationItem>
							);
					} else {
						if (index === 0)
							return (
								<PaginationItem key={index}>
									<PaginationLink
										className="cursor-pointer"
										onClick={() => onPageChange(1)}
									>
										1
									</PaginationLink>
								</PaginationItem>
							);
						if (index === 1)
							return (
								<PaginationItem className="cursor-pointer" key={index}>
									<PaginationEllipsis />
								</PaginationItem>
							);
						if (index === 3)
							return (
								<PaginationItem className="cursor-pointer" key={index}>
									<PaginationEllipsis />
								</PaginationItem>
							);
						if (index === 4)
							return (
								<PaginationItem className="cursor-pointer" key={index}>
									<PaginationLink onClick={() => onPageChange(totalPages)}>
										{totalPages}
									</PaginationLink>
								</PaginationItem>
							);
						pageNumber = currentPage + index - 2;
					}

					return (
						<PaginationItem key={index}>
							<PaginationLink
								onClick={() => onPageChange(pageNumber)}
								isActive={currentPage === pageNumber}
								className="cursor-pointer"
							>
								{pageNumber}
							</PaginationLink>
						</PaginationItem>
					);
				})}

				<PaginationItem>
					<PaginationNext
						onClick={() =>
							currentPage < totalPages && onPageChange(currentPage + 1)
						}
						className={
							currentPage === totalPages
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
