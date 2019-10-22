import React from 'react';
import {FlatList} from 'react-native';
import {View,Text,Platform} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
const ProductsOverviewScreen=props=>{
    const dispatch=useDispatch();
    onViewDetails=(itemId,itemTitle)=>{
        props.navigation.navigate('ProductDetail',{itemId:itemId,
        productTitle:itemTitle
        });
    };
    onAddToCart=(item)=>{
        dispatch(cartActions.addToCart(item))
    };
    const products=useSelector(state=>state.products.availableProducts);

    return <FlatList data={products}
                     keyExtractor={item=>item.id}
                     renderItem={({item})=><ProductItem
                         image={item.imageUrl} title={item.title} price={item.price}
                         onViewDetails={()=>this.onViewDetails(item.id,item.title)}
                         onAddToCart={()=>this.onAddToCart(item)}
                     />}
    />
}
ProductsOverviewScreen.navigationOptions=navData=>{
    return {
        headerTitle: 'All products',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Cart" iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => navData.navigation.navigate('Cart')  }/>
        </HeaderButtons>
    }
}
export default ProductsOverviewScreen;