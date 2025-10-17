import { getAssetContent } from "@/lib/content";

export const BeadLoomHowTo1 = () => {
	const imageUrl1 = getAssetContent("beadloom/howto/howto-1.jpg");
	const imageUrl2 = getAssetContent("beadloom/howto/howto-2.jpg");
	const imageUrl3 = getAssetContent("beadloom/howto/howto-3.jpg");

	return (
		<div id="p0" className="w-full bg-white rounded-lg shadow p-6">
			<div className="w-full">
				<div className="w-full">
					<h1 className="text-2xl font-bold mb-1">How to Use the Bead Loom</h1>
					<p className="text-lg mb-3">
						Lesson 1: <strong>Points, Lines, Rectangles</strong>
					</p>
					<hr className="my-4" />
					<div className="w-full">
						<div className="flex flex-wrap gap-6">
							<div className="flex flex-col gap-4 flex-1 min-w-[270px] max-w-[510px]">
								<p>
									The Virtual Bead Loom simulates the same grid pattern as the traditional bead loom. Users place
									colored circles in columns (the Y-axis) and rows (the X-axis).
								</p>
								<img src={imageUrl1} alt="Bead Loom Grid Example" className="rounded-md max-w-sm w-full " />
							</div>
							<div className="flex flex-col gap-4 flex-1 min-w-[270px]">
								<p>
									There are several tools for placing beads on the virtual loom. In each case you use the{" "}
									<span className="font-mono px-1 py-0.5 rounded bg-gray-100 border border-gray-200">tab</span> key or
									the mouse to move your cursor to the field for entering the coordinates, then you enter them, and then
									press the button for the shape tool. The point tool places a single bead:
								</p>
								<div className="flex items-center justify-center w-full">
									<img src={imageUrl2} alt="Point Tool" className="rounded-md max-w-full w-auto h-auto" />
								</div>
								<p>
									The line tool places lines of beads. You specify the two endpoints of the line. Diagonal lines tend to
									be jagged, but resizing the grid can help that (see "Options menu" on next page).
								</p>
								<div className="flex items-center justify-center w-full">
									<img src={imageUrl3} alt="Line Tool" className="rounded-md max-w-full w-auto h-auto" />
								</div>
								<p>
									The rectangle tool fills in a rectangle of beads. You specify two vertices (lower right and upper
									left). The rectangles of this tool are always aligned with the axes.
								</p>
								<div className="flex items-center justify-center w-full">
									<img src={imageUrl3} alt="Rectangle Tool" className="rounded-md max-w-full w-auto h-auto" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
