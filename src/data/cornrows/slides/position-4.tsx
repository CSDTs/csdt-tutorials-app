import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsPosition4 = () => {
	const goalImg = getAssetContent("cornrows/create/math-goal3.png");

	return (
		<div id="p3" className="w-full bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Position Braids</h1>
				<p className="text-lg mb-3">
					Lesson 4: <strong>Starting Dilation</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						The braid in this target image is very large. Try changing the starting dilation so that your simulated
						braid will be large enough to match the target image braid. How is this different from the iterative
						dilation?
					</p>
					{goalImg && <img src={goalImg} alt="Math braid example" className="rounded-md max-w-xs w-full h-auto" />}
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.positionDilation.initialSettings}
					visibleFields={cornrowsConfigs.positionDilation.visibleFields}
				/>
			</div>
		</div>
	);
};
