import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarkdownContent } from "@/hooks/use-markdown-content";

import Markdown from "react-markdown";

export function StepMarkdown() {
	const { content, header } = useMarkdownContent();

	return (
		<Accordion type="single" collapsible className="w-full bg-primary/20 p-2 rounded-md">
			<AccordionItem value="item-1" className="">
				<AccordionTrigger className="text-md font-semibold bg-primary/30 p-2 rounded-md text-primary">
					{header || "Instructions"}
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance p-2">
					<Markdown>{content}</Markdown>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
