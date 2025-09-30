import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layout/app-sidebar";
import { ChartAreaInteractive } from "@/layout/chart-area-interactive";
import { DataTable } from "@/layout/data-table";
import { SectionCards } from "@/layout/section-cards";
import { SiteHeader } from "@/layout/site-header";

// import { CSnap } from "./components/content/csnap";
import { TutorialClient, useUrlParams } from "./components/content/tutorial-client";

import { useState } from "react";
import { CSnap } from "./components/content/csnap";
import { NextStepsDialog } from "./components/content/next-steps-dialog";
import data from "./data/homepage.json";
import { fetchTutorialData } from "./data/tutorial-data";
import { BlankTutorialSelection } from "./layout/blank-tutorial-selection";

import { TutorialProvider } from "./providers/tutorial-provider";

export default function App() {
	const urlParams = useUrlParams();
	const tutorialData = fetchTutorialData(urlParams?.name);

	return (
		<TutorialProvider>
			<TutorialClient>
				<SidebarProvider
					style={
						{
							"--sidebar-width": "calc(var(--spacing) * 92)",
							"--header-height": "calc(var(--spacing) * 16)",
						} as React.CSSProperties
					}>
					<AppSidebar variant="inset" />
					<SidebarInset>
						<NextStepsDialog />
						<SiteHeader title={tutorialData?.title ?? "Welcome to CSDT Tutorials!"} />
						<div className="flex flex-1 flex-col ">
							<div className="@container/main flex flex-1 flex-col gap-2 ">
								{" "}
								{!tutorialData && <BlankTutorialSelection />}
								{tutorialData && (
									<>
										<CSnap />
									</>
								)}
								{/* <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
									<SectionCards />
									<div className="px-4 lg:px-6">
										<ChartAreaInteractive />
									</div>
									<DataTable data={data} />
								</div> */}
							</div>
						</div>{" "}
					</SidebarInset>
				</SidebarProvider>
			</TutorialClient>
		</TutorialProvider>
	);
}
