import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTutorial } from "@/providers/tutorial-provider";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";

export const NumericStepSelector = ({ children }: { children?: React.ReactNode }) => {
	const { tutorial, currentStepIndex, setCurrentStep } = useTutorial();
	const [currentWindow, setCurrentWindow] = useState(0);

	const totalSteps = tutorial?.steps.length || 0;

	if (!tutorial) {
		return null;
	}

	// Calculate which window of 5 steps to show
	const stepsPerWindow = 5;
	const totalWindows = Math.ceil(totalSteps / stepsPerWindow);
	const startStep = currentWindow * stepsPerWindow;
	const endStep = Math.min(startStep + stepsPerWindow, totalSteps);
	const visibleSteps = Array.from({ length: endStep - startStep }, (_, i) => startStep + i);

	// Check if we should show navigation buttons
	// const hasMoreSteps = currentWindow < totalWindows - 1;
	// const hasPreviousSteps = currentWindow > 0;
	const showBothArrows = totalSteps > stepsPerWindow;

	// Check if we're on step 5 (index 4) and there are more steps - this triggers cyan pulse
	const isOnStepFiveWithMore = currentStepIndex === 4 && totalSteps > 5;

	const goToNextStep = () => {
		if (currentStepIndex < totalSteps - 1) {
			const nextStepIndex = currentStepIndex + 1;
			setCurrentStep(nextStepIndex);
			// Auto-scroll to the window containing the next step
			const nextStepWindow = Math.floor(nextStepIndex / stepsPerWindow);
			if (nextStepWindow !== currentWindow) {
				setCurrentWindow(nextStepWindow);
			}
		}
	};

	const goToPreviousStep = () => {
		if (currentStepIndex > 0) {
			const prevStepIndex = currentStepIndex - 1;
			setCurrentStep(prevStepIndex);
			// Auto-scroll to the window containing the previous step
			const prevStepWindow = Math.floor(prevStepIndex / stepsPerWindow);
			if (prevStepWindow !== currentWindow) {
				setCurrentWindow(prevStepWindow);
			}
		}
	};

	const goToNextWindow = () => {
		if (currentWindow < totalWindows - 1) {
			setCurrentWindow(currentWindow + 1);
		}
	};

	const goToPreviousWindow = () => {
		if (currentWindow > 0) {
			setCurrentWindow(currentWindow - 1);
		}
	};

	return (
		<div className="flex flex-col items-center space-y-4 p-3">
			{/* Pagination-style Navigation */}
			<nav role="navigation" aria-label="step navigation" className="flex w-full justify-center fourth-step">
				<div className="flex flex-row items-center justify-center gap-2">
					{/* Previous Window Button */}
					{showBothArrows ? (
						<Button
							variant="outline"
							size="icon"
							onClick={goToPreviousWindow}
							className={cn("h-9 w-9", currentWindow === 0 && "opacity-50 cursor-not-allowed")}
							disabled={currentWindow === 0}
							title="Previous window">
							<ChevronsLeft className="h-4 w-4" />
						</Button>
					) : null}

					{/* Previous Step Button */}
					{showBothArrows ? (
						<Button
							variant="outline"
							size="icon"
							onClick={goToPreviousStep}
							className={cn("h-9 w-9", currentStepIndex === 0 && "opacity-50 cursor-not-allowed")}
							disabled={currentStepIndex === 0}
							title="Previous step">
							<ChevronLeft className="h-4 w-4" />
						</Button>
					) : null}

					{/* Step Numbers */}
					<div className="flex items-center gap-1">
						{visibleSteps.map((index, stepIndex) => {
							const stepNumber = index + 1;
							const isCompleted = index < currentStepIndex;
							const isCurrent = index === currentStepIndex;
							const isClickable = true;

							return (
								<div key={index} className="flex items-center">
									<Button
										variant={isCurrent ? "default" : isCompleted ? "secondary" : "outline"}
										size="icon"
										onClick={() => setCurrentStep(index)}
										className={cn(
											"h-9 w-9 text-xs font-medium",
											isCompleted && "bg-primary/10 text-primary border-primary/20",
											isCurrent && "bg-primary text-primary-foreground"
										)}
										disabled={!isClickable}
										title={`Step ${stepNumber}: ${tutorial.steps[index]?.title || ""}`}>
										{stepNumber}
									</Button>

									{/* Connector Line */}
									{stepIndex < visibleSteps.length - 1 && (
										<div
											className={cn(
												"h-0.5 w-2 transition-colors duration-200",
												index < currentStepIndex ? "bg-primary/30" : "bg-border"
											)}
										/>
									)}
								</div>
							);
						})}
					</div>

					{/* Next Step Button */}
					{showBothArrows ? (
						<div className="relative">
							{isOnStepFiveWithMore && (
								<div className="absolute inset-0 rounded-md bg-primary/20 animate-ping opacity-30"></div>
							)}
							<Button
								variant="outline"
								size="icon"
								onClick={goToNextStep}
								className={cn(
									"relative h-9 w-9",
									currentStepIndex === totalSteps - 1 && "opacity-50 cursor-not-allowed"
								)}
								disabled={currentStepIndex === totalSteps - 1}
								title="Next step">
								<ChevronRight className="h-4 w-4" />
							</Button>
						</div>
					) : null}

					{/* Next Window Button */}
					{showBothArrows ? (
						<Button
							variant="outline"
							size="icon"
							onClick={goToNextWindow}
							className={cn("h-9 w-9", currentWindow === totalWindows - 1 && "opacity-50 cursor-not-allowed")}
							disabled={currentWindow === totalWindows - 1}
							title="Next window">
							<ChevronsRight className="h-4 w-4" />
						</Button>
					) : null}
				</div>
			</nav>

			{/* Progress Indicator */}
			{totalSteps > 5 && (
				<div className="flex items-center space-x-2">
					<span className="text-xs text-muted-foreground">
						{startStep + 1}-{endStep} of {totalSteps} steps
					</span>
					<div className="flex space-x-1">
						{Array.from({ length: totalWindows }, (_, i) => {
							const isCurrentWindow = i === currentWindow;
							return (
								<div
									key={i}
									className={cn(
										"h-1.5 w-1.5 rounded-full transition-colors duration-200",
										isCurrentWindow ? "bg-primary" : "bg-muted"
									)}
								/>
							);
						})}
					</div>
				</div>
			)}

			{/* Content */}
			<div className="flex flex-col gap-4 w-full">{children}</div>

			{/* Current Step Title */}
			{tutorial?.steps[currentStepIndex] && (
				<div className="text-center">
					<div className="text-xs font-medium text-foreground">
						Step {currentStepIndex + 1} of {totalSteps}
					</div>
					<div className="text-xs text-muted-foreground truncate max-w-[200px]">
						{tutorial.steps[currentStepIndex].title}
					</div>
				</div>
			)}
		</div>
	);
};
