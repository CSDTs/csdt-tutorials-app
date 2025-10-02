import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { tutorials } from "@/data/list-of-tutorials";
import { IconArrowRight } from "@tabler/icons-react";

const categories = Array.from(new Set(tutorials.map((t) => t.category)));

export function BlankTutorialSelection() {
	const handleTutorialSelect = (tutorialName: string) => {
		window.location.href = import.meta.env.PROD
			? `/tutorials/index.html?name=${tutorialName}`
			: `./?name=${tutorialName}`;
	};

	return (
		<div className="min-h-screen bg-background rounded-b-md">
			<div className="container mx-auto px-4 py-6">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-foreground">CSDT Tutorials</h1>
					<p className="text-lg text-muted-foreground max-w-xl mx-auto mt-2">
						Choose a tutorial to begin your journey into programming and traditional arts.
					</p>
				</div>

				{/* Tutorial Categories */}
				<div className="space-y-6">
					{categories.map((category) => {
						const categoryTutorials = tutorials.filter((t) => t.category === category);

						return (
							<div key={category}>
								<div className="flex items-center mb-4">
									<h2 className="text-xl font-semibold text-foreground">{category}</h2>
									<Separator className="flex-1 ml-3" />
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
									{categoryTutorials.map((tutorial) => (
										<Card
											key={tutorial.id}
											className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border hover:border-primary/50"
											onClick={() => handleTutorialSelect(tutorial.name)}>
											<CardHeader className="pb-2">
												<div className="flex items-center justify-between">
													<CardTitle className="text-base group-hover:text-primary transition-colors">
														{tutorial.title}
													</CardTitle>
													<IconArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
												</div>
											</CardHeader>
										</Card>
									))}
								</div>
							</div>
						);
					})}
				</div>

				{/* Footer */}
				<div className="text-center mt-8 pt-6 border-t border-border">
					<p className="text-sm text-muted-foreground">
						CSDT Tutorials - Bridging traditional arts and computational thinking
					</p>
				</div>
			</div>
		</div>
	);
}
