import { getAssetContent } from "@/lib/content";

export const BeadLoomHowTo3 = () => {
	const imageUrl1 = getAssetContent("beadloom/howto/howto-6.jpg");
	const imageUrl2 = getAssetContent("beadloom/howto/howto-7.jpg");
	return (
		<div id="p2" className="w-full dark:bg-accent bg-white rounded-lg shadow p-6">
			<div className="w-full">
				<div className="w-full">
					<h1 className="text-2xl font-bold mb-1">How to Use the Bead Loom</h1>
					<p className="text-lg mb-3">
						Lesson 3: <strong>More Options</strong>
					</p>
					<hr className="my-4" />
					<div className="w-full">
						<div className="flex flex-wrap gap-8 items-start">
							<div className="flex flex-col gap-4 flex-1 min-w-[270px] max-w-[530px]">
								<p>
									There are also controls that apply to all the tools. <strong>"Clear"</strong> deletes everything.
									Normally <strong>"Create"</strong> is selected, so that your tools will fill their specified shape
									with beads. <strong>"Remove"</strong> will erase all beads in the specified shape, so if you make an
									error use <strong>"undo"</strong> not <strong>"remove"</strong>. The color button allows you to select
									the bead color. Clicking on the little square in the upper right of the screen will give you a list of
									all the colors you have selected so far. The <strong>"Save"</strong> menu allows you to save the work
									on your hard drive and edit the design later. Make sure your file name is only letters, not spaces or
									numbers, and that you go back to the same computer when you want to edit your work.
								</p>
							</div>
							<div className="flex flex-col gap-4 flex-shrink-0 items-center min-w-[140px]">
								<img
									src={imageUrl1}
									alt="Beadloom tool options screenshot"
									className="rounded-md max-w-[120px] w-auto h-auto mb-2"
								/>
							</div>
							<div className="flex flex-col gap-4 flex-1 min-w-[270px] max-w-[530px]">
								<p>
									The <strong>"Options"</strong> menu allows you to resize the grid smaller or larger &mdash; maximum
									size is 150 by 150. You can also change the location of the coordinate values, hide the grid, or
									create a title or notes about your design. You can also switch to <strong>Wampum beads</strong>, using
									either traditional 1x2 Wampum or a 1x1 Wampum (which is easier for math teaching--special thanks to
									Joyce Lewis of the Onondaga Nation for that concept!).
								</p>
								<p>
									<strong>Printing:</strong> After you have your design completed, do a screen capture. In Windows you
									can do that by pressing the "print screen" button on your keyboard, usually located at the upper right
									above the F10 key. On a Macintosh press <kbd>Shift</kbd> + <kbd>Command (⌘)</kbd> + <kbd>3</kbd> at
									the same time (also <kbd>Shift</kbd> + <kbd>Command (⌘)</kbd> + <kbd>4</kbd> to select just a
									portion). That screen capture will save an image of the entire screen to your clipboard. You can then
									paste the clipboard image into a blank canvas in Word, Photoshop, Imaging ("Accessories" in Windows)
									or another image editor.
								</p>
							</div>
							<div className="flex flex-col gap-4 flex-shrink-0 items-center min-w-[140px]">
								<img
									src={imageUrl2}
									alt="Beadloom options screenshot"
									className="rounded-md max-w-[120px] w-auto h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
