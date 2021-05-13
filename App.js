import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootStack from './src/AppNavigator'
import {persistor, store } from './src/redux/store'
import R from './src/res/R'

class App extends React.PureComponent {

    render() {

        return (
            <Provider store={store}>
				
                    <RootStack  />
               
            </Provider>
        )
    }
}

export default App