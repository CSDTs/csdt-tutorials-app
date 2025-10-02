"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import * as React from "react";

import { NumericStepSelector } from "@/components/content/numeric-step-selector";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { StepMarkdown } from "@/components/content/step-markdown";
import { Button } from "@/components/ui/button";
import { sidebarData } from "@/data/sidebar-data";
import { NavSecondary } from "@/layout/nav-secondary";
import { useTutorial } from "@/providers/tutorial-provider";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { currentStepContent, tutorial, currentStepIndex, nextStep, prevStep } = useTutorial();

	const videoKey = currentStepContent?.video || undefined;

	return (
		<Sidebar collapsible="offcanvas" className="second-step" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent">
							<div className="flex items-center gap-2" id="tour1-step1">
								<a href="https://www.nsf.gov/">
									<span className="sr-only">NSF</span>
									<img src={"./nsf.gif"} className="size-9" alt="NSF" />
								</a>
								<a href="/">
									<span className="sr-only">CSDT Homepage</span>
									<img src={"./logo.svg"} alt="CSDT" className="" />
								</a>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NumericStepSelector>
					{currentStepContent?.video && (
						<div className="px-2">
							<h2 className="text-md font-semibold px-1">Instructions:</h2>
							<video key={videoKey} controls className="aspect-video w-full" muted>
								<source src={currentStepContent.video} />
							</video>
						</div>
					)}
					{currentStepContent?.description && <StepMarkdown />}

					{currentStepContent?.outcome && (
						<img src={currentStepContent.outcome} alt="The result when you finish the tutorial" />
					)}

					{currentStepContent?.["code"] && (
						<img src={currentStepContent["code"]} alt="The step's blocks" className="mx-auto w-2/3 px-2 py-5" />
					)}
				</NumericStepSelector>

				<NavSecondary items={sidebarData.navSecondary} className="mt-auto sixth-step" />
			</SidebarContent>
			<SidebarFooter className="flex flex-row items-center justify-between gap-2 third-step">
				<Button variant="outline" className="flex-1" disabled={currentStepIndex === 0} onClick={prevStep}>
					<IconChevronLeft /> Previous
				</Button>
				<Button
					className="flex-1"
					disabled={!tutorial || currentStepIndex >= tutorial.steps.length - 1}
					onClick={nextStep}>
					Next <IconChevronRight />
				</Button>
			</SidebarFooter>
		</Sidebar>
	);
}
