import React from "react";
import '@testing-library/jest-dom'

import {ChevronDown24, ChevronDown15} from "../src/components/atoms/icons/Chevron";
import { render } from "@testing-library/react";

test('render a ChevronDown icon with size 24, 15', async () => {
    
    render(<ChevronDown24 />);

    const text = document.querySelector("svg");

  // ACT
  expect(text).toHaveAttribute("height", "24");

})

test('render a ChevronDown icon with size 15', async () => {
    
    render(<ChevronDown15 />);

    const text = document.querySelector("svg");

  // ACT
  expect(text).toHaveAttribute("height", "15");

})