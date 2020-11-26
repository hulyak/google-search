import {mount} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'
import App from '../App';

// Memory Router for Routing
const render = (initialEntries) => mount(
            <MemoryRouter keyLength={0} initialEntries={initialEntries}>
                <App/>
            </MemoryRouter>
        );

describe('App component', () => {
    let suite;

    describe('when home page is rendered', () => {
        beforeEach(() => {
            suite = render(['/'])
        });

        it('should match home page snapshot', () => {
            expect(suite).toMatchSnapshot();
        })
    });

    describe('when not found page is rendered', () => {
        beforeEach(() => {
            suite = render(['/afdsfd'])
        });

        it('should match not found page snapshot', () => {
            expect(suite).toMatchSnapshot();
        })
    });
    
})