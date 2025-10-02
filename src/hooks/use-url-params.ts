import { useMemo } from "react";

// Utility to get all URL params as an object
export function useUrlParams() {
	const params = useMemo(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const obj: Record<string, string> = {};
		for (const [key, value] of searchParams.entries()) {
			obj[key] = value;
		}
		return obj;
	}, []);
	return params;
}
