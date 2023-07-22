import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StackParams } from "../App";
import Home from "../screens/Home";
import LocalCloud from "../screens/LocalCloud";
import LoginAppRoot from "../screens/LoginApp";

export const Navigation = () => {
  const Stack = createStackNavigator<StackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LocalCloud" component={LocalCloud} />
        <Stack.Screen name="LoginApp" component={LoginAppRoot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
