import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";
import { useState } from "react";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsCreate4 = () => {
	const braidImg = getAssetContent("cornrows/create/math-goal.png");
	const rotationImg = getAssetContent("cornrows/create/rotation-init.png");
	const [inputValue, setInputValue] = useState("");
	const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

	const checkRotation = () => {
		const trimmed = inputValue.trim();
		const val = Number(trimmed);
		if (val === 45) {
			setFeedback("correct");
		} else {
			setFeedback("incorrect");
		}
	};

	return (
		<div id="p3" className="w-full dark:bg-accent bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Create Braids</h1>
				<p className="text-lg mb-3">
					Lesson 4: <strong>Rotation</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						In this simulation pictured on this page, each plait has the same orientation. But we want the plaits to
						rotate in each iteration. Let's figure out how rotation works.
					</p>
					<p>
						<strong>Question:</strong> Let's say we rotate the plaits 15 degrees in each iteration. The original plait
						is not rotated at all, so we will call that 0 degrees. The first iteration is rotated 15 degrees, and the
						second 30 degrees. How many degrees is the plait rotated in the <strong>third</strong> iteration?
					</p>
					<div className="flex flex-row justify-center items-center gap-6">
						<div className="flex flex-col items-center">
							{rotationImg && (
								<img src={rotationImg} alt="Rotation example" className="rounded-md w-48 h-auto shadow mb-4" />
							)}
							<div className="flex flex-row justify-end w-full">
								<Input
									id="p3a"
									autoComplete="off"
									type="number"
									className="max-w-[90px] mr-2"
									placeholder="Degrees"
									value={inputValue}
									onChange={(e) => {
										setInputValue(e.target.value);
										setFeedback(null);
									}}
								/>
								<Button id="checkRotation" className="h-10 px-4" type="button" onClick={checkRotation}>
									Check Your Answer
								</Button>
							</div>
							{feedback === "correct" && (
								<div className="text-green-700 font-semibold mt-2">
									That is correct - we add 15 degrees each time, so the third iteration will be 45 degrees.
								</div>
							)}
							{feedback === "incorrect" && (
								<div className="text-red-700 font-semibold mt-2">
									Good try - but not correct -- we add 15 degrees each time, so the third iteration will be 45 degrees.
								</div>
							)}
						</div>
					</div>
					<p>
						Again, you can see how iteration lets you accumulate changes: every time you make a new plait, it gets
						rotated in addition to the last plait's rotation.
					</p>
					<p>
						Now try experimenting with the amount of rotation in the simulation above. When you think you have the right
						answer, enter it in your notebook. What happens if you use a negative rotation? Write down your answer in
						your notebook and then continue to the next lesson.
					</p>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.rotation.initialSettings}
					visibleFields={cornrowsConfigs.rotation.visibleFields}
				/>
				{braidImg && (
					<div className="flex justify-center mt-4 mb-2">
						<img src={braidImg} alt="Rotation braid example" className="rounded-md w-52 h-auto shadow" />
					</div>
				)}
			</div>
		</div>
	);
};
