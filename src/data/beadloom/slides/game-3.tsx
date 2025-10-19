import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAssetContent } from "@/lib/content";
import { useState } from "react";

export const BeadLoomMathGame3 = () => {
	const imageUrlCurrent = getAssetContent("beadloom/math/math-3a.png");
	const imageUrlCorrect = getAssetContent("beadloom/math/math-3b.png");

	const [yValue, setYValue] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleSubmit = () => {
		setHasSubmitted(true);
		if (yValue === 3) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	return (
		<div>
			<p>
				Amber found a strand that should have all red beads. Enter the y-value of the blue bead so she can switch it to
				red.
			</p>
			<img src={imageUrlCurrent} alt="Game 3" hidden={isCorrect} className="max-w-lg" />
			<img src={imageUrlCorrect} alt="Game 3" hidden={!isCorrect} className="max-w-lg" />

			{hasSubmitted && (
				<div
					className={`p-3 rounded-md mb-4 ${
						isCorrect
							? "bg-green-100 text-green-800 border border-green-200"
							: "bg-red-100 text-red-800 border border-red-200"
					}`}>
					{isCorrect ? (
						<span className="font-medium">✓ Correct! Great job finding the y-value of 6!</span>
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
					<Input type="number" placeholder="0" value={0} className="w-32 rounded-l-none" disabled />
				</div>
				<div className="flex items-center">
					<span className="px-3 py-2 text-sm font-medium dark:bg-gray-800 bg-gray-100 border border-gray-300 rounded-l-md">
						y=
					</span>
					<Input
						type="number"
						placeholder="Enter the y-value"
						className="w-32 rounded-l-none"
						value={yValue}
						onChange={(e) => setYValue(Number(e.target.value))}
						min="0"
					/>
				</div>
				<Button onClick={handleSubmit} disabled={!yValue}>
					Submit
				</Button>
			</div>
		</div>
	);
};
