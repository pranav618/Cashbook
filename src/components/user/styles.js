import { StyleSheet } from "react-native";
import { scale, verticalScale } from "../../responsiveScaling";
import R from "../../res/R";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  subContainer: {
    borderRadius: 10,
  },

  gitContainer: {
    marginVertical: verticalScale(15),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default styles;
