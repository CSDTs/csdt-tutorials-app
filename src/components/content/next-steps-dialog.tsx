/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMarkdownContent } from "@/hooks/use-markdown-content";
import { cn } from "@/lib/utils";
import { useTutorial } from "@/providers/tutorial-provider";

export const NextStepsDialog = () => {
	const { currentStep } = useTutorial();

	// Determine if the current step has "nextSteps" in its content array
	const hasNextSteps = currentStep && Array.isArray(currentStep.content) && currentStep.content.includes("nextSteps");

	// State to control dialog open/close, only open once per "nextSteps" step
	const [open, setOpen] = React.useState(false);
	const prevStepRef = React.useRef<any>(null);

	const { content } = useMarkdownContent("nextSteps");

	React.useEffect(() => {
		// If we just navigated to a step with nextSteps, open the dialog
		if (hasNextSteps && prevStepRef.current !== currentStep) {
			setOpen(true);
		}
		prevStepRef.current = currentStep;
	}, [hasNextSteps, currentStep]);

	const launchTutorials = () => {
		if (import.meta.env.PROD) {
			window.location.href = "/assets/tutorials/index.html";
		} else {
			window.location.href = "/";
		}
	};

	const launchBackground = () => {
		window.location.href = import.meta.env.VITE_BACKGROUND_PREFIX + currentStep?.background;
	};

	const launchSoftware = () => {
		window.location.href = import.meta.env.VITE_BACKGROUND_PREFIX + currentStep?.software;
	};

	if (!hasNextSteps) return null;

	return (
		<Dialog open={open} onOpenChange={(dialogOpen) => setOpen(dialogOpen)}>
			<DialogContent className="max-w-xl bg-[#2D3748] text-white border-none ">
				<DialogHeader>
					<DialogTitle>Congratulations!</DialogTitle>
				</DialogHeader>
				<div className="mb-5 mt-2 text-base">
					{content ||
						"You completed the tutorial. You are now ready to move on to the simulation where you create your own designs!"}
				</div>
				<div className="flex flex-col space-y-5 ">
					<div className={cn("flex flex-col gap-2 sm:flex-row sm:gap-4", "items-stretch sm:items-start")}>
						{currentStep?.background && (
							<Button variant="ghost" className="w-full sm:flex-1 bg-[#3D4756]" onClick={launchBackground}>
								Review the background
							</Button>
						)}
						<Button variant="ghost" className="w-full sm:flex-1 bg-[#3D4756]" onClick={launchTutorials}>
							Try another tutorial
						</Button>
					</div>
					{currentStep?.software && (
						<Button className="w-full bg-[#4399E1] text-white hover:bg-[#4399E1]/90" onClick={launchSoftware}>
							Jump into the software
						</Button>
					)}
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
