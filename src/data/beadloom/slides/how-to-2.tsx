import { getAssetContent } from "@/lib/content";

export const BeadLoomHowTo2 = () => {
	const imageUrl1 = getAssetContent("beadloom/howto/howto-4.jpg");
	const imageUrl2 = getAssetContent("beadloom/howto/howto-5.jpg");
	return (
		<div id="p1" className="w-full dark:bg-accent bg-white rounded-lg shadow p-6">
			<div className="w-full">
				<div className="w-full">
					<h1 className="text-2xl font-bold mb-1">How to Use the Bead Loom</h1>
					<p className="text-lg mb-3">
						Lesson 2: <strong>Triangles and Iterations</strong>
					</p>
					<hr className="my-4" />
					<div className="w-full">
						<div className="flex flex-wrap gap-8 items-start">
							<div className="flex flex-col gap-4 flex-1 min-w-[270px] max-w-[530px]">
								<p>The triangle tool fills in a triangle of beads. You specify the three vertices.</p>
								<p>
									The iterative triangle tool: Our first triangle tool made jagged edges, while traditional beadwork has
									beautifully regular edges. We interviewed some native beadworkers, and found that their algorithms
									were iterative. The triangle iteration tool reflects this tradition of Indigenous mathematics. For
									example, the triangle in the beadwork at the top of this page was made by adding one bead on each side
									of the row, every three rows, as you go in the -Y direction.
								</p>
								<ul className="list-disc pl-5 space-y-1">
									<li>
										<span className="font-semibold">Direction</span> &mdash; determines in which direction your rows
										will accumulate
									</li>
									<li>
										<span className="font-semibold">Starting at X,Y</span> &mdash; that is the center of the starting
										row.
									</li>
									<li>
										<span className="font-semibold">After every ___ rows</span> &mdash; lets you determine how many rows
										you go through before adding more beads to the end.
									</li>
									<li>
										<span className="font-semibold">Add ___ to both ends</span> &mdash; the number of beads that will be
										added on each side of the center each time.
									</li>
									<li>
										<span className="font-semibold">For ___ rows in total</span> &mdash; how many rows you will bead in
										this triangle.
									</li>
								</ul>
							</div>
							<div className="flex flex-col gap-4 flex-shrink-0 items-center min-w-[140px]">
								<img
									src={imageUrl1}
									alt="Iterative triangle tool screenshot"
									className="rounded-md max-w-full w-auto h-auto mb-2"
								/>
								<img
									src={imageUrl2}
									alt="Triangle beadwork color shift example"
									className="rounded-md max-w-full w-auto h-auto"
								/>
							</div>
						</div>
						<div className="flex flex-wrap gap-4 mt-6">
							<div className="flex-1 min-w-[230px]">
								<p className="mb-2">
									Note that this tool has two colors &mdash; some traditional beadwork shifts color in each iteration.
									This allows you to select the starting color and ending color; the software does the shifting for you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
