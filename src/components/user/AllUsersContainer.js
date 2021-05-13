import React from "react";
import { actions as userActions } from "../../redux/reducers/userDuck";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import appRoutes from "../../routing/appRoutes";
import { Text, Image, ToastAndroid, Platform, View } from "react-native";
import { ListItem, Avatar, SearchBar } from "react-native-elements";
import { FlatList } from "react-native";
import TouchableScale from "react-native-touchable-scale";

class AllUsersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      allUser: null,
      searchUser: null,
    };
  }

  navigateToUser = (user) => {
    this.props.navigation.navigate(appRoutes.user.singleUser, {
      loginName: user,
    });
  };

  updateSearch = (search) => {
    this.setState({ search }, () => {
      this.props.actions.userActions.searchUser(search);
    });
  };

  componentDidMount() {
    this.props.actions.userActions.getAllUser();
  }

  componentDidUpdate(prevProps, prevState) {
    const { getAllUsers, searchUser } = this.props;
    if (prevProps.getAllUsers !== getAllUsers) {
      getAllUsers &&
        getAllUsers.length > 0 &&
        this.setState({ allUser: getAllUsers });
    }
    if (prevProps.searchUser !== searchUser) {
      searchUser &&
        searchUser.items &&
        searchUser.items.length >= 0 &&
        this.setState({ searchUser: searchUser.items });
    }
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => this.navigateToUser(item.login)}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      containerStyle={{ borderRadius: 10 }}
    >
      <Avatar rounded source={{ uri: item.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>
          {item.login.charAt(0).toUpperCase() + item.login.slice(1)}
        </ListItem.Title>
        <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  render() {
    console.log("********", this.props, this.state);
    const { searchUser, allUser, search } = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme="true"
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={search.length > 0 ? searchUser : allUser}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getAllUsers: state.user.userResponses.getAllUsers,
    searchUser: state.user.userResponses.searchUser,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userActions: bindActionCreators(userActions, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);
