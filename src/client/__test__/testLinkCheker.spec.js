import "babel-polyfill"
import { linkChecker } from "../js/linkChecker"

describe("Testing The Link Checker function", () => {
    test("Testing the linkChecker() function", () => {
        expect(linkChecker).toBeDefined()
        expect(typeof linkChecker).toBe("function")
    })
});