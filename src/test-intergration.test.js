import Index from './pages/index';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';

describe('Index', () => {
    it('renders a heading', () => {
        render(<Index />);
        expect(screen.getByText(/hello world/)).toBeInTheDocument();
    });
});