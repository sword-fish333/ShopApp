import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import CartItem from './CartItem';
import Colors from '../../constants/Colors';
const OrderItem=({amount,date,items})=>{
const [showDetails,setShowDetails]=useState(false);
    return <View style={styles.orderItem}>

            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${amount.toFixed(2)}</Text>
                <Text style={styles.date}>{date}</Text>

        </View>
        <Button title={showDetails ? 'Hide details' :"Show details" }  color={Colors.primary} onPress={()=>{
        setShowDetails(prevState=>!prevState);
        }
        }/>
        {showDetails && <View style={styles.detailItems}>
            {items.map(cartItem=><CartItem  key={cartItem.productId} quatity={cartItem.quantity} title={cartItem.productTitle} amount={cartItem.sum} />)}
        </View>}
    </View>
}

styles=StyleSheet.create({
        orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
        summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
        totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
        date: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: '#888'
    },
        detailItems: {
        width: '100%'
    }
    });


        export  default  OrderItem;