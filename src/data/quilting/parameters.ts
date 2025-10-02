export const QuiltingParamsData = {
	title: "Parameters in Quilting",
	tool: "Quilting",
	prefix: "quilting/parameters/",

	core: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doStamp", "doSwitchToCostume"],
	steps: [
		{
			title: "Initializing Your Script",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear"],
			modifiers: ["enableSinglePalette", "disableTutorialTabs"],
		},
		{
			title: "Adding Another Costume",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
			modifiers: ["enableSinglePalette", "disableTutorialTabs"],
		},
		{
			title: "Adding More Costumes",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
			modifiers: ["disableSinglePalette", "enableTutorialTabs"],
		},
		{
			title: "Creating the 'Sun' Costume",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
			modifiers: ["disableSinglePalette", "enableTutorialTabs"],
		},
		{
			title: "Saving Your Progress",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doSwitchToCostume", "doStamp"],
			modifiers: ["disableSinglePalette", "enableTutorialTabs"],
		},
		{
			title: "Next Steps",
			content: ["nextSteps", "outcome"],
			background: "quilting/index.html",
			software: "quilting/software.html",
		},
	],
};
