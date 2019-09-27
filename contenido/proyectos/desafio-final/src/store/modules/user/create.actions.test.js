import { saveActionsAsyncCreator } from './create.actions';

describe('saveActionsAsyncCreator test', () => {
    it('saveActionsAsyncCreator', () => {

        const dispatch = () => {}
        const getStore = () => ({
            auth: {
                login: {
                    data: ''
                }
            }
        })
        const result = saveActionsAsyncCreator()

        result(dispatch, getStore)

        //expect(output.label).toBe('Nombre');
    });
});