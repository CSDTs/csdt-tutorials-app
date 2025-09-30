/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarkdownContent } from "@/hooks/use-markdown-content";
import { useTutorial } from "@/providers/tutorial-provider";
import axios from "axios";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export function StepMarkdown() {
	// const { currentStepContent } = useTutorial();
	// const [content, setContent] = useState<any>("");
	// const [header, setHeader] = useState<any>("");

	// useEffect(() => {
	// 	if (!currentStepContent?.description) return;
	// 	axios.get(currentStepContent?.description).then((res) => {
	// 		const markdownText = res.data;

	// 		// Extract H1 header from markdown
	// 		const h1Match = markdownText.match(/^#\s+(.+)$/m);
	// 		if (h1Match) {
	// 			setHeader(h1Match[1]);
	// 			// Remove the H1 line from content
	// 			const contentWithoutH1 = markdownText.replace(/^#\s+.+$/m, "").trim();
	// 			setContent(contentWithoutH1);
	// 		} else {
	// 			setHeader("");
	// 			setContent(markdownText);
	// 		}
	// 	});
	// }, [currentStepContent]);
	const { content, header } = useMarkdownContent();

	return (
		<Accordion type="single" collapsible className="w-full bg-slate-200 p-2 rounded-md">
			<AccordionItem value="item-1" className="">
				<AccordionTrigger className="text-md font-semibold bg-slate-300 p-2 rounded-md text-slate-800">
					{header || "Instructions"}
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance p-2">
					<Markdown>{content}</Markdown>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
