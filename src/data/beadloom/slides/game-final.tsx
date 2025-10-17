import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const BeadLoomMathGameFinal = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<p>
				<h2 className="text-4xl font-bold mt-2 mb-2">Congrats!! You finished the tutorial.</h2>
				<p className="text-center">Next step is to head over to the software to create your designs!</p>
			</p>

			<a
				href={import.meta.env.VITE_BACKGROUND_PREFIX + `apps/VirtualBeadloom/beadloom.html`}
				className={cn(buttonVariants({ variant: "default" }))}>
				Jump into the software
			</a>
		</div>
	);
};
