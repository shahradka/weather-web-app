import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Text } from '../src/components/atoms/text';
import React from 'react';

test('render a button with component type button and text: Test Text ', async () => {
    
    render(<Text componentType='button'>Test Text</Text>);

  // ACT
  expect(screen.getByRole('button')).toHaveTextContent('Test Text');

})

test('render a text with component variant heading1 with class: heading1-sm ', async () => {
    
    render(<Text variant='heading1'>Test Text</Text>);

    const text = document.querySelector("span");

  // ACT
  expect(text).toHaveClass("heading1-sm");

})