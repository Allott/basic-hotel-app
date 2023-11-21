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
    it('should sort by name', async () => {
        render(<Index />);
        const alpha = screen.getByText(/alphabetically/);
        expect(alpha).toBeInTheDocument();
        console.log(screen.getAllByRole('heading')[0])
        expect(screen.getAllByRole('heading')[0].textContent).toBe('Aguamarina Golf Hotel');
        userEvent.click(alpha);
        await waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Las Piramides Resort');
        });
    });
    it('should sort by price', async () => {
        render(<Index />);
        const price = screen.getByText(/price/);
        expect(price).toBeInTheDocument();
        expect(screen.getAllByRole('heading')[0].textContent).toBe('Aguamarina Golf Hotel');
        userEvent.click(price);
        await waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Las Piramides Resort');
        });
        userEvent.click(price);
        await waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Iberostar Grand Salome');
        });
    });
    it('should sort by star rating', async () => {
        render(<Index />);
        const star = screen.getByText(/star rating/);
        expect(star).toBeInTheDocument();
        expect(screen.getAllByRole('heading')[0].textContent).toBe('Aguamarina Golf Hotel');
        userEvent.click(star);
        await waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Iberostar Grand Salome');
        });
        userEvent.click(star);
        await waitFor(() => {
            expect(screen.getAllByRole('heading')[0].textContent).toBe('Las Piramides Resort');
        });
    });
    it('should show description on click', async () => {
        render(<Index />);
        const description = screen.getAllByText(/Read more/);
        expect(description.length).toBe(3);
        userEvent.click(description[0]);
        await waitFor(() => {
            expect(screen.getByText(/Read less/));
        });
        expect(screen.getByText(/Overview/)).toBeInTheDocument();
        expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument();
        expect(screen.getAllByText(/Read more/).length).toBe(2);
        userEvent.click(screen.getByText(/Read less/));
        await waitFor(() => {
            expect(screen.getAllByText(/Read more/).length).toBe(3);
        });
    });
});