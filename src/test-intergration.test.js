import Index from './pages/index';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import hotelData from './constants/hotel-data';
 

describe('Index', () => {
    it('should render all hotels', () => {
        render(<Index />);
        expect(screen.getByText(hotelData[0].name)).toBeInTheDocument();
        expect(screen.getByText(hotelData[1].name)).toBeInTheDocument();
        expect(screen.getByText(hotelData[2].name)).toBeInTheDocument();

    });
    it('should sort by name', () => {
        render(<Index />);
        const alpha = screen.getByText(/alphabetically/);
        expect(alpha).toBeInTheDocument();
        console.log(screen.getAllByRole('heading')[0])
        expect(screen.getAllByRole('heading')[0].textContent).toBe('Aguamarina Golf Hotel');
        userEvent.click(alpha);
        waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Las Piramides Resort');
        });
    });
    it('should sort by price', () => {
        render(<Index />);
        const price = screen.getByText(/price/);
        expect(price).toBeInTheDocument();
        expect(screen.getAllByRole('heading')[0].textContent).toBe('Aguamarina Golf Hotel');
        userEvent.click(price);
        waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Las Piramides Resort');
        });
        userEvent.click(price);
        waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Iberostar Grand Salome');
        });
    });
    it('should sort by star rating', () => {
        render(<Index />);
        const star = screen.getByText(/star rating/);
        expect(star).toBeInTheDocument();

        expect(screen.getAllByRole('heading')[0].textContent).toBe('Aguamarina Golf Hotel');
        userEvent.click(star);
        waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Las Piramides Resort');
        });
        userEvent.click(star);
        waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Iberostar Grand Salome');
        });

    });
    it('should show description on click', () => {
        render(<Index />);
        const description = screen.getByAllText(/Read more/);
        expect(description.length).toBe(3);
        // click
        // check description is shown
    });
});