export const CornrowLoopsData = {
	title: "Loops in Cornrow Curves",
	tool: "Cornrow Curves",
	prefix: "cornrows/loops/",
	base: "base.xml",
	core: [
		"receiveGo",
		"gotoXY",
		"pointAtAngle",
		"setScale",
		"clear",
		"doStamp",
		"doSwitchToCostume",
		"translatePercent",
		"doRepeat",
		"rotateByDegrees",
		"newSizeOfCurrent",
		"setEffect",
	],
	steps: [
		{
			title: "Setting up Your Script",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear"],
			modifiers: ["enableSinglePalette", "disableTutorialTabs"],
		},
		{
			title: "Offsetting the Braid",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "translatePercent"],
			modifiers: ["enableSinglePalette", "disableTutorialTabs"],
		},
		{
			title: "Create a Second Braid",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "translatePercent", "rotateByDegrees"],
			modifiers: ["enableSinglePalette", "disableTutorialTabs"],
		},
		{
			title: "Creating Multiple Braids",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "translatePercent", "rotateByDegrees"],
			modifiers: ["disableSinglePalette", "enableTutorialTabs"],
		},

		{
			title: "Next Steps",
			content: ["nextSteps", "outcome"],
			background: "cornrowcurves/index.html",
			software: "cornrowcurves/software.html",
		},
	],
};
