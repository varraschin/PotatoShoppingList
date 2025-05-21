import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function ItemList({ item, markItem, unmarkItem, removeItem }) {
  return (
    <View style={styles.ItemList}>
        <Text style={item.bought ? style.itemBought : styles.itemToBuy}>
            {item?.name}</Text>
        <TouchableOpacity style={styles.actionIcon}>
            <Ionicons name="bag-check-outline" size={24} color="fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionIcon, { backgroundColor: "darkred"}]}>
            <Ionicons name='trash-bin-outline' size={24} color='#fff' />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    ItemList: {
        backgroundColor: '#000000c0',
        padding: 15,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemToBuy:{
        flex: 1,
        color: '#fff',
        fontSize: 24,
        textDecorationLine: 'none'
    },
    actionIcon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: 'darkgreen'

    }
})