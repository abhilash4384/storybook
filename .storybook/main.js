/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
				category: 'JavaScript',
			},
		},
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
};
export default config;
