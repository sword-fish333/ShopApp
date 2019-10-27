import React from 'react';
import {FlatList} from 'react-native';
import {View,Text,Platform,Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from  '../../constants/Colors'
import * as cartActions from '../../store/actions/cart';
        import {HeaderButtons,Item} from 'react-navigation-header-buttons';
        import HeaderButton from '../../components/UI/HeaderButton';
const ProductsOverviewScreen=props=>{
    const dispatch=useDispatch();

  const onAddToCart=(item)=>{
        dispatch(cartActions.addToCart(item))
    };
    const selectItemHandler=(id,title)=>{
        props.navigation.navigate('ProductDetail',{itemId:id,
            productTitle:title
        });
    }
    const products=useSelector(state=>state.products.availableProducts);

    return <FlatList data={products}
                     keyExtractor={item=>item.id}
                     renderItem={({item})=><ProductItem
                         image={item.imageUrl} title={item.title} price={item.price}
                         onSelect={()=>selectItemHandler(item.id,item.title)}
                         onAddToCart={()=>onAddToCart(item)}
                     >
                         <Button title="View Details" color={Colors.primary} onPress={()=>selectItemHandler(item.id,item.title)}/>

                         <Button title="Add to cart"  color={Colors.primary} onPress={onAddToCart}/>
                     </ProductItem>}
    />
}
ProductsOverviewScreen.navigationOptions=navData=>{
    return {
        headerTitle: 'All products',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Cart" iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => navData.navigation.navigate('Cart')  }/>
        </HeaderButtons>,
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer() }/>
        </HeaderButtons>
    }
}
export default ProductsOverviewScreen;