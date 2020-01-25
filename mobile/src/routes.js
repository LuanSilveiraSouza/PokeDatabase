import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {FontAwesome} from '@expo/vector-icons';

import Main from './screens/Main';
import List from './screens/List';

const Routes = createAppContainer(
    createBottomTabNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Home',
            }
        },
        List: {
            screen: List,
            navigationOptions: {
                title: 'List'
            }
        } 
    }, {
        tabBarOptions: {
            activeBackgroundColor: '#000000',
            activeTintColor: '#ffffff',
            labelPosition: 'below-icon',
            tabStyle: {
                borderColor: '#ffffff',
            },
            labelStyle : {
                fontSize: 18,
            },
        }
    })
);

export default Routes;