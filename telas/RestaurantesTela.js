import React from 'react';

import {
    View,
    Text,
    StyleSheet
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
    container: {},

})

export default RestaurantesTela;