import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";

export const CornrowsPosition1 = () => {
	const mathImg = getAssetContent("cornrows/create/math-1.png");

	return (
		<div id="p0" className="w-full bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Position Braids</h1>
				<p className="text-lg mb-3">
					Lesson 1: <strong>Introduction</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						By now, you know how to create a braid using three geometric concepts: translation, rotation, and dilation.
						This tutorial will explain how to position your braid, and how to create multiple braids.
					</p>
					<p>
						So far you have learned to create a braid using iteration, so every plait was changed a little from the
						plait before it. A dilation shrank each plait, a rotation rotated each plait, and a translation moved each
						plait.
					</p>
					<p>
						Unlike the iteration that affected each plait separately, the parameters for positioning your braid move the
						entire braid as one piece.
					</p>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				{mathImg && <img src={mathImg} alt="Math braid example" className="rounded-md max-w-xs w-full h-auto" />}
			</div>
		</div>
	);
};
