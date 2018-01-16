//Define all routes that will be used on the app!
export default [
	require('./dashboard').default,
	require('./accounts').default,
	require('./transactions').default,
	require('./alert').default,
	require('./auth').default,
	require('./card').default,
	require('./category').default
];	

