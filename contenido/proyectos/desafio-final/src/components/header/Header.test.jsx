import * as React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => { },
    useSelector: () => ({
        checkout: { selectedAvailability: '', paymentTypes: '', pending: '' }
    })
}));

import Header from './Header';
describe('<Header />', () => {
    it('Expect to not log errors in console', () => {
        const spy = jest.spyOn(global.console, 'error');
        const wrapper = shallow(
            <Header />,
        );
        expect(wrapper).not.toBeNull();
        expect(spy).not.toHaveBeenCalled();

    });
    it('Should render and match the snapshot', () => {
        const wrapper = shallow(
            <Header />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});