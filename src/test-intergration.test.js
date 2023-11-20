import Index from './pages/index';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';
import hotelData from './constants/hotel-data';
 

describe('Index', () => {
    it('should render ', () => {
        render(<Index />);
        expect(screen.getByText(hotelData[0].name)).toBeInTheDocument();
        // ... more options
    });
    it('should sort by name', () => {
        render(<Index />);
        const alpha = screen.getByText(/alphabetically/);
        expect(alpha).toBeInTheDocument();
        // click
        // check order changes
    });
    it('should sort by price', () => {
        render(<Index />);
        const price = screen.getByText(/price/);
        expect(price).toBeInTheDocument();
        // click
        // check order changes
    });
    it('should sort by star rating', () => {
        render(<Index />);
        const star = screen.getByText(/star rating/);
        expect(star).toBeInTheDocument();
        // click
        // check order changes
    });
    it('should show description on click', () => {
        render(<Index />);
        const description = screen.getByAllText(/Read more/);
        expect(description.length).toBe(3);
        // click
        // check description is shown
    });
});