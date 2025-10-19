import { Separator } from "@/components/ui/separator";

import { getAssetContent } from "@/lib/content";

import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsCreate2 = () => {
	const braidImg = getAssetContent("cornrows/create/math-goal.png");

	return (
		<div id="p1" className="w-full dark:bg-accent bg-white  rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Create Braids</h1>
				<p className="text-lg mb-3">
					Lesson 2: <strong>Iteration</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						Our computer simulation starts with one original plait. Each time we add a plait, it is called an{" "}
						<strong>iteration</strong>. Play with the iteration number in this simulation to get as close as you can to
						this braid. Write down your answer in your notebook and continue to the next lesson,
						<strong>Dilation</strong>.
					</p>
					{braidImg && (
						<div className="flex justify-center mt-4 mb-2">
							<img src={braidImg} alt="Iteration braid example" className="rounded-md w-52 h-auto shadow" />
						</div>
					)}
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.iteration.initialSettings}
					visibleFields={cornrowsConfigs.iteration.visibleFields}
				/>
			</div>
		</div>
	);
};
