import { Separator } from "@/components/ui/separator";
import { getAssetContent } from "@/lib/content";
import { CornrowsMathApp, cornrowsConfigs } from "../app";

export const CornrowsPosition5 = () => {
	const goalImg = getAssetContent("cornrows/create/math-goal2.png");

	return (
		<div id="p4" className="w-full dark:bg-accent bg-white  rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Position Braids</h1>
				<p className="text-lg mb-3">
					Lesson 5: <strong>Starting Reflection</strong>
				</p>
				<Separator className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						Reflection is a new geometric transformation for us. In reflection, we make a copy that is a mirror image of
						the original. Often, hair stylists will do reflections with the braids on each side of the head. Let's
						create a mirror image of the braid on this screen. The exercise will give us the chance to try some new
						features of the software.
					</p>
					<p>
						First, click on the "add braid" button, and you will see that a new braid has been added with a starting
						position of X=0, Y=0. Now click on starting reflection across the Y axis. You will see that our braid
						flipped to the opposite side of the Y axis. But it doesn't look like a mirror image of the original braid.
						That's because the starting position of the copy was moved. Delete the braid by clicking on the "delete
						braid" button, and we will start again.
					</p>
					<p>
						This time, go up to the "options" menu at top, and select "Add at Current Point." Now click on the "add
						braid" button - you will see nothing happen, because your new braid is right on top of the first braid. If
						you now click on starting reflection across the Y axis, you will see that our second braid flipped to the
						opposite side of the Y axis. Now we have a nice reflection of two braids.
					</p>
					{goalImg && <img src={goalImg} alt="Math braid example" className="rounded-md max-w-xs w-full h-auto" />}
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<CornrowsMathApp
					initialSettings={cornrowsConfigs.positionReflection.initialSettings}
					visibleFields={cornrowsConfigs.positionReflection.visibleFields}
				/>
			</div>
		</div>
	);
};
