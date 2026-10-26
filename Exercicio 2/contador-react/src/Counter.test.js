import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import { act } from 'react';
import '@testing-library/jest-dom/extend-expect'; 
import Counter from './Counter';

test('exibe o contador inicial com valor 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Contador: 0')).toBeInTheDocument();
});

test('incrementa o contador ao clicar no botão Incrementar', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Incrementar');

    act(() => {
        fireEvent.click(incrementButton); 
    });
    
    expect(getByText('Contador: 1')).toBeInTheDocument();
});

test('decrementa o contador ao clicar no botão Decrementar', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrementar');

    act(() => {
        fireEvent.click(decrementButton);
    });

    expect(getByText('Contador: -1')).toBeInTheDocument();
});
