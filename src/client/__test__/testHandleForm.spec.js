import "babel-polyfill"
import { handleSubmit, polarityIndex } from "../js/handleForm"

describe("Testing Handling Submit", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined()
        expect(typeof handleSubmit).toBe("function")
    })
});

describe("Testing Polarity Index explainer", () => {
    test("Testing the polarityIndex() function", () => {
        expect(polarityIndex).toBeDefined()
        expect(typeof polarityIndex).toBe("function")
    })
});

