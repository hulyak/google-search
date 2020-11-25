import {mount} from 'enzyme'

import Container from ".";

const render = (props, children) => mount(<Container {...props}>{children}</Container>)

jest.mock('../../hooks', () => ({
    useDebounce: jest.fn(() => ({})),
    useSearch: jest.fn(() => ({articles: []})),
    useSearchForm: jest.fn(() => ({
        searchValue: 'testValue',
        onSearchChange: jest.fn()
    }))
}));

// children is a function receives three props
const Children = () => <div>Test</div>

describe("Container component", () => {
    let suite;
    let props;
    let children = ({searchValue, onSearchChange, articles}) => <Children searchValue={searchValue} onSearchChange={onSearchChange} articles={articles} />
    
    describe('without props', () => {
        it('should match snapshot', () => {

        })
    })
    

})