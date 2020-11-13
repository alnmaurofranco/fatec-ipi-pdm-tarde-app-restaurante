import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const RestaurantesTela = (props) => {
    return (
        <View style={estilos.container}>
            <Text>Restaurantes</Text>
            <TouchableOpacity
                style={estilos.fab}
                onPress={() => { props.navigation.navigate('AdicionarRestaurante') }}
            >
                <Text style={estilos.iconeFab}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    fab: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03a9f4',
        borderRadius: 30,
        elevation: 8
    },
    iconeFab: {
        fontSize: 20,
        color: 'white'
    }
})

export default RestaurantesTela;