/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTutorial } from "@/providers/tutorial-provider";
import { useEffect } from "react";

export const useReadyModifiers = (ide: any, ready: boolean) => {
	const { currentStep, tutorial } = useTutorial();

	useEffect(() => {
		if (!ide) return;

		if (ide && currentStep?.modifiers) {
			currentStep?.modifiers.forEach((mod) => {
				if (typeof ide[mod] === "function") {
					ide[mod]();
				}
			});
		}

		if (ide && tutorial?.globalModifiers) {
			tutorial?.globalModifiers.forEach((mod) => {
				if (typeof ide[mod] === "function") {
					ide[mod]();
				}
			});
		}
	}, [ready, ide, tutorial?.core, currentStep?.modifiers, tutorial?.globalModifiers]);

	return;
};
