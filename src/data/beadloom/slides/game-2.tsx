import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAssetContent } from "@/lib/content";
import { useState } from "react";

export const BeadLoomMathGame2 = () => {
	const imageUrlCurrent = getAssetContent("beadloom/math/math-2a.png");
	const imageUrlCorrect = getAssetContent("beadloom/math/math-2b.png");

	const [xValue, setXValue] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleSubmit = () => {
		setHasSubmitted(true);
		if (xValue === 4) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	return (
		<div>
			<p>
				Keifen wants to put a red bead in this string of blue beads. Type the number on the x-axis where the missing
				bead is!
			</p>
			<img src={imageUrlCurrent} alt="Game 2" hidden={isCorrect} className="max-w-lg" />
			<img src={imageUrlCorrect} alt="Game 2" hidden={!isCorrect} className="max-w-lg" />

			{hasSubmitted && (
				<div
					className={`p-3 rounded-md mb-4 ${
						isCorrect
							? "bg-green-100 text-green-800 border border-green-200"
							: "bg-red-100 text-red-800 border border-red-200"
					}`}>
					{isCorrect ? (
						<span className="font-medium">✓ Correct! Great job finding the x-value of 4!</span>
					) : (
						<span className="font-medium">✗ Not quite right. Try again!</span>
					)}
				</div>
			)}

			<div className="flex items-center gap-2">
				<div className="flex items-center">
					<span className="px-3 py-2 text-sm font-medium bg-gray-100 border border-gray-300 rounded-l-md">x=</span>
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
					<span className="px-3 py-2 text-sm font-medium bg-gray-100 border border-gray-300 rounded-l-md">y=</span>
					<Input type="number" placeholder="0" value={0} className="w-32 rounded-l-none" disabled />
				</div>
				<Button onClick={handleSubmit} disabled={!xValue}>
					Submit
				</Button>
			</div>
		</div>
	);
};
