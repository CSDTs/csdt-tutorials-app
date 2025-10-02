import { fetchTutorialData, type Tutorial } from "@/data/tutorial-data";
import { useUrlParams } from "@/hooks/use-url-params";
import { useTutorial } from "@/providers/tutorial-provider";
import { useEffect } from "react";

import { type StepType, TourProvider } from "@reactour/tour";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const steps: StepType[] = [
	{
		selector: "body",
		content: () => (
			<Card>
				<CardContent>
					<p className="">Welcome to the tutorial! Let's get familiar with the interface.</p>{" "}
				</CardContent>
			</Card>
		),
	},
	{
		selector: ".second-step",
		content: () => (
			<Card>
				<CardContent>
					<p className="">This sidebar holds all the available information for the current step.</p>
				</CardContent>
			</Card>
		),
	},
	{
		selector: ".third-step",
		content: () => (
			<Card>
				<CardContent>
					<p className="">You can advance to the next step, or go back to the previous step.</p>
				</CardContent>
			</Card>
		),
	},
	{
		selector: ".fourth-step",
		content: () => (
			<Card>
				<CardContent>
					<p className="">You can also click on a specific step here, as well as track your progress.</p>
				</CardContent>
			</Card>
		),
	},
	{
		selector: ".fifth-step",
		content: () => (
			<Card>
				<CardContent>
					<p className="">
						This is CSnap. You create your scripts here. Once finished, you click on the green flag to run your code.
					</p>
				</CardContent>
			</Card>
		),
	},
	// {
	// 	selector: ".sixth-step",
	// 	content: () => (
	// 		<Card>
	// 			<CardContent>
	// 				<p className="">
	// 					You can adjust the current tutorial with modifiers, found here. Or adjust the layout to make doing the
	// 					tutorial easier.
	// 				</p>
	// 			</CardContent>
	// 		</Card>
	// 	),
	// },
	{
		selector: ".seventh-step",
		content: () => (
			<Card>
				<CardContent>
					<p className="">You can jump to a specific step here.</p>
				</CardContent>
			</Card>
		),
	},
	{
		selector: ".help-step",
		content: () => (
			<Card>
				<CardContent>
					<p className="">
						If you find yourself struggling with using CSnap, check out our help section here for more information.
					</p>
				</CardContent>
			</Card>
		),
	},

	{
		selector: "body",
		content: ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => (
			<Card>
				<CardContent>
					<p className="">Finally, you are ready to begin.</p>
					<Button onClick={() => setIsOpen(false)}>End Tour</Button>
				</CardContent>
			</Card>
		),
	},
];

export const TutorialClient = ({ children }: { children: React.ReactNode }) => {
	const { setTutorial } = useTutorial();
	const urlParams = useUrlParams();

	useEffect(() => {
		const tutorialData = fetchTutorialData(urlParams?.name);
		setTutorial(tutorialData as Tutorial);
	}, [urlParams?.name, setTutorial]);

	return <TourProvider steps={steps}>{children}</TourProvider>;
};
