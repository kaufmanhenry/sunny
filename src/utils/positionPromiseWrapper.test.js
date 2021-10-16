const rewire = require("rewire")
const positionPromiseWrapper = rewire("./positionPromiseWrapper")
const getCurrentPosition = positionPromiseWrapper.__get__("getCurrentPosition")
// @ponicode
describe("getCurrentPosition", () => {
    test("0", () => {
        let callFunction = () => {
            getCurrentPosition()
        }
    
        expect(callFunction).not.toThrow()
    })
})
