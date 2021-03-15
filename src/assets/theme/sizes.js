import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,
    // app dimensions
    width,
    height
}

const appTheme = { SIZES };

export default appTheme;