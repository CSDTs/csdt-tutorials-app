import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layout/app-sidebar";
import { ThemeProvider } from "next-themes";

import { SiteHeader } from "@/layout/site-header";

// import { CSnap } from "./components/content/csnap";
import { TutorialClient } from "./components/content/tutorial-client";

import { CSnap } from "./components/content/csnap";
// import { NextStepsDialog } from "./components/content/next-steps-dialog";
import { WalkthroughDialog } from "./components/content/walkthrough-dialog";

import { fetchTutorialData } from "./data/tutorial-data";
import { BlankTutorialSelection } from "./layout/blank-tutorial-selection";

import { useUrlParams } from "./hooks/use-url-params";
import { TutorialProvider } from "./providers/tutorial-provider";

export default function App() {
	const urlParams = useUrlParams();
	const tutorialData = fetchTutorialData(urlParams?.name);

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<TutorialProvider>
				<TutorialClient>
					<SidebarProvider
						className="bg-[#1F2937]"
						style={
							{
								"--sidebar-width": "calc(var(--spacing) * 112)",
								"--header-height": "calc(var(--spacing) * 16)",
								// "--sidebar": "#1F2937",
								// "--sidebar": "#101827",
								// "--sidebar-foreground": "#F9FAFB",
							} as React.CSSProperties
						}>
						<AppSidebar variant="inset" />
						<SidebarInset className="">
							{/* <NextStepsDialog /> */}
							{tutorialData && <WalkthroughDialog />}
							<SiteHeader
								title={
									tutorialData?.title ? `${tutorialData?.tool} | ${tutorialData?.title}` : "Welcome to CSDT Tutorials!"
								}
							/>
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
		</ThemeProvider>
	);
}
