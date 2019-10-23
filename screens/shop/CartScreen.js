import React from 'react';
import {View,Text,FlatList,Button,StyleSheet} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import {removeFromCart} from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';
const CartScreen=props=>{
    const totalAmount=useSelector(state=>state.cart.totalAmount);
    const cartItems=useSelector(state=>{
        const transformItems=[];

        for (let key in state.cart.items){
            transformItems.push({
                productId:key,
                productTitle:state.cart.items[key].productTitle,
                productPrice:state.cart.items[key].productPrice,
                quantity:state.cart.items[key].quantity,
                sum:state.cart.items[key].sum,
            })
        }
        return transformItems.sort((a,b)=>  a.productId>b.productId ? 1 :-1);
    });

    const dispatch=useDispatch();
    return <View style={styles.screen}>
        <View style={styles.summary}>
        <Text  style={styles.summaryText}>Total: $<Text style={styles.amount}>{totalAmount.toFixed(2)}</Text></Text>
        <Button color={Colors.accent} title='Order now' disabled={cartItems.length===0} onPress={()=>dispatch(ordersActions.addOrder(cartItems,totalAmount))}/>
        </View>
        <View>
            <Text style={styles.items}>Items:</Text>
        </View>
        <FlatList data={cartItems} keyExtractor={item=>item.productId} renderItem={({item})=><CartItem  quantity={item.quantity} title={item.productTitle} amount={item.sum} onRemove={()=>{
            dispatch(removeFromCart(item.productId))
        }}/>} />
    </View>

}

const styles=StyleSheet.create({
    screen: {
        margin: 20
    },
    items:{
      fontSize:18,
        marginLeft:15,
        fontFamily: 'open-sans-bold',
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
});
CartScreen.navigationOptions={
    headerTitle:'Your Cart'
}
export default CartScreen;