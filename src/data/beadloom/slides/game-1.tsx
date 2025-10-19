import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAssetContent } from "@/lib/content";
import { useState } from "react";

export const BeadLoomMathGame1 = () => {
	const imageUrlCurrent = getAssetContent("beadloom/math/math-1a.png");
	const imageUrlCorrect = getAssetContent("beadloom/math/math-1b.png");

	const [xValue, setXValue] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleSubmit = () => {
		setHasSubmitted(true);
		if (xValue === 6) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	return (
		<div>
			<p>
				Keifen found this string of beads that has a red bead where a blue bead should go. Enter the x-value of the red
				bead so that he can replace it with a blue one!
			</p>
			<img src={imageUrlCurrent} alt="Game 1" hidden={isCorrect} className="max-w-lg" />
			<img src={imageUrlCorrect} alt="Game 1" hidden={!isCorrect} className="max-w-lg" />

			{hasSubmitted && (
				<div
					className={`p-3 rounded-md mb-4 ${
						isCorrect
							? "bg-green-100 text-green-800 border border-green-200"
							: "bg-red-100 text-red-800 border border-red-200"
					}`}>
					{isCorrect ? (
						<span className="font-medium">✓ Correct! Great job finding the x-value of 6!</span>
					) : (
						<span className="font-medium">✗ Not quite right. Try again!</span>
					)}
				</div>
			)}

			<div className="flex items-center gap-2 mt-5">
				<div className="flex items-center">
					<span className="px-3 py-2 text-sm font-medium dark:bg-gray-800 bg-gray-100 border border-gray-300 rounded-l-md">
						x=
					</span>
					<Input
						type="number"
						placeholder="Enter the x-value"
						className="w-32 rounded-l-none"
						value={xValue}
						onChange={(e) => setXValue(Number(e.target.value))}
						min="0"
					/>
				</div>
				<div className="flex items-center">
					<span className="px-3 py-2 text-sm font-medium dark:bg-gray-800 bg-gray-100 border border-gray-300 rounded-l-md">
						y=
					</span>
					<Input type="number" placeholder="0" value={0} className="w-32 rounded-l-none" disabled />
				</div>
				<Button onClick={handleSubmit} disabled={!xValue}>
					Submit
				</Button>
			</div>
		</div>
	);
};
