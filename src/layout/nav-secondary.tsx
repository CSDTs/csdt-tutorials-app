"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import type { TutorialStep } from "@/data/tutorial-data";
import { useTutorial } from "@/providers/tutorial-provider";
import { IconDots, IconFolder, IconShare3, IconTrash, type Icon } from "@tabler/icons-react";
import * as React from "react";
import { useState } from "react";

export function NavSecondary({
	items,
	...props
}: {
	items: {
		title: string;
		url: string;
		icon: Icon;
	}[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
	const { isMobile } = useSidebar();
	const { tutorial, setCurrentStep, currentStepIndex } = useTutorial();
	const [open, setOpen] = useState(false);
	const [tutorialsOpen, setTutorialsOpen] = useState(false);
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => {
						if (item.title === "Settings") {
							return (
								<DropdownMenu key={item.title}>
									<DropdownMenuTrigger asChild>
										<SidebarMenuItem>
											<SidebarMenuButton asChild>
												<a href={item.url}>
													<item.icon />
													<span>{item.title}</span>
												</a>
											</SidebarMenuButton>
											<SidebarMenuAction showOnHover className="data-[state=open]:bg-accent rounded-sm">
												<IconDots />
												<span className="sr-only">More</span>
											</SidebarMenuAction>
										</SidebarMenuItem>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="w-72 rounded-lg"
										side={isMobile ? "bottom" : "right"}
										align={isMobile ? "end" : "start"}>
										<DropdownMenuLabel>Tutorial Settings</DropdownMenuLabel>
										<DropdownMenuItem>
											<IconFolder />
											<span>Toggle Split Screen Layout</span>
										</DropdownMenuItem>{" "}
										<DropdownMenuItem>
											<IconFolder />
											<span>Start Layout Tour</span>
										</DropdownMenuItem>
										<DropdownMenuLabel>CSnap! Settings</DropdownMenuLabel>
										<DropdownMenuItem>
											<IconShare3 />
											<span>Toggle Single Palette</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<IconShare3 />
											<span>Toggle Corral Bar</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<IconShare3 />
											<span>Toggle Tabs</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<IconShare3 />
											<span>Toggle Sprite Bar</span>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuLabel>Misc Settings</DropdownMenuLabel>
										<DropdownMenuItem variant="destructive">
											<IconTrash />
											<span>Reset Layout Tour Prompt</span>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							);
						} else if (item.title === "Tutorial Outline") {
							// Add state to control the Sheet open/close

							return (
								<Sheet key={item.title} open={open} onOpenChange={setOpen}>
									<SheetTrigger asChild>
										<SidebarMenuItem>
											<SidebarMenuButton asChild>
												<a href={item.url}>
													<item.icon />
													<span>{item.title}</span>
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SheetTrigger>
									<SheetContent side="left" className="max-w-md w-full">
										<SheetHeader>
											<SheetTitle>Tutorial Outline</SheetTitle>
										</SheetHeader>
										<div className="mt-4">
											{tutorial?.steps && (
												<ol className="space-y-1">
													{tutorial.steps.map((step: TutorialStep, idx: number) => {
														const isActive = currentStepIndex === idx;
														return (
															<li key={idx}>
																<button
																	type="button"
																	onClick={() => {
																		setCurrentStep?.(idx);
																		setOpen(false);
																	}}
																	className={
																		`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors ` +
																		(isActive
																			? "bg-primary/10 text-primary font-semibold ring-2 ring-primary"
																			: "hover:bg-accent hover:text-accent-foreground text-muted-foreground")
																	}
																	style={{ outline: "none" }}>
																	<span className="flex-shrink-0 inline-block w-6 text-xs text-center">{idx + 1}</span>
																	<span className="truncate">{step.title}</span>
																</button>
															</li>
														);
													})}
												</ol>
											)}
											{!tutorial?.steps && <p className="text-muted-foreground">No steps found for this tutorial.</p>}
										</div>
									</SheetContent>
								</Sheet>
							);
						} else if (item.title === "View Additional Tutorials") {
							return (
								<Sheet key={item.title} open={tutorialsOpen} onOpenChange={setTutorialsOpen}>
									<SheetTrigger asChild>
										<SidebarMenuItem>
											<SidebarMenuButton asChild>
												<a href={item.url}>
													<item.icon />
													<span>{item.title}</span>
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SheetTrigger>
									<SheetContent side="left" className="max-w-md w-full">
										<SheetHeader>
											<SheetTitle>Additional Tutorials</SheetTitle>
										</SheetHeader>
										<ScrollArea className="h-[calc(100vh-120px)] mt-4">
											<div className="space-y-4 pr-4">
												{/* Adinkra Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Adinkra</h3>
													<div className="space-y-1">
														<a
															href="./?name=adinkra-akoma"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Akoma</span>
														</a>
														<a
															href="./?name=adinkra-ananse"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">2</span>
															<span className="truncate">Ananse</span>
														</a>
														<a
															href="./?name=adinkra-mpuannum"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">3</span>
															<span className="truncate">Mpuannum</span>
														</a>
														<a
															href="./?name=adinkra-sepow"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">4</span>
															<span className="truncate">Sepow</span>
														</a>
													</div>
												</div>

												{/* Anishinaabe Arcs Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Anishinaabe Arcs</h3>
													<div className="space-y-1">
														<a
															href="./?name=anishinaabe-arcs-main"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Main</span>
														</a>
													</div>
												</div>

												{/* Bead Loom Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Bead Loom</h3>
													<div className="space-y-1">
														<a
															href="./?name=beadloom-main"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Main</span>
														</a>
													</div>
												</div>

												{/* Cornrows Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Cornrows</h3>
													<div className="space-y-1">
														<a
															href="./?name=cornrow-main"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Main</span>
														</a>
														<a
															href="./?name=cornrow-loops"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">2</span>
															<span className="truncate">Loops</span>
														</a>
														<a
															href="./?name=cornrow-parameters"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">3</span>
															<span className="truncate">Params</span>
														</a>
														<a
															href="./?name=cornrow-functions"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">4</span>
															<span className="truncate">Functions</span>
														</a>
														<a
															href="./?name=cornrow-variables"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">5</span>
															<span className="truncate">Variables</span>
														</a>
														<a
															href="./?name=cornrow-conditionals"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">6</span>
															<span className="truncate">Conditionals</span>
														</a>
													</div>
												</div>

												{/* Pre-Columbian Pyramids Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Pre-Columbian Pyramids</h3>
													<div className="space-y-1">
														<a
															href="./?name=precolumbian-pyramids-main"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Main</span>
														</a>
													</div>
												</div>

												{/* Quilting Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Quilting</h3>
													<div className="space-y-1">
														<a
															href="./?name=quilting-loops"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Loops</span>
														</a>
														<a
															href="./?name=quilting-parameters"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">2</span>
															<span className="truncate">Params</span>
														</a>
														<a
															href="./?name=quilting-functions"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">3</span>
															<span className="truncate">Functions</span>
														</a>
														<a
															href="./?name=quilting-variables"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">4</span>
															<span className="truncate">Variables</span>
														</a>
														<a
															href="./?name=quilting-conditionals"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">5</span>
															<span className="truncate">Conditionals</span>
														</a>
														<a
															href="./?name=quilting-anishinaabe"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">6</span>
															<span className="truncate">Anishinaabe</span>
														</a>
														<a
															href="./?name=quilting-gees"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">7</span>
															<span className="truncate">Gee's Bend</span>
														</a>
														<a
															href="./?name=quilting-lakota"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">8</span>
															<span className="truncate">Lakota</span>
														</a>
													</div>
												</div>

												{/* Tooled Leather Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Tooled Leather</h3>
													<div className="space-y-1">
														<a
															href="./?name=tooled-leather-loops"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Loops</span>
														</a>
														<a
															href="./?name=tooled-leather-parameters"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">2</span>
															<span className="truncate">Params</span>
														</a>
														<a
															href="./?name=tooled-leather-functions"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">3</span>
															<span className="truncate">Functions</span>
														</a>
														<a
															href="./?name=tooled-leather-variables"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">4</span>
															<span className="truncate">Variables</span>
														</a>
														<a
															href="./?name=tooled-leather-conditionals"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">5</span>
															<span className="truncate">Conditionals</span>
														</a>
													</div>
												</div>

												{/* WHTE Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">WHTE</h3>
													<div className="space-y-1">
														<a
															href="./?name=whte-en"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">English</span>
														</a>
														<a
															href="./?name=whte-es"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">2</span>
															<span className="truncate">Spanish</span>
														</a>
														<a
															href="./?name=whte-bp"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">3</span>
															<span className="truncate">Black Portuguese</span>
														</a>
													</div>
												</div>

												{/* Yarn Arts Section */}
												<div>
													<h3 className="text-sm font-semibold text-foreground mb-2 px-3">Yarn Arts</h3>
													<div className="space-y-1">
														<a
															href="./?name=yarnarts-rectangular"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">1</span>
															<span className="truncate">Rectangular</span>
														</a>
														<a
															href="./?name=yarnarts-circular"
															type="button"
															className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
															style={{ outline: "none" }}>
															<span className="flex-shrink-0 inline-block w-6 text-xs text-center">2</span>
															<span className="truncate">Circular</span>
														</a>
													</div>
												</div>
											</div>
										</ScrollArea>
									</SheetContent>
								</Sheet>
							);
						} else {
							return (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							);
						}
					})}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
