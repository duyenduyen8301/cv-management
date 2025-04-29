import { SearchParams } from "@/interfaces";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useSearchParam() {
	const queryClient = useQueryClient();
	const {
		data: searchParams,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["searchParams"],
		queryFn: () => {
			return queryClient.getQueryData<SearchParams>(["searchParams"]);
		},
	});

	const onSearch = (searchParams: SearchParams) => {
		queryClient.setQueryData<SearchParams>(["searchParams"], searchParams);
	};

	const onClear = () => {
		queryClient.setQueryData(["searchParams"], null);
	};
	return { searchParams, isLoading, error, onSearch, onClear };
}
