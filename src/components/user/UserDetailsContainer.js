import React, { Component } from "react";
import { actions as userActions } from "../../redux/reducers/userDuck";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import R from "../../res/R";
import { Text, View } from "react-native";
import { ListItem, Avatar, SocialIcon } from "react-native-elements";
import { FlatList } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native";
import styles from "./styles";

export class UserDetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loginName: null,
    };
  }

  async componentDidMount() {
    const loginName = this.props.navigation.state.params.loginName;
    await this.props.actions.userActions.getUserDetails(loginName);
    await this.props.actions.userActions.getGit(loginName);
    await this.props.actions.userActions.getGist(loginName);
  }

  componentDidUpdate(prevProps, prevState) {
    const { userDetails, gitDetails, gistDetails } = this.props;
    if (prevProps.userDetails !== userDetails) {
      userDetails && this.setState({ user: userDetails });
    }
  }

  renderGitItem = (item) => (
    <View>
      <Text>{item.item.url}</Text>
    </View>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    console.log("********222", this.props, this.state);
    const item = this.state.user;
    const { userDetails, gitDetails, gistDetails } = this.props;
    return (
      <ScrollView style={styles.mainContainer}>
        {item && gitDetails && gistDetails && (
          <View>
            <ListItem
              bottomDivider
              Component={TouchableScale}
              friction={90}
              tension={100}
              activeScale={0.95}
              linearGradientProps={{
                colors: ["#FF9800", "#F44336"],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              ViewComponent={LinearGradient}
              containerStyle={styles.subContainer}
            >
              <Avatar rounded source={{ uri: item.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.location}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.company}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>

            <View>
              <View style={styles.gitContainer}>
                <SocialIcon raised={false} type="github" light iconSize={24} />
                <Text>{R.strings.git}</Text>
              </View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={gitDetails}
                renderItem={this.renderGitItem}
              />
            </View>

            <View>
              <View style={styles.gitContainer}>
                <SocialIcon raised={false} type="github" light iconSize={24} />
                <Text>{R.strings.gist}</Text>
              </View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={gistDetails}
                renderItem={this.renderGitItem}
              />
            </View>
          </View>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.user.userResponses.userDetails,
    gitDetails: state.user.userResponses.gitDetails,
    gistDetails: state.user.userResponses.gistDetails,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userActions: bindActionCreators(userActions, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsContainer);
