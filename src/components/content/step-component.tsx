import { getSlideComponent, hasSlideComponent } from "@/data/slide-component-registry";

import { useTutorial } from "@/providers/tutorial-provider";

import React from "react";

export function StepComponent() {
	const { currentStep } = useTutorial();

	if (!currentStep) return null;

	return (
		<div className="px-4 lg:px-6">
			{/* Render slide component if current step has one */}
			{currentStep.slide && hasSlideComponent(currentStep.slide) && (
				<div className="my-6 p-4 border rounded-lg bg-muted/50">
					{React.createElement(getSlideComponent(currentStep.slide) as React.ComponentType)}
				</div>
			)}

			{/* Show error if slide component is specified but not found */}
			{currentStep.slide && !hasSlideComponent(currentStep.slide) && (
				<div className="my-6 p-4 border border-destructive rounded-lg bg-destructive/10">
					<p className="text-destructive">Slide component "{currentStep.slide}" not found in registry</p>
				</div>
			)}
		</div>
	);
}
