export const getInitials = (name: string) => {
	const initials = name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase()
		.substring(0, 2);

	return initials;
};

export const getYears = (years: string) => {
	const getYearRange = years.split("(")[1];

	if (!getYearRange) return [];
	const yearsArray = getYearRange
		.split("-")
		.map((year) => year.split(" ")[0].trim().replace("+", ""))
		.map((year) => parseInt(year));

	return yearsArray;
};
