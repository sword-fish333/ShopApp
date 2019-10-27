import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';
import HeaderButton from '../../components/UI/HeaderButton';
const EditProductScreen=props=>{

    const prodId=props.navigation.getParam('prodId');
    const editProduct=useSelector(state=>state.products.userProducts.find(userProd=>userProd.id===prodId));
    const  [title,setTitle]=useState(editProduct ? editProduct.title : '');
    const  [price,setPrice]=useState(editProduct ? editProduct.price : '');
    const  [imageUrl,setImgUr]=useState(editProduct ? editProduct.imageUrl : '');
    const  [description,setDescription]=useState(editProduct ? editProduct.description : '');


    return <ScrollView>
        <View style={styles.form}>
        <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={text=>setTitle(text)}/>
        </View>
        <View style={styles.formControl}>
            <Text style={styles.label}>ImageUrl</Text>
            <TextInput style={styles.input} value={imageUrl} onChangeText={text=>setImgUr(text)}/>
        </View>
            {editProduct && <View style={styles.formControl}>
                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input} value={price} onChangeText={text => setPrice(text)}/>
            </View>
            }
        <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={text=>setDescription(text)}/>
        </View>
        </View>
    </ScrollView>
}

EditProductScreen.navigationOptions=navData=>{
    return {
        headerTitle:navData.navigation.getParam('productId') ?'Edit Product' :'Add Product',
        headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Add" iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                  onPress={() => navData.navigation.navigate('EditProduct') }/>
        </HeaderButtons>
    }
}
const styles=StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export  default  EditProductScreen;