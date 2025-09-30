import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IconArrowRight } from "@tabler/icons-react";

interface Tutorial {
	id: string;
	name: string;
	title: string;
	category: string;
}

const tutorials: Tutorial[] = [
	// Adinkra
	{
		id: "adinkra-akoma",
		name: "adinkra-akoma",
		title: "Akoma",
		category: "Adinkra",
	},
	{
		id: "adinkra-ananse",
		name: "adinkra-ananse",
		title: "Ananse",
		category: "Adinkra",
	},
	{
		id: "adinkra-mpuannum",
		name: "adinkra-mpuannum",
		title: "Mpuannum",
		category: "Adinkra",
	},
	{
		id: "adinkra-sepow",
		name: "adinkra-sepow",
		title: "Sepow",
		category: "Adinkra",
	},

	// Anishinaabe Arcs
	{
		id: "anishinaabe-arcs-main",
		name: "anishinaabe-arcs-main",
		title: "Anishinaabe Arcs",
		category: "Anishinaabe Arcs",
	},

	// Bead Loom
	{
		id: "beadloom-main",
		name: "beadloom-main",
		title: "Bead Loom",
		category: "Bead Loom",
	},

	// Cornrows
	{
		id: "cornrow-main",
		name: "cornrow-main",
		title: "Cornrows - Main",
		category: "Cornrows",
	},
	{
		id: "cornrow-loops",
		name: "cornrow-loops",
		title: "Cornrows - Loops",
		category: "Cornrows",
	},
	{
		id: "cornrow-parameters",
		name: "cornrow-parameters",
		title: "Cornrows - Parameters",
		category: "Cornrows",
	},
	{
		id: "cornrow-functions",
		name: "cornrow-functions",
		title: "Cornrows - Functions",
		category: "Cornrows",
	},
	{
		id: "cornrow-variables",
		name: "cornrow-variables",
		title: "Cornrows - Variables",
		category: "Cornrows",
	},
	{
		id: "cornrow-conditionals",
		name: "cornrow-conditionals",
		title: "Cornrows - Conditionals",
		category: "Cornrows",
	},

	// Pre-Columbian Pyramids
	{
		id: "precolumbian-pyramids-main",
		name: "precolumbian-pyramids-main",
		title: "Pre-Columbian Pyramids",
		category: "Pre-Columbian Pyramids",
	},

	// Quilting
	{
		id: "quilting-loops",
		name: "quilting-loops",
		title: "Quilting - Loops",
		category: "Quilting",
	},
	{
		id: "quilting-parameters",
		name: "quilting-parameters",
		title: "Quilting - Parameters",
		category: "Quilting",
	},
	{
		id: "quilting-functions",
		name: "quilting-functions",
		title: "Quilting - Functions",
		category: "Quilting",
	},
	{
		id: "quilting-variables",
		name: "quilting-variables",
		title: "Quilting - Variables",
		category: "Quilting",
	},
	{
		id: "quilting-conditionals",
		name: "quilting-conditionals",
		title: "Quilting - Conditionals",
		category: "Quilting",
	},
	{
		id: "quilting-anishinaabe",
		name: "quilting-anishinaabe",
		title: "Quilting - Anishinaabe",
		category: "Quilting",
	},
	{
		id: "quilting-gees",
		name: "quilting-gees",
		title: "Quilting - Gee's Bend",
		category: "Quilting",
	},
	{
		id: "quilting-lakota",
		name: "quilting-lakota",
		title: "Quilting - Lakota",
		category: "Quilting",
	},

	// Tooled Leather
	{
		id: "tooled-leather-loops",
		name: "tooled-leather-loops",
		title: "Tooled Leather - Loops",
		category: "Tooled Leather",
	},
	{
		id: "tooled-leather-parameters",
		name: "tooled-leather-parameters",
		title: "Tooled Leather - Parameters",
		category: "Tooled Leather",
	},
	{
		id: "tooled-leather-functions",
		name: "tooled-leather-functions",
		title: "Tooled Leather - Functions",
		category: "Tooled Leather",
	},
	{
		id: "tooled-leather-variables",
		name: "tooled-leather-variables",
		title: "Tooled Leather - Variables",
		category: "Tooled Leather",
	},
	{
		id: "tooled-leather-conditionals",
		name: "tooled-leather-conditionals",
		title: "Tooled Leather - Conditionals",
		category: "Tooled Leather",
	},

	// WHTE
	{
		id: "whte-en",
		name: "whte-en",
		title: "WHTE - English",
		category: "WHTE",
	},
	{
		id: "whte-es",
		name: "whte-es",
		title: "WHTE - Spanish",
		category: "WHTE",
	},
	{
		id: "whte-bp",
		name: "whte-bp",
		title: "WHTE - Portuguese",
		category: "WHTE",
	},

	// Yarn Arts
	{
		id: "yarnarts-rectangular",
		name: "yarnarts-rectangular",
		title: "Yarn Arts - Rectangular",
		category: "Yarn Arts",
	},
	{
		id: "yarnarts-circular",
		name: "yarnarts-circular",
		title: "Yarn Arts - Circular",
		category: "Yarn Arts",
	},
];

const categories = Array.from(new Set(tutorials.map((t) => t.category)));

export function BlankTutorialSelection() {
	const handleTutorialSelect = (tutorialName: string) => {
		window.location.href = `./?name=${tutorialName}`;
	};

	return (
		<div className="min-h-screen bg-slate-500 rounded-b-md">
			<div className="container mx-auto px-4 py-6">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">CSDT Tutorials</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-2">
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
									<h2 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h2>
									<Separator className="flex-1 ml-3" />
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
									{categoryTutorials.map((tutorial) => (
										<Card
											key={tutorial.id}
											className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border hover:border-blue-300 dark:hover:border-blue-600"
											onClick={() => handleTutorialSelect(tutorial.name)}>
											<CardHeader className="pb-2">
												<div className="flex items-center justify-between">
													<CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
														{tutorial.title}
													</CardTitle>
													<IconArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
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
				<div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
					<p className="text-sm text-gray-500 dark:text-gray-400">
						CSDT Tutorials - Bridging traditional arts and computational thinking
					</p>
				</div>
			</div>
		</div>
	);
}
