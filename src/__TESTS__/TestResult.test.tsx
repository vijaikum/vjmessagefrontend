import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TestResult from "../components/TestResult";

describe('Check if Increment button click',()=>{
    it('returns 1 is clicked once',()=>{
        render(<TestResult/>);
        const incrementButton = screen.getByTestId("incrementBtn");
        const countVal = screen.getByTestId("counter");
        expect(countVal.textContent).toEqual("0");
        fireEvent.click(incrementButton)
        expect(countVal.textContent).toEqual("1");
    }),
    it('returns 2 if clicked twice',()=>{
        render(<TestResult/>);
        const incrementButton = screen.getByTestId("incrementBtn");
        const countVal = screen.getByTestId("counter");
        expect(countVal.textContent).toEqual("0");
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)
        expect(countVal.textContent).toEqual("2");
    })
})
