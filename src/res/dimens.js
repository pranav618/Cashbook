import { verticalScale, scale } from "../responsiveScaling";

const dimens = {
  button: {
    width: {
      small: scale(72),
      medium: scale(120),
      large: scale(150),
      fill: "100%",
    },

    height: {
      xSmall: scale(24),
      small: scale(32),
      medium: scale(48),
      large: scale(56),
      xLarge: scale(72),
      xxLarge: scale(96),
    },

    fontSizes: {
      small: 16,
      medium: 18,
      large: 18,
    },

    borderRadius: 4,
  },

  textInput: {
    width: {
      small: scale(152),
      large: scale(312),
    },

    height: {
      small: scale(64),
      large: scale(56),
    },
  },

  margins: {
    vertical: {
      xSmall: verticalScale(4),
      small: verticalScale(8),
      xMedium: verticalScale(12),
      medium: verticalScale(16),
      large: verticalScale(24),
      xLarge: verticalScale(32),
      xxLarge: scale(40),
      xxxLarge: scale(48),
    },
    horizontal: {
      xSmall: scale(4),
      small: scale(8),
      xMedium: scale(12),
      medium: scale(16),
      large: scale(24),
      xLarge: scale(32),
      xxLarge: scale(40),
      xxxLarge: scale(48),
    },
  },
};

export default dimens;
