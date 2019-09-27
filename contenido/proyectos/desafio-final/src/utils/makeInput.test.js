import makeInput from './makeInput';

describe('makeInput test', () => {
    it('when return valid object ', () => {
        const input = {
            type: 'text',
            onChange: () => {},
            value: '',
        };
        const label = 'Nombre';

        const output = makeInput(input, label);

        expect(output.label).toBe('Nombre');
    });

    it('when return valid object type equal text', () => {
        const input = {
            type: 'text',
            onChange: () => {},
            value: '',
        };
        const label = 'Nombre';

        const output = makeInput(input, label);
        expect(JSON.stringify(output)).toBe('{"input":{"type":"text","value":""},"label":"Nombre"}');
    });
});