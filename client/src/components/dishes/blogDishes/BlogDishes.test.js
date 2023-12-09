import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, useParams } from 'react-router-dom';
import BlogDishes from './BlogDishes';
import * as dishService from '../../../services/dishService';
import * as chefService from '../../../services/chefService';
import AuthContext from '../../../contexts/authContext';

jest.mock('../../../services/dishService');
jest.mock('../../../services/chefService');

const mockDishes = [
  { _id: '1', title: 'Dish 1', ingredients: [], instructions: '', author: 'Chef 1', image: '', optionalExtras: [], subtitle: '', shortDescription: '' },
  { _id: '2', title: 'Dish 2', ingredients: [], instructions: '', author: 'Chef 2', image: '', optionalExtras: [], subtitle: '', shortDescription: '' }
];

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // This will preserve other exports from react-router-dom
    useParams: jest.fn() // Mock useParams
}));

describe('BlogDishes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        dishService.getAll.mockResolvedValue(mockDishes);
        chefService.getChefRecipies.mockResolvedValue(mockDishes);
        useParams.mockReturnValue({ category: 'category1' });
    });

    test('fetches and displays dishes for a given category', async () => {
        await act(async () => {
            render(
                <MemoryRouter>
                    <AuthContext.Provider value={{ username: 'testUser' }}>
                        <BlogDishes />
                    </AuthContext.Provider>
                </MemoryRouter>
            );
        });

        expect(screen.getByText('Dish 1')).toBeInTheDocument();
        expect(screen.getByText('Dish 2')).toBeInTheDocument();
        expect(dishService.getAll).toHaveBeenCalledWith('category1');
    });

    test('fetches and displays dishes for a given chef', async () => {
        useParams.mockReturnValue({ userFirstName: 'Chef 1' });

        await act(async () => {
            render(
                <MemoryRouter>
                    <AuthContext.Provider value={{ username: 'testUser' }}>
                        <BlogDishes />
                    </AuthContext.Provider>
                </MemoryRouter>
            );
        });

        expect(screen.getByText('Dish 1')).toBeInTheDocument();
        expect(screen.getByText('Dish 2')).toBeInTheDocument();
        expect(chefService.getChefRecipies).toHaveBeenCalledWith('Chef 1');
    });

    // Additional tests can be added as needed
});
