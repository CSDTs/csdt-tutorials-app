import type { Tutorial, TutorialStep } from "@/data/tutorial-data";
import { getStepContentUrls } from "@/lib/content";
import { createContext, type ReactNode, useContext, useMemo, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TutorialSettings = {
	[key: string]: any;
};

type TutorialContextType = {
	tutorial: Tutorial | null;
	setTutorial: (tutorial: Tutorial | null) => void;
	currentStep: TutorialStep | null | undefined;
	currentStepIndex: number;
	setCurrentStep: (step: number) => void;
	nextStep: () => void;
	prevStep: () => void;
	currentStepContent: { [key: string]: string } | null | undefined;
	ide: any;
	setIde: (ide: any) => void;
	settings: TutorialSettings;
	setSettings: (settings: TutorialSettings) => void;
	callIdeFunction: (functionName: string, ...args: any[]) => any;
};

const TutorialContext = createContext<TutorialContextType | undefined>(undefined);

export const TutorialProvider = ({ children }: { children: ReactNode }) => {
	const [tutorial, setTutorial] = useState<Tutorial | null>(null);
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [ide, setIde] = useState<any>(null);
	const [settings, setSettings] = useState<TutorialSettings>({});

	const nextStep = () => {
		if (tutorial && currentStep < tutorial.steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const callIdeFunction = (functionName: string, ...args: any[]) => {
		if (!ide) {
			console.warn(`IDE not available. Cannot call function: ${functionName}`);
			return undefined;
		}

		if (typeof ide[functionName] === "function") {
			return ide[functionName](...args);
		} else {
			console.warn(`Function ${functionName} not found on IDE object`);
			return undefined;
		}
	};

	// getStepContentUrls now expects { tutorial } and returns an array of step content objects
	const stepContentArray = useMemo(() => (tutorial ? getStepContentUrls({ tutorial }) : null), [tutorial]);

	const currentStepContent = stepContentArray && tutorial?.steps[currentStep] ? stepContentArray[currentStep] : null;

	return (
		<TutorialContext.Provider
			value={{
				tutorial,
				setTutorial,
				currentStep: tutorial?.steps[currentStep],
				currentStepIndex: currentStep,
				setCurrentStep,
				nextStep,
				prevStep,
				currentStepContent,
				ide,
				setIde,
				settings,
				setSettings,
				callIdeFunction,
			}}>
			{children}
		</TutorialContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTutorial = () => {
	const context = useContext(TutorialContext);
	if (context === undefined) {
		throw new Error("useTutorial must be used within a TutorialProvider");
	}
	return context;
};
