import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartSceren from '../screens/shop/CartScreen';
import {Platform} from 'react-native';
const ProductsNavigator=createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,
    ProductDetail:ProductDetailScreen,
    Cart:CartSceren
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==='android' ? Colors.primary: ''
        },
        headerTitleStyle:{
          fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor: Platform.OS==='android'  ? '#fff': Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);