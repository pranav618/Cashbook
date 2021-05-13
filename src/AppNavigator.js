import React from "react";
import { Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AllUsersContainer from "./components/user/AllUsersContainer";
import appRoutes from "./routing/appRoutes";
import UserDetailsContainer from "./components/user/UserDetailsContainer";
import { styles } from "./commonStyles";

const headerTitle = (title) => (
  <View>
    <Text
      style={
        title === "User" ? styles.headerTitleStyle2 : styles.headerTitleStyle1
      }
    >
      {title}
    </Text>
  </View>
);

const UserNavigator = createStackNavigator({
  AllUsersContainer: {
    screen: AllUsersContainer,
    navigationOptions: {
      headerTitle: headerTitle("CashBook"),
    },
  },
  [appRoutes.user.singleUser]: {
    screen: UserDetailsContainer,
    navigationOptions: {
      headerTitle: headerTitle("User"),
    },
  },
});

const RootStack = createSwitchNavigator({
  UserNavigator: {
    screen: UserNavigator,
  },
});

export default createAppContainer(RootStack);
