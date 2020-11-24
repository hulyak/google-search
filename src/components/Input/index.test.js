import {shallow} from 'enzyme'
import Input from '.'

const render = (props) => shallow(<Input {...props}></Input>)

describe("Input component", () => {
    let suit;
    let props;

    describe("without props", () => {
        beforeEach(() => {
            suit = render(props)
        })

        it("should match snapshot", () => {
            // suit = render(<Input {...props} />)
            expect(suit).toMatchSnapshot();
        })
    })

    describe('with props', () => {
        beforeEach(() => {
            props = {
                placeholder: 'Input your data',
                name: 'search'
            };

            suit = render(props);
        });

        it('should match snapshot', () => {
            expect(suit).toMatchSnapshot();
        })
    });
})