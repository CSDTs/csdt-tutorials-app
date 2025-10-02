export const TooledLeatherParamsData = {
	title: "Parameters in Tooled Leather",
	tool: "Tooled Leather",
	prefix: "tooledleather/parameters/",

	core: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
	steps: [
		{
			title: "Getting Started",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear"],
			modifiers: ["enableSinglePalette", "disableSinglePaletteButtons", "disableTutorialTabs"],
		},
		{
			title: "Switching Costumes",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
			modifiers: ["enableSinglePalette", "disableSinglePaletteButtons", "disableTutorialTabs"],
		},
		{
			title: "Adding More Costumes",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
			modifiers: ["disableSinglePalette", "disableTutorialTabs"],
		},
		{
			title: "Drawing Your Own Costumes",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
			modifiers: ["disableSinglePalette", "enableTutorialTabs"],
		},
		{
			title: "Next Steps",
			content: ["nextSteps", "outcome"],
			background: "tooledleather/index.html",
			software: "tooledleather/software.html",
		},
	],
};
