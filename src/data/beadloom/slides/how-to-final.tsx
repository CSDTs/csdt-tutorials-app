import { Button } from "@/components/ui/button";

export const BeadLoomHowToFinal = () => {
	return (
		<div id="p3" className="w-full bg-white rounded-lg shadow p-6">
			<div className="w-full">
				<div className="w-full">
					<h1 className="text-2xl font-bold mb-1">How to Use the Bead Loom</h1>
					<p className="text-lg mb-3">
						Lesson 4: <strong>Next Steps</strong>
					</p>
					<hr className="my-4" />
					<div className="w-full">
						<p className="mb-6">Congrats! You completed the tutorial. You can either:</p>

						<div className="flex flex-wrap gap-4 justify-center mb-8">
							<div className="flex-1 w-full flex justify-center">
								<a
									href={import.meta.env.VITE_BACKGROUND_PREFIX + `apps/VirtualBeadloom/beadloom.html`}
									className="w-full">
									<Button className="w-full" size="lg" variant="default">
										Jump Straight into the Software (Grades 4-12)
									</Button>
								</a>
							</div>
							<div className="flex-1 min-w-[180px] max-w-[260px] flex justify-center">
								<a
									href={import.meta.env.VITE_BACKGROUND_PREFIX + `tutorials/index.html?name=beadloom-math`}
									className="w-full">
									<Button className="w-full" size="lg" variant="secondary">
										Complete the Mini Math Game
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
