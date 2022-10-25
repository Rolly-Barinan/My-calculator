import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator1"
import '@testing-library/jest-dom'

describe('This is a simple calculator application', () => { 

    it("has a header", () => {
        render(<Calculator/>);
        const header = screen.queryByRole("heading",{name: "Simple Calculator"});
        expect(header).toBeInTheDocument();
     });

     it("has an input field for first input", () => {
        const {container} = render(<Calculator/>);
        const input = container.querySelector("input"); 
		expect(input).toBeInTheDocument();

        const input_ = screen.getByTestId("firstInput");
	    expect(input_).toBeInTheDocument();
        expect(input_).toHaveAttribute("type", "text");
     });

     it("has an input field for second input", () => {
        const {container} = render(<Calculator/>);
        const input = container.querySelector("input"); 
		expect(input).toBeInTheDocument();

        const input_ = screen.getByTestId("secondInput");
	    expect(input_).toBeInTheDocument();
        expect(input_).toHaveAttribute("type", "text");
     });

     it("has an add button operation", ()=>{
		const { container } = render(<Calculator/>);
		const btn = screen.getByTestId("addButton");
		expect(btn).toBeInTheDocument();
	});

    it("has a subtract button operation", ()=>{
		const { container } = render(<Calculator/>);
		const btn = screen.getByTestId("subtractButton");
		expect(btn).toBeInTheDocument();
	});

    it("has a multiplication button operation", ()=>{
		const { container } = render(<Calculator/>);
		const btn = screen.getByTestId("multiplyButton");
		expect(btn).toBeInTheDocument();
	});

    it("has a division button operation", ()=>{
		const { container } = render(<Calculator/>);
		const btn = screen.getByTestId("divideButton");
		expect(btn).toBeInTheDocument();
	});

    describe("Running simple calculator application",()=>{
        
        it("Adds two Numbers", ()=> {
            const { getByLabelText, getByTestId } = render(<Calculator/>);
		    const firstInput = getByLabelText("firstInput");
            fireEvent.change(firstInput, { target: { value: "5" }});
		    expect(firstInput.value).toBe("5");

		    const secondInput = getByLabelText("secondInput");
            fireEvent.change(secondInput, { target: { value: "5" }});
		    expect(secondInput.value).toBe("5");
            const btn = screen.getByTestId("addButton");

            fireEvent.click(btn);
            expect(screen.getByTestId("result")).toHaveTextContent("10");
        });

        it("Subtract two Numbers", ()=> {

            const { getByLabelText, getByTestId } = render(<Calculator/>);
		    const firstInput = getByLabelText("firstInput");
            fireEvent.change(firstInput, { target: { value: "5" }});
		    expect(firstInput.value).toBe("5");
 
		    const secondInput = getByLabelText("secondInput");
            fireEvent.change(secondInput, { target: { value: "5" }});
		    expect(secondInput.value).toBe("5");
            const btn = screen.getByTestId("subtractButton");

            fireEvent.click(btn);
            expect(screen.getByTestId("result")).toHaveTextContent("0");
        });

        
        it("Multiply two Numbers", ()=> {
            //1st Input Text
            const { getByLabelText, getByTestId } = render(<Calculator/>);
		    const firstInput = getByLabelText("firstInput");
            fireEvent.change(firstInput, { target: { value: "5" }});
		    expect(firstInput.value).toBe("5");
            //2nd Input Text
		    const secondInput = getByLabelText("secondInput");
            fireEvent.change(secondInput, { target: { value: "5" }});
		    expect(secondInput.value).toBe("5");
            const btn = screen.getByTestId("multiplyButton");

            fireEvent.click(btn);
            expect(screen.getByTestId("result")).toHaveTextContent("25");
        });

        it("Divide two Numbers", ()=> {
            //1st Input Text
            const { getByLabelText, getByTestId } = render(<Calculator/>);
		    const firstInput = getByLabelText("firstInput");
            fireEvent.change(firstInput, { target: { value: "5" }});
		    expect(firstInput.value).toBe("5");
            //2nd Input Text
		    const secondInput = getByLabelText("secondInput");
            fireEvent.change(secondInput, { target: { value: "5" }});
		    expect(secondInput.value).toBe("5");
            const btn = screen.getByTestId("divideButton");

            fireEvent.click(btn);
            expect(screen.getByTestId("result")).toHaveTextContent("1");
        });
    });
});



