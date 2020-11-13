import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import RestaurantesTela from '../telas/RestaurantesTela';
import AdicionarRestaurantesTela from '../telas/AdicionarRestaurantesTela';

const Navigator = createStackNavigator({
    Restaurantes: RestaurantesTela,
    AdicionarRestauranteTela: AdicionarRestaurantesTela
});

export default createAppContainer(Navigator);