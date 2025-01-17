import { Dimensions, Platform } from "react-native";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("screen");
export const deviceWidth = viewportWidth;
export const deviceHeight = viewportHeight;

let sampleHeight = 926;
let sampleWidth = 428;

const scale = viewportWidth / 375;

//Device type check
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isTablet = viewportHeight / viewportWidth < 1.6;

export function getWidth(value) {
  return (value / sampleWidth) * deviceWidth;
}

export function getHeight(value) {
  return (value / sampleHeight) * deviceHeight;
}

// Responsive size function
export function moderateScale(size) {
  const newSize = size * scale;
  return Math.round(newSize);
}

export const checkPlatform = () => {
  if (Platform.OS === "android") {
    return "android";
  } else {
    return "ios";
  }
};
