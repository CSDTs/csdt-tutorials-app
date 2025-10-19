import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";

export const CornrowsCreateFinal = () => {
	const finalImg = getAssetContent("cornrows/math/math-1.png");

	return (
		<div id="finish" className="w-full dark:bg-accent bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Create Braids</h1>
				<p className="text-lg mb-3">
					Lesson 7: <strong>Next Steps</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>Congrats! You completed the tutorial. You can either:</p>
					<div className="flex flex-row gap-4 justify-center">
						<Button asChild className="w-full md:w-auto">
							<a href="/apps/CornrowCurves/cornrows.html">Jump Straight into the Software</a>
						</Button>
						<Button asChild variant="secondary" className="w-full md:w-auto">
							<a href="/tutorials/index.html?name=cornrows-position">Complete the Positioning Tutorial</a>
						</Button>
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				{finalImg && <img src={finalImg} alt="Cornrow tutorial finish" className="rounded-md w-56 h-auto shadow" />}
			</div>
		</div>
	);
};
