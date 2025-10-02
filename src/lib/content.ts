import type { Tutorial } from "@/data/tutorial-data";

const STORAGE_URL = "https://csdt-media-s3.s3.us-east-2.amazonaws.com/tutorials/assets/";

const prefixContent = (content: string, prefix: string, index: number) => {
	if (content === "video") {
		return `${STORAGE_URL}${prefix}video-steps/${prefix.split("/")[1]}-${index + 1}.mp4`;
	}
	if (content === "outcome") {
		return `${STORAGE_URL}${prefix}${prefix.split("/")[1]}-outcome.png`;
	}
	if (content === "solution") {
		return `${STORAGE_URL}${prefix}${prefix.split("/")[1]}-${index + 1}-solution.mp4`;
	}
	if (content === "goal") {
		return `${STORAGE_URL}${prefix}${prefix.split("/")[1]}-goal-${index + 1}.png`;
	}
	if (content === "code") {
		return `${STORAGE_URL}${prefix}code/${prefix.split("/")[1]}-${index + 1}.png`;
	}
	if (content === "description") {
		return `${STORAGE_URL}${prefix}step-descriptions/${prefix.split("/")[1]}-${index + 1}.md`;
	}
	if (content === "nextSteps") {
		return `${STORAGE_URL}${prefix}step-descriptions/${prefix.split("/")[1]}-next-steps.md`;
	}

	return "";
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
	if (!tutorial.base) return `${STORAGE_URL}${tutorial.prefix}base.xml`;

	return `${STORAGE_URL}${tutorial.prefix}${tutorial.base}`;
};
