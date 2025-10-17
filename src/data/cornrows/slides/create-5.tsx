import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";
import { useState } from "react";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsCreate5 = () => {
	const braidImg = getAssetContent("cornrows/create/math-goal.png");
	const translationGoalImg = getAssetContent("cornrows/create/translation-goal.png");
	const translationInitImg = getAssetContent("cornrows/create/translate-init.png");
	const [inputValue, setInputValue] = useState("");
	const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

	const checkTranslation = () => {
		const trimmed = inputValue.trim();
		const val = Number(trimmed);
		// accepting 0.75, or values close enough to handle user entry
		if (Math.abs(val - 0.75) < 1e-2) {
			setFeedback("correct");
		} else {
			setFeedback("incorrect");
		}
	};

	return (
		<div id="p4" className="w-full bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Create Braids</h1>
				<p className="text-lg mb-3">
					Lesson 5: <strong>Translation</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						Hairstylists have fine control over the distance between each plait: tight braids have the plaits very close
						together, while loose braids have them farther apart. In this simulation, the distance between each plait is
						greater than we want it to be. Let's figure out how to tighten the braids by controlling the amount each
						plait is moved (translated) in each iteration.
					</p>
					<p>
						Example: Let's say the original plait is 0.5 inches wide. For each iteration, the plait will be translated
						100% of the width of the original plait. The first iteration will translate 0.5 inches.
					</p>
					{translationGoalImg && (
						<div className="flex justify-center my-2">
							<img src={translationGoalImg} alt="Translation goal" className="rounded-md w-40 h-auto shadow" />
						</div>
					)}
					<p>
						<strong>Question:</strong> Let's say the original plait is 1 inch wide. And let's make this first iteration
						translate 75% of the width of the original. How far away is the plait in the first iteration?
					</p>
					<div className="flex flex-row justify-center items-center gap-6">
						<div className="flex flex-col items-center">
							<div className="flex flex-row justify-end w-full mb-2">
								<Input
									id="p4a"
									autoComplete="off"
									type="number"
									className="max-w-[90px] mr-2"
									placeholder="inches"
									value={inputValue}
									onChange={(e) => {
										setInputValue(e.target.value);
										setFeedback(null);
									}}
									step="any"
								/>
								<Button id="checkTranslation" className="h-10 px-4" type="button" onClick={checkTranslation}>
									Check Your Answer
								</Button>
							</div>
							{translationInitImg && (
								<img src={translationInitImg} alt="Translation simulation" className="rounded-md w-36 h-auto shadow" />
							)}
							{feedback === "correct" && (
								<div className="text-green-700 font-semibold mt-2">
									That is correct - the first iteration will move it 75% of one inch, so it will be 0.75 inches.
								</div>
							)}
							{feedback === "incorrect" && (
								<div className="text-red-700 font-semibold mt-2">
									Good try - but not correct -- the first iteration will move it 75% of one inch, so it will be 0.75
									inches.
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				{braidImg && (
					<div className="flex justify-center mt-4 mb-2">
						<img src={braidImg} alt="Rotation braid example" className="rounded-md w-52 h-auto shadow" />
					</div>
				)}
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.translation.initialSettings}
					visibleFields={cornrowsConfigs.translation.visibleFields}
				/>
			</div>
		</div>
	);
};
