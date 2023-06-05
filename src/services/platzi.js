import { API_PLATZI_URL } from '../utils/constants';

export const getProducts = async () => {
	try {
		return await fetch( API_PLATZI_URL )
			.then( response => response.json() )
			.catch( error => {
				throw Error( error );
			} );
	} catch ( error ) {
		console.error( error );
		throw Error( 'Error al obtener los productos desde platzi.' );
	}
};
