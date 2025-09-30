import { cn } from "@/lib/utils";
import { useTutorial } from "@/providers/tutorial-provider";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
	const hasMoreSteps = currentWindow < totalWindows - 1;
	const showPreviousButton = currentWindow > 0;

	// Check if we're on step 5 (index 4) and there are more steps - this triggers cyan pulse
	const isOnStepFiveWithMore = currentStepIndex === 4 && totalSteps > 5;

	const showNextWindow = () => {
		if (currentWindow < totalWindows - 1) {
			setCurrentWindow(currentWindow + 1);
		}
	};

	const showPreviousWindow = () => {
		if (currentWindow > 0) {
			setCurrentWindow(currentWindow - 1);
		}
	};

	return (
		<div className="flex flex-col items-center space-y-3 p-3">
			{/* Step Numbers */}
			<div className="flex items-center justify-center w-full">
				{/* Previous Steps Button */}
				{showPreviousButton ? (
					<div className="relative mr-3">
						<button
							onClick={showPreviousWindow}
							className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-200 text-slate-800 transition-all duration-200 hover:bg-slate-300 hover:border-slate-500 hover:scale-105 shadow-sm"
							title="Previous steps">
							<ChevronLeft className="h-5 w-5" />
						</button>
					</div>
				) : (
					<div className="w-10 mr-3" /> // Spacer to maintain centering
				)}

				{/* Steps Container */}
				<div className="flex items-center space-x-1">
					{visibleSteps.map((index, stepIndex) => {
						const stepNumber = index + 1;
						const isCompleted = index < currentStepIndex;
						const isCurrent = index === currentStepIndex;
						const isClickable = true;

						return (
							<div key={index} className="flex items-center">
								{/* Step Number */}
								<button
									onClick={() => setCurrentStep(index)}
									className={cn(
										"flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all duration-200 hover:scale-105",
										"border-2 border-gray-300 text-gray-600",
										isCompleted && "bg-cyan-100 border-cyan-300 text-cyan-700",
										isCurrent && "bg-cyan-200 border-cyan-400 text-cyan-800 shadow-md",
										isClickable && "cursor-pointer hover:shadow-sm",
										!isClickable && "cursor-default"
									)}
									disabled={!isClickable}
									title={`Step ${stepNumber}: ${tutorial.steps[index]?.title || ""}`}>
									{stepNumber}
								</button>

								{/* Connector Line */}
								{stepIndex < visibleSteps.length - 1 && (
									<div
										className={cn(
											"h-0.5 w-4 transition-colors duration-200",
											index < currentStepIndex ? "bg-cyan-300" : "bg-gray-300"
										)}
									/>
								)}
							</div>
						);
					})}
				</div>

				{/* Next Steps Button with Conditional Pulsing Ring */}
				{hasMoreSteps ? (
					<div className="relative ml-3">
						{isOnStepFiveWithMore && (
							<div className="absolute inset-0 rounded-full bg-gray-400 animate-ping opacity-20"></div>
						)}
						<button
							onClick={showNextWindow}
							className={cn(
								"relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 hover:scale-105 shadow-sm",
								isOnStepFiveWithMore
									? "border-slate-400 bg-slate-200 text-slate-800"
									: "border-slate-400 bg-slate-200 text-slate-800 hover:bg-slate-300 hover:border-slate-500"
							)}
							title="Next steps">
							<ChevronRight className="h-5 w-5" />
						</button>
					</div>
				) : (
					<div className="w-10 ml-3" /> // Spacer to maintain centering
				)}
			</div>
			{/* Progress Indicator */}
			{totalSteps > 5 && (
				<div className="flex items-center space-x-2">
					<span className="text-xs text-gray-500">
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
										isCurrentWindow ? "bg-cyan-400" : "bg-gray-300"
									)}
								/>
							);
						})}
					</div>
				</div>
			)}
			<div className="flex flex-col gap-4">{children}</div>

			{/* Current Step Title */}
			{tutorial.steps[currentStepIndex] && (
				<div className="text-center">
					<div className="text-xs font-medium text-gray-700">
						Step {currentStepIndex + 1} of {totalSteps}
					</div>
					<div className="text-xs text-gray-500 truncate max-w-[200px]">{tutorial.steps[currentStepIndex].title}</div>
				</div>
			)}
		</div>
	);
};
