import { createProduct } from '../scripts/helpers/objectHelpers';

test('Test the function createProduct', () => {
	expect(
		createProduct({ id: 69, code: 'trond tjemsland', title: 'Testing sucks' })
	).toStrictEqual({ id: 69, code: 'TROND TJEMSLAND', title: 'Testing_su' });
});
