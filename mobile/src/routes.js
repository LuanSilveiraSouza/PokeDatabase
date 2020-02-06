import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/FontAwesome';
import GLOBAL from './Global';

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
            activeBackgroundColor: GLOBAL.COLOR.BLUE,
            inactiveBackgroundColor: GLOBAL.COLOR.WHITE,
            activeTintColor: GLOBAL.COLOR.BLACK,
            inactiveTintColor: GLOBAL.COLOR.BLACK,
            labelPosition: 'below-icon',
            tabStyle: {
                borderColor: GLOBAL.COLOR.WHITE,
            },
            labelStyle : {
                fontSize: 18,
            },
            showIcon: true,
        },
        defaultNavigationOptions: {
            //tabBarIcon: () => (<Icon name="home" size={16} color="#F8F8F8"/>)
        }
    })
);

export default Routes;