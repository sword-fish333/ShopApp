     import React from 'react';
    import {View,Text, StyleSheet,Image,Button,TouchableOpacity} from 'react-native';

    const ProductItem =({image,title,price,onViewDetails,onAddToCart})=>{
        return <TouchableOpacity onPress={onViewDetails}><View style={styles.product}>
            <Image source={{uri:image}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
            <View style={styles.actions}>
                <Button title="View Details" onPress={onViewDetails}/>

                <Button title="Add to cart"  onPress={onAddToCart}/>
            </View>
        </View>
        </TouchableOpacity>
    }

    const styles=StyleSheet.create({
        product:{
            shadowColor:'#000',
            shadowOpacity:0.26,
            shadowOffset:{width:0,height:2},
            shadowRadius:8,
            elevation:5,
            borderRadius:10,
            backgroundColor:'#fff',
            height:300,
            margin:20
        },
        image:{
            height:'60%',
            width:'100%'
        },
        title:{
            fontSize:18,
            marginVertical:4,
            textAlign:'center',
            fontFamily:"open-sans-bold"
        },
        price:{
            fontSize:14,
            textAlign:'center',
            color:'#888',
            fontFamily:"open-sans"
        },
        actions:{
            flexDirection:'row',
            marginTop:5,
            justifyContent:'space-around',
            alignItems:'center'
        }
    });

    export default ProductItem;