import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {FlatList,Platform,Button} from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import {deleteProduct} from '../../store/actions/products';
import Colors from '../../constants/Colors';
const UserProductsScreen=props=>{

    const dispatch=useDispatch();
    const userProducts=useSelector(state=>state.products.userProducts);


    const editProductHandler=(id)=>{
        props.navigation.navigate('EditProduct',{productId:id})
    }
    return <FlatList data={userProducts} keyExtractor={item=>item.id} renderItem={({item})=>
        <ProductItem image={item.imageUrl} title={item.title}
                     description={item.description} price={item.price}
        onSelect={()=>{}}
                     onAddToCart={()=>{}}

        >
            <Button title="Edit" color={Colors.primary} onPress={()=>editProductHandler(item.id)}/>

            <Button title="Delete"  color={Colors.primary} onPress={()=>dispatch(deleteProduct(item.id))}/>
        </ProductItem>}/>
}

UserProductsScreen.navigationOptions=navData=>{
  return {
      headerTitle: 'Your products',
      headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => navData.navigation.toggleDrawer() }/>
      </HeaderButtons>,
      headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Add" iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                onPress={() => navData.navigation.navigate('EditProduct') }/>
      </HeaderButtons>
  }
}
export default UserProductsScreen;