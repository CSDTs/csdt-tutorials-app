# CSDT Tutorials

This application serves as the official tutorial platform for CSDTs. It is built with Vite, React, and TypeScript.

## Running the application

```bash
pnpm install
pnpm dev
```

You need to also have a local (non git) copy of the csnap-pro application in the public/csnap-pro directory.

## Building and deploying the application

```bash
pnpm build
```

Make sure to remove the `public/csnap-pro` directory from the final `dist` directory before copying that over to the static folder of CSDT.

## Creating a new tutorial

First, you need to make sure you have access to the S3 bucket where tutorial assets are stored. Check with the senior developer to get access.

Next, given a tool, you need to add a new object to the `src/data/tutorial-data.ts` file.

Below is an example of how to add a new tutorial.

```ts
export const AdinkraAkomaData = {
	title: "Creating Akoma",
	tool: "Adinkra",
	prefix: "adinkra/akoma/",
	base: "base.xml",
	globalModifiers: ["enableSinglePalette", "disableTutorialTabs"],

	steps: [
		{
			title: "Set Up Akoma",
			content: ["description", "hint", "video"],
		},
		{
			title: "Draw a log spiral",
			content: ["description", "hint", "video"],
		},
		{
			title: "Draw a line",
			content: ["description", "hint", "video"],
		},
		{
			title: "Finish the Akoma Symbol",
			content: ["description", "hint", "video"],
		},

		{
			title: "Next Steps",
			content: ["nextSteps", "outcome"],
			background: "adinkra/index.html",
			software: "adinkra/software.html",
		},
	],
};
```

### Setup

The `title` is the title of the tutorial.
The `tool` is the tool that the tutorial is for (i.e. Adinkra, Graffiti, Henna, etc.).
The `prefix` is the prefix of the tutorial. This is where the tutorial assets are stored within the S3 bucket.
The `base` is an optional base XML file for the tutorial. This is the initial CSnap project file that gets loaded when the tutorial starts. Defaults to `base.xml` if not provided.
The `globalModifiers` is an optional array of strings that represent the global modifiers for the tutorial.
The `core` is an optional array of strings that represent the core blocks that are available to the tutorial. These are the blocks that are available to the user in the CSnap editor.
The `steps` is an array of objects that represent the steps of the tutorial. Each step has a title, content, and modifiers.

### Modifiers

Modifiers are used to control the behavior of CSnap. Things like forcing single palette mode, disabling tutorial tabs, etc.

The `globalModifiers` array is used to control the behavior of the entire tutorial. These are applied to every step.

The `modifiers` array is used to control the behavior of a specific step. These are applied to the step only.

### Steps

Each step has a title, content, and modifiers.
The content is an array of strings that represent the content of the step.
The `whitelist` array is an optional array of strings that represent the blocks that are available to the user in the CSnap editor for that step based on the `core` blocks.
The `modifiers` array is an optional array of strings that represent the modifiers for the step.

#### Content

The content is an array of strings that represent the content of the step. All content would be stored in the s3 bucket. Each content item should be named as the following:

- `description`: `PREFIX-STEPNUMBER.md`
- `solution`: `PREFIX-solution-STEPNUMBER.mp4`
- `video`: `PREFIX-STEPNUMBER.mp4`
- `code`: `PREFIX-code-STEPNUMBER.png`
- `outcome`: `PREFIX-outcome.png`
- `nextSteps`: `PREFIX-next-steps.md`

Where `PREFIX` is the prefix of the tutorial (i.e. `adinkra/akoma/` it would be `akoma`) and `STEPNUMBER` is the step number.

The content can be one of the following:

- `description`: A description of the step. This is a markdown file that is displayed in the sidebar of the tutorial.
- `solution`: A solution for the step. This is a video file that is displayed in the sidebar of the tutorial.
- `video`: A video of the step. This is a video file that is displayed in the sidebar of the tutorial.
- `code`: A code image of the step. This is an image file that is displayed in the sidebar of the tutorial.
- `outcome`: An outcome image of the step. This is an image file that is displayed in the sidebar of the tutorial.
- `nextSteps`: A next steps markdown file. This is a markdown file that is displayed in the sidebar of the tutorial.

#### Background

The `background` is an optional string that represents the background file for the step. This is the HTML file that is displayed in the background of the tutorial.
The `software` is an optional string that represents the software file for the step. This is the HTML file that is displayed in the software of the tutorial.

### Manage Content

I've been syncing the assets from the S3 bucket to a local directory called `aws-assets`. You can create one locally and sync it to the S3 bucket instead of having to use the bucket gui.

```bash
pnpm sync-assets
```

This will sync the assets from the S3 bucket to the local directory.

You can then edit the assets in the local directory and sync them back to the S3 bucket.

```bash
aws s3 sync s3://csdt-media-s3/tutorials ./aws-assets
```

To sync the assets back to the S3 bucket.

```bash
aws s3 sync ./aws-assets s3://csdt-media-s3/tutorials
```
