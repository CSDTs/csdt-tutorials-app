import { fetchTutorialData, type Tutorial } from "@/data/tutorial-data";
import { useTutorial } from "@/providers/tutorial-provider";
import { useEffect, useMemo } from "react";

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

export const TutorialClient = ({ children }: { children: React.ReactNode }) => {
	const { setTutorial } = useTutorial();
	const urlParams = useUrlParams();

	useEffect(() => {
		const tutorialData = fetchTutorialData(urlParams?.name);
		setTutorial(tutorialData as Tutorial);
	}, [urlParams?.name, setTutorial]);

	return <>{children}</>;
};
