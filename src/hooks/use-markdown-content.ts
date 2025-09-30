/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTutorial } from "@/providers/tutorial-provider";
import axios from "axios";
import { useEffect, useState } from "react";

export const useMarkdownContent = (contentType: "description" | "nextSteps" = "description") => {
	const { currentStepContent } = useTutorial();
	const [content, setContent] = useState<any>("");
	const [header, setHeader] = useState<any>("");

	useEffect(() => {
		if (!currentStepContent?.[contentType]) return;
		axios.get(currentStepContent?.[contentType]).then((res) => {
			const markdownText = res.data;

			// Extract H1 header from markdown
			const h1Match = markdownText.match(/^#\s+(.+)$/m);
			if (h1Match) {
				setHeader(h1Match[1]);
				// Remove the H1 line from content
				const contentWithoutH1 = markdownText.replace(/^#\s+.+$/m, "").trim();
				setContent(contentWithoutH1);
			} else {
				setHeader("");
				setContent(markdownText);
			}
		});
	}, [currentStepContent, contentType]);

	return { content, header };
};
