import React from 'react';
import Context from './src/globalState/context'
import useGlobalState from './src/globalState/useGlobalState'
import Router from './src/router/router'
import 'react-native-gesture-handler';

const App = () => {


	const store = useGlobalState();

	return (
		<>
			<Context.Provider value={store}>
				<Router />
			</Context.Provider>
		</>
	);
};

export default App;
