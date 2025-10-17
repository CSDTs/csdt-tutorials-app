import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAssetContent } from "@/lib/content";
import { useState } from "react";

export const BeadLoomMathGame7 = () => {
	const imageUrlCurrent = getAssetContent("beadloom/math/math-7a.png");
	const imageUrlCorrect = getAssetContent("beadloom/math/math-7b.png");

	const [xValue, setXValue] = useState(0);
	const [yValue, setYValue] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleSubmit = () => {
		setHasSubmitted(true);
		if (xValue === 2 && yValue === 5) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	const getFeedbackMessage = () => {
		if (xValue === 2 && yValue === 5) {
			return "✓ Correct! Great job finding both x and y values!";
		} else if ((xValue === 2 && yValue !== 5) || (xValue !== 2 && yValue === 5)) {
			return "🟡 So close! You got one value right, but check the other one.";
		} else {
			return "✗ Not quite right. Try again!";
		}
	};

	const getFeedbackStyle = () => {
		if (xValue === 2 && yValue === 5) {
			return "bg-green-100 text-green-800 border border-green-200";
		} else if ((xValue === 2 && yValue !== 5) || (xValue !== 2 && yValue === 5)) {
			return "bg-yellow-100 text-yellow-800 border border-yellow-200";
		} else {
			return "bg-red-100 text-red-800 border border-red-200";
		}
	};

	return (
		<div>
			<p>
				The two found this really cool pattern with a missing bead. Find the x AND y values for the bead to fix the
				pattern!
			</p>
			<img src={imageUrlCurrent} alt="Game 1" hidden={isCorrect} className="max-w-lg" />
			<img src={imageUrlCorrect} alt="Game 1" hidden={!isCorrect} className="max-w-lg" />

			{hasSubmitted && (
				<div className={`p-3 rounded-md mb-4 ${getFeedbackStyle()}`}>
					<span className="font-medium">{getFeedbackMessage()}</span>
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
					<Input
						type="number"
						placeholder="Enter the y-value"
						className="w-32 rounded-l-none"
						value={yValue}
						onChange={(e) => setYValue(Number(e.target.value))}
						min="0"
					/>
				</div>
				<Button onClick={handleSubmit} disabled={!xValue || !yValue}>
					Submit
				</Button>
			</div>
		</div>
	);
};
