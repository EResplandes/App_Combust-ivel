// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./pages/home/index.js";
import { Login } from "./pages/login/index.js";
import { Preloader } from "./pages/preloader/index.js";
import { Formulario } from "./pages/formulario/index.js";

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Preloader"
        component={Preloader}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home} // Utiliza a navegação por guias dentro da tela Home
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Formulario"
        component={Formulario} // Utiliza a navegação por guias dentro da tela Home
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
