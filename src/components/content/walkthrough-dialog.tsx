/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTour } from "@reactour/tour";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useMarkdownContent } from "@/hooks/use-markdown-content";
import { useUrlParams } from "@/hooks/use-url-params";
import { cn } from "@/lib/utils";
import { useTutorial } from "@/providers/tutorial-provider";

export const WalkthroughDialog = () => {
	const { currentStep } = useTutorial();
	const { setIsOpen } = useTour();
	const urlParams = useUrlParams();

	// Determine if the current step has "nextSteps" in its content array
	const hasNextSteps = currentStep && Array.isArray(currentStep.content) && currentStep.content.includes("nextSteps");

	// State to control dialog open/close
	const [open, setOpen] = React.useState(false);
	const [dontShowAgain, setDontShowAgain] = React.useState(false);
	const [tourStarted, setTourStarted] = React.useState(false);
	const [dialogDismissed, setDialogDismissed] = React.useState(false);
	const prevStepRef = React.useRef<any>(null);

	const { content } = useMarkdownContent("nextSteps");

	// Check if user has opted to not show the walkthrough again
	const hasSeenWalkthrough = React.useMemo(() => {
		return localStorage.getItem("walkthrough-dont-show") === "true";
	}, []);

	// Show walkthrough dialog when page loads with 'name' URL param (and user hasn't opted out)
	React.useEffect(() => {
		if (urlParams?.name && !hasSeenWalkthrough && !open && !tourStarted && !dialogDismissed) {
			setOpen(true);
		}
	}, [urlParams?.name, hasSeenWalkthrough, open, tourStarted, dialogDismissed]);

	// Reset states when URL changes (page refresh or navigation)
	React.useEffect(() => {
		setTourStarted(false);
		setDialogDismissed(false);
	}, [urlParams?.name]);

	React.useEffect(() => {
		// If we just navigated to a step with nextSteps, open the dialog
		if (hasNextSteps && prevStepRef.current !== currentStep) {
			setOpen(true);
		}
		prevStepRef.current = currentStep;
	}, [hasNextSteps, currentStep]);

	const startTour = () => {
		setOpen(false);
		setTourStarted(true);
		if (dontShowAgain) {
			localStorage.setItem("walkthrough-dont-show", "true");
		}
		setIsOpen(true);
	};

	const skipTour = () => {
		setOpen(false);
		setTourStarted(true);
		setDialogDismissed(true);
		if (dontShowAgain) {
			localStorage.setItem("walkthrough-dont-show", "true");
		}
	};

	const launchTutorials = () => {
		if (import.meta.env.PROD) {
			window.location.href = "/tutorials/index.html";
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

	// Show dialog if there are next steps OR if there's a name URL param (for walkthrough) and tour hasn't been started and dialog hasn't been dismissed
	const shouldShowDialog = hasNextSteps || (urlParams?.name && !hasSeenWalkthrough && !tourStarted && !dialogDismissed);

	if (!shouldShowDialog) return null;

	// Determine if this is a walkthrough dialog (URL param) or next steps dialog
	const isWalkthroughDialog =
		urlParams?.name && !hasSeenWalkthrough && !hasNextSteps && !tourStarted && !dialogDismissed;

	const handleOpenChange = (dialogOpen: boolean) => {
		setOpen(dialogOpen);
		// If dialog is being closed and it's a walkthrough dialog, mark it as dismissed
		if (!dialogOpen && isWalkthroughDialog) {
			setDialogDismissed(true);
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="max-w-xl  border-none ">
				<DialogHeader>
					<DialogTitle>{isWalkthroughDialog ? "Welcome!" : "Congratulations!"}</DialogTitle>
				</DialogHeader>
				<div className="mb-5 mt-2 text-base">
					{isWalkthroughDialog
						? "Would you like to take a quick tour of the interface to get familiar with the layout?"
						: content ||
							"You completed the tutorial. You are now ready to move on to the simulation where you create your own designs!"}
				</div>

				{isWalkthroughDialog && (
					<div className="flex items-center space-x-2 mb-5">
						<Checkbox
							id="dont-show-again"
							checked={dontShowAgain}
							onCheckedChange={(checked) => setDontShowAgain(checked as boolean)}
						/>
						<Label htmlFor="dont-show-again" className="text-sm">
							Don't show this again
						</Label>
					</div>
				)}

				<div className="flex flex-col space-y-5 ">
					{isWalkthroughDialog ? (
						<div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
							<Button variant="outline" className="w-full sm:flex-1 " onClick={skipTour}>
								Skip Tour
							</Button>
							<Button className="w-full sm:flex-1 " onClick={startTour}>
								Start Tour
							</Button>
						</div>
					) : (
						<>
							<div className={cn("flex flex-col gap-2 sm:flex-row sm:gap-4", "items-stretch sm:items-start")}>
								{currentStep?.background && (
									<Button variant="outline" className="w-full sm:flex-1 " onClick={launchBackground}>
										Review the background
									</Button>
								)}
								<Button variant="outline" className="w-full sm:flex-1 " onClick={launchTutorials}>
									Try another tutorial
								</Button>
							</div>
							{currentStep?.software && (
								<Button className="w-full " onClick={launchSoftware}>
									Jump into the software
								</Button>
							)}
						</>
					)}
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
