import SortButton from ".";
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';

const setSortValue = jest.fn();

const buttonValues = {
    label: 'sort alphabetically',
    sortName: 'name',
    sortValue: {
        sortName: 'name',
        ascending: true,
    },
    setSortValue: setSortValue,
}

describe('SortButton', () => {
    it('should render', () => {
        render(<SortButton {...buttonValues}/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText(/sort alphabetically/)).toBeInTheDocument();
    });
    it('should call setSortValue', () => {
        render(<SortButton {...buttonValues}/>);
        screen.getByRole('button').click();
        expect(setSortValue).toHaveBeenCalledTimes(1);
        expect(setSortValue).toHaveBeenCalledWith({
            sortName: 'name',
            ascending: false,
        });
    });
});
