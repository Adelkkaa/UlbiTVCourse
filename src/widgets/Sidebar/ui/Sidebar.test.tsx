import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar', () => {
	test('Document have sidebar', () => {
		renderWithTranslations(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('Document collapse sidebar', () => {
		renderWithTranslations(<Sidebar />);
		const button = screen.getByTestId('toggleButton');
		fireEvent.click(button);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
		screen.debug();
	});

	test('Document uncollapse sidebar', () => {
		renderWithTranslations(<Sidebar />);
		const button = screen.getByTestId('toggleButton');
		fireEvent.click(button);
		fireEvent.click(button);
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
		screen.debug();
	});
});
