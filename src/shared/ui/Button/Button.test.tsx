import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
	test('Have in document', () => {
		render(<Button>Hello</Button>);
		expect(screen.getByText('Hello')).toBeInTheDocument();
	});
	test('Have a theme className', () => {
		render(
			<Button data-testid='hello' theme={ThemeButton.CLEAR}>
				Hello
			</Button>,
		);
		expect(screen.getByTestId('hello')).toHaveClass('clear');
	});
});
