import {render} from '@testing-library/react'
import Input from '.'

describe("Input component", () => {
    let suit;
    let props;

    it("should match snapshot", () => {
        suit = render(<Input {...props} />)
        expect(suit).toMatchSnapshot();

    })
})