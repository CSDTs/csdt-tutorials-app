/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTutorial } from "@/providers/tutorial-provider";
import { useEffect } from "react";

export const useWhitelist = (ide: any) => {
	const { currentStep, tutorial } = useTutorial();
	const whitelist = currentStep?.whitelist;
	const coreList = tutorial?.core;

	useEffect(() => {
		if (!ide) return;
		if (whitelist?.length === 0 || whitelist === undefined) return;
		if (whitelist) ide.displayTutorialBlocks(coreList, whitelist);
	}, [whitelist, ide, coreList]);

	return;
};
