import {shallow} from 'enzyme'
import Input from '.'

const render = (props) => shallow(<Input {...props}></Input>)

describe("Input component", () => {
    let suite;
    let props;

    describe("without props", () => {
        beforeEach(() => {
            suite = render(props)
        })

        it("should match snapshot", () => {
            // suit = render(<Input {...props} />)
            expect(suite).toMatchSnapshot();
        })
    })

    describe('with props', () => {
        beforeEach(() => {
            props = {
                placeholder: 'Input your data',
                name: 'search'
            };

            suite = render(props);
        });

        it('should match snapshot', () => {
            expect(suite).toMatchSnapshot();
        })
    });
})