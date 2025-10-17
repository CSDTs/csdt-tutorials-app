import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsPosition3 = () => {
	const mathImg = getAssetContent("cornrows/position/math-goal2.png");

	return (
		<div id="p2" className="w-full bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Position Braids</h1>
				<p className="text-lg mb-3">
					Lesson 3: <strong>Starting Angle</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						The braid in this simulation is going sideways, along the X axis. But the braid in this target image is
						going straight up. Try changing the starting angle so that your simulated braid is going straight up, like
						the target image braid. How is this different from the iterative rotation?
					</p>
					{mathImg && <img src={mathImg} alt="Math braid example" className="rounded-md max-w-xs w-full h-auto" />}
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.positionAngle.initialSettings}
					visibleFields={cornrowsConfigs.positionAngle.visibleFields}
				/>
			</div>
		</div>
	);
};
