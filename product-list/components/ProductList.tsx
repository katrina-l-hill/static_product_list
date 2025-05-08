import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const products = [
    {id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200},
    {id: 2, name: "Smartphone", description: "Smartphone with advanced features.", price: 1000},
    {id: 3, name: "Tablet", description: "Tablet for productivity and mobility.", price: 2000},
];

const ProductList = () => {
    return (
        <View style={styles.container}>
            {products.map(product => ( 
                <View key={product.id} style={styles.card}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    card: {
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      marginTop: 4,
      fontSize: 14,
      color: '#666',
    },
    price: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: '600',
      color: '#2a9d8f',
    },
  });
  

export default ProductList;