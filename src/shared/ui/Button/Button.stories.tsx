import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		theme: { control: 'color' },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		theme: ThemeButton.CLEAR,
		children: 'text',
	},
};

export const Primary: Story = {
	args: {
		children: 'text',
	},
};
export const Outlined: Story = {
	args: {
		children: 'text',
		theme: ThemeButton.OUTLINE,
	},
};
