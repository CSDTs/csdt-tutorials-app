import { useTutorial } from "@/providers/tutorial-provider";
import axios from "axios";
import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useCSnapBase = (ide: any, url: string | null, ready: boolean, setReady: (ready: boolean) => void) => {
	const { tutorial, currentStep } = useTutorial();

	useEffect(() => {
		if (!ide) return;
		if (ready) return;

		if (url) {
			const whitelist = currentStep?.whitelist;
			const coreList = tutorial?.core;
			axios.get(url).then((res) => {
				ide.loadTutorial(res.data, false, coreList ?? [], whitelist ?? [], () => {
					setReady(true);
				});
				return res.data;
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ide, url, ready, tutorial, currentStep]);

	return;
};
