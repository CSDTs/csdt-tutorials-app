import type { Tutorial } from "@/data/tutorial-data";

const STORAGE_URL = "https://csdt-media-s3.s3.us-east-2.amazonaws.com/tutorials/assets/";

const prefixContent = (content: string, prefix: string, index: number) => {
	if (content === "video") {
		return `${STORAGE_URL}${prefix}${prefix.split("/")[1]}-${index + 1}.mp4`;
	}
	if (content === "hint") {
		return `${STORAGE_URL}${prefix}${prefix.split("/")[1]}-${index + 1}-solution.mp4`;
	}

	if (content === "code") {
		return `${STORAGE_URL}${prefix}${prefix.split("/")[1]}-${index + 1}.png`;
	}
	if (content === "outcome") {
		return `${STORAGE_URL}${prefix}${prefix.split("/")[1]}-outcome.png`;
	}

	if (content === "nextSteps") {
		return `/assets/${prefix}${prefix.split("/")[1]}-next-steps.md`;
	}

	return `/assets/${prefix}${prefix.split("/")[1]}-${index + 1}.md`;
};

export const getStepContentUrls = ({ tutorial }: { tutorial: Tutorial }) => {
	return tutorial.steps.map((step, stepIndex) => {
		const contentObj: { [key: string]: string } = {};
		for (const content of step.content) {
			contentObj[content] = prefixContent(content, tutorial.prefix, stepIndex);
		}
		return contentObj;
	});
};

export const getCSnapBase = (tutorial: Tutorial) => {
	const url = `${STORAGE_URL}${tutorial.prefix}${tutorial.base}`;
	return url;
};
