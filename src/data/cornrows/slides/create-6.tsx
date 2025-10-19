import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsCreate6 = () => {
	const braidImg = getAssetContent("cornrows/create/math-goal.png");

	return (
		<div id="p5" className="w-full dark:bg-accent bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Create Braids</h1>
				<p className="text-lg mb-3">
					Lesson 6: <strong>Vectors</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						How does the software keep track of all four geometric transformations? Below, you can see a plait with an
						arrow called a vector. Vectors are used in physics to show that something has a position, a direction, and a
						quantity (like speed or force). In our case, the quantity is the plait size. The plait vector tells you:
					</p>
					{braidImg && (
						<div className="flex justify-center mt-4 mb-2">
							<img src={braidImg} alt="Rotation braid example" className="rounded-md w-52 h-auto shadow" />
						</div>
					)}

					<ol className="list-decimal list-inside pl-4 space-y-2">
						<li>
							The center of rotation. Note that the plait rotates around the blue vector anchor at the visual center of
							the plait.
						</li>
						<li>
							The direction of translation. Each time the plait is rotated, the vector rotates with it. Rotations are
							relative to the vector in each iteration, so the rotations "accumulate" with each iteration, giving an
							overall curve to the braid.
						</li>
						<li>
							The width of the plait copy. As each plait is dilated, the vector is dilated with it. So the dilation is
							relative to the vector, and it will accumulate with each iteration.
						</li>
						<li>
							The location of the axis of reflection. Both X axis and Y axis reflections pass through the vector anchor.
						</li>
					</ol>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.vectors.initialSettings}
					visibleFields={cornrowsConfigs.vectors.visibleFields}
				/>
			</div>
		</div>
	);
};
