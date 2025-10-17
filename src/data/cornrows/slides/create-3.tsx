import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { getAssetContent } from "@/lib/content";

import { useState } from "react";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsCreate3 = () => {
	const braidImg = getAssetContent("cornrows/create/math-goal.png");
	const dilationInitImg = getAssetContent("cornrows/create/dilation-init.png");
	const dilation2Img = getAssetContent("cornrows/create/dilation-2.png");

	// State for interactive dilation quiz
	const [firstAnswer, setFirstAnswer] = useState("");
	const [secondAnswer, setSecondAnswer] = useState("");
	const [showSecondQuestion, setShowSecondQuestion] = useState(false);
	const [firstCorrect, setFirstCorrect] = useState<boolean | null>(null);
	const [secondCorrect, setSecondCorrect] = useState<boolean | null>(null);

	const checkDilation = () => {
		if (!showSecondQuestion) {
			// Check first answer (0.5)
			const isCorrect = parseFloat(firstAnswer) === 0.5;
			setFirstCorrect(isCorrect);
			if (isCorrect) {
				// Show success message briefly, then move to second question
				setTimeout(() => {
					setShowSecondQuestion(true);
					setFirstCorrect(null); // Clear first question feedback when moving to second
				}, 2000); // Show success message for 2 seconds
			}
		} else {
			// Check second answer (0.25)
			const isCorrect = parseFloat(secondAnswer) === 0.25;
			setSecondCorrect(isCorrect);
		}
	};

	return (
		<div id="p2" className="w-full bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Create Braids</h1>
				<p className="text-lg mb-3">
					Lesson 3: <strong>Dilation</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						In this simulation, each plait is the same size. Sometimes, we want the plaits to dilate, either grow larger
						or smaller in each iteration. Let's figure out how dilation works.
					</p>
					<p>
						Question: Let's say the original plait is 1 in wide. And let's make this iteration 50% of the size of the
						original. How wide is the first iteration plait?
					</p>

					<div className="flex justify-center items-center gap-4 my-6">
						<div className="flex flex-col items-center">
							{dilationInitImg && <img src={dilationInitImg} alt="Initial dilation" className="w-24 h-auto" />}
						</div>

						<div className="flex flex-col items-center">
							{dilation2Img && <img src={dilation2Img} alt="First iteration" className="w-16 h-auto mb-2" />}
							<Input
								id="p2a"
								type="number"
								value={firstAnswer}
								onChange={(e) => setFirstAnswer(e.target.value)}
								placeholder=""
								className="w-20"
							/>
						</div>

						{showSecondQuestion && (
							<div className="flex flex-col items-center">
								{dilation2Img && <img src={dilation2Img} alt="Second iteration" className="w-16 h-auto mb-2" />}
								<Input
									id="p2b"
									type="number"
									value={secondAnswer}
									onChange={(e) => setSecondAnswer(e.target.value)}
									placeholder=""
									className="w-20"
								/>
							</div>
						)}

						<div className="flex flex-col items-center">
							<Button onClick={checkDilation} className="w-32">
								Check Your Answer
							</Button>
						</div>
					</div>

					{/* Feedback messages */}
					{firstCorrect === true && (
						<div className="text-green-600 font-semibold mb-2">
							That is correct - the first iteration is 50% of one inch, so it will be 0.5 inches.
						</div>
					)}
					{firstCorrect === false && (
						<div className="text-red-600 font-semibold mb-2">
							Good try - but the correct answer is that the first iteration is 50% of one inch, so it will be 0.5
							inches.
						</div>
					)}
					{showSecondQuestion && secondCorrect === true && (
						<div className="text-green-600 font-semibold mb-2">
							That is correct - the first iteration is 50% of 0.5 inches, so it will be 0.25 inches.
						</div>
					)}
					{showSecondQuestion && secondCorrect === false && (
						<div className="text-red-600 font-semibold mb-2">
							Good try - but the correct answer is that the first iteration is 50% of 0.5 inches, so it will be 0.25
							inches.
						</div>
					)}

					{braidImg && (
						<div className="flex justify-center mt-4 mb-2">
							<img src={braidImg} alt="Dilation braid example" className="rounded-md w-52 h-auto shadow" />
						</div>
					)}
					<p>
						Play with the dilation value in this simulation to get as close as you can to this braid. Write down your
						answer in your notebook and continue to the next lesson,
						<strong>Rotation</strong>.
					</p>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.dilation.initialSettings}
					visibleFields={cornrowsConfigs.dilation.visibleFields}
				/>
			</div>
		</div>
	);
};
