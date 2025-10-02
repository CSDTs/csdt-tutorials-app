export const TooledLeatherLoopsData = {
	title: "Loops in Tooled Leather",
	tool: "Tooled Leather",
	prefix: "tooledleather/loops/",

	core: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "doStamp", "doRepeat", "translatePercent"],
	globalModifiers: ["enableSinglePalette", "disableTutorialTabs", "disableSinglePaletteButtons"],
	steps: [
		{
			title: "Getting Started",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear"],
		},
		{
			title: "Stamping and Translating",
			content: ["video"],
			whitelist: ["receiveGo", "gotoXY", "pointAtAngle", "setScale", "clear", "translatePercent", "doStamp"],
		},
		{
			title: "The Repeat Block",
			content: ["video"],
			whitelist: [
				"receiveGo",
				"gotoXY",
				"pointAtAngle",
				"setScale",
				"clear",
				"translatePercent",
				"doStamp",
				"doRepeat",
			],
		},
		{
			title: "Creating a Row",
			content: ["video"],
			whitelist: [
				"receiveGo",
				"gotoXY",
				"pointAtAngle",
				"setScale",
				"clear",
				"translatePercent",
				"doStamp",
				"doRepeat",
			],
		},
		{
			title: "Creating Multiple Rows",
			content: ["video"],
			whitelist: [
				"receiveGo",
				"gotoXY",
				"pointAtAngle",
				"setScale",
				"clear",
				"translatePercent",
				"doStamp",
				"doRepeat",
			],
		},
		{
			title: "Next Steps",
			content: ["nextSteps", "outcome"],
			background: "tooledleather/index.html",
			software: "tooledleather/software.html",
		},
	],
};
