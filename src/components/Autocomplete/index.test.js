import {shallow} from 'enzyme'
import Autocomplete from '.'

const render = (props) => shallow(<Autocomplete {...props} />)

describe('Autocomplete component', () => {
    let suite;
    let props;

    // describe('without props', () => {
    //     beforeEach(() => {
    //         suit = render(props);
    //     });

    //     it('should match snapshot', () => {
    //         expect(suit).toMatchSnapshot();
    //     });
    // });

    describe('when articles are passed', () => {
        beforeEach(() => {
            props = {
                articles: [1],
                searchValue: 'search value',
                onSearchChange: jest.fn()  // mock function
            };
            suite = render(props);
        });

        it('should match renderMenu snapshot', () => {
            const props = suite.props();

            expect(props.renderMenu()).toMatchSnapshot();
        });
    });

    describe('when articles are NOT passed', () => {
        beforeEach(() => {
            props = {
                articles: null,
                searchValue: 'search value',
                onSearchChange: jest.fn()
            };
            suite = render(props);
        });

        it('should match renderMenu snapshot', () => {
            const props = suite.props();

            expect(props.renderMenu()).toMatchSnapshot();
        });
    });

    describe('when renderItem props is called', () => {
        beforeEach(() => {
            suite = render(props);
        });

        describe('when item is highlighted', () => {
            it('should match renderMenu snapshot', () => {
                const { renderItem } = suite.props();
                const item = {
                    id: 1,
                    label: 'test'
                };

                expect(renderItem(item, true)).toMatchSnapshot();
            });
        });

        describe('when item is NOT highlighted', () => {
            it('should match renderMenu snapshot', () => {
                const { renderItem } = suite.props();
                const item = {
                    id: 1,
                    label: 'test'
                };

                expect(renderItem(item, false)).toMatchSnapshot();
            });
        });
    });

    describe('when getItemValue is called', () => {
        beforeEach(() => {
            suite = render(props);
        });

        it('should return label', () => {
            const { getItemValue } = suite.props();

            expect(getItemValue({label: 'test'})).toBe('test')
        })
    })
});