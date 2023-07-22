import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text } from "react-native";
import { StackParams } from "../../App";

type NavigationProps = StackNavigationProp<StackParams, "Home">;

const Home = () => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <>
      <Text>This is XV915 git homepage</Text>
      <Button
        testID="home to local cloud app"
        title="try local cloud app"
        onPress={() => navigate("LocalCloud")}
      />
      <Button
        testID="home to login app"
        title="try login app"
        onPress={() => navigate("LoginApp")}
      />
    </>
  );
};

export default Home;
