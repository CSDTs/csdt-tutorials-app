import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsPosition2 = () => {
	const mathImg = getAssetContent("cornrows/position/math-goal.png");

	return (
		<div id="p1" className="w-full dark:bg-accent bg-white  rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Position Braids</h1>
				<p className="text-lg mb-3">
					Lesson 2: <strong>Starting Point</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						The first plait of your braid is outlined in blue. Its position is given by X and Y coordinates. Try moving
						your cursor over the center of the first plait in the screen on this page. You will see the X, Y coordinates
						of the cursor. If you place the cursor in the center of the first plait, you will see its position is X=0,
						Y=0. You can enter in a new starting position by changing the X and Y coordinates in the box. Try it!
					</p>
					<p>
						Challenge: move the braid to the upper right hand corner. What are the new starting position coordinates?
					</p>{" "}
					{mathImg && <img src={mathImg} alt="Math braid example" className="rounded-md max-w-xs w-full h-auto" />}
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.position.initialSettings}
					visibleFields={cornrowsConfigs.position.visibleFields}
				/>
			</div>
		</div>
	);
};
