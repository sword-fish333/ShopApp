import React from 'react';
import {View,Text,Button,ScrollView,StyleSheet,Image} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen=({navigation})=>{
    const productId=navigation.getParam('itemId');
 const selectedProduct=useSelector(state=>state.products.availableProducts.find(product=>product.id===productId));
 const dispatch=useDispatch();
    return <ScrollView>
        <Image style={styles.image} source={{uri:selectedProduct.imageUrl}}/>
        <View style={styles.actions}>
        <Button  onPress={()=>dispatch(cartActions.addToCart(selectedProduct))}   color={Colors.primary} title='Add to cart'/>
        </View>
        <Text style={styles.price}>$ {selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
};

const styles=StyleSheet.create({
        image:{
            width:'100%',
            height:300
        },
    actions:{
      marginVertical:10,
        alignItems:'center'
    },
    price:{
            fontSize:20,
        color:'#888',
        textAlign:'center',
        marginVertical:20,
        fontFamily:"open-sans-bold"
    },
    description:{
            fontSize:14,
        textAlign:'center',
        marginHorizontal:20,
        fontFamily:"open-sans"
    }
});

ProductDetailScreen.navigationOptions=({navigation})=>{
    return {
        headerTitle:navigation.getParam('productTitle')
    }
}
export default ProductDetailScreen;