import { useTutorial } from "@/providers/tutorial-provider";
import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useStepModifiers = (ide: any) => {
	const { currentStep } = useTutorial();
	const modifiers = currentStep?.modifiers;

	useEffect(() => {
		if (!ide) return;
		if (modifiers) {
			modifiers.forEach((mod) => {
				if (typeof ide[mod] === "function") {
					ide[mod]();
				}
			});
		}
	}, [modifiers, ide]);

	return;
};
